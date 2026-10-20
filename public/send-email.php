<?php
/**
 * Send Contact Form Email via SMTP (SSL Port 465)
 * With Google reCAPTCHA v3 Verification
 */

// Headers for JSON response & CORS
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Load configuration
$config_file = __DIR__ . '/email-config.php';
$config = file_exists($config_file) ? require $config_file : [];

$smtp_host = $config['smtp_host'] ?? 'server.yalashbab.com';
$smtp_port = $config['smtp_port'] ?? 465;
$smtp_user = $config['smtp_user'] ?? 'noreply@aroma-perfumes.com';
$smtp_pass = $config['smtp_pass'] ?? 'CHdY?eo$1F&2O,O~';
$from_address = $config['from_address'] ?? 'noreply@aroma-perfumes.com';
$from_name = $config['from_name'] ?? 'Jusoor Insurance';
$ehlo_domain = $config['ehlo_domain'] ?? 'aroma-perfumes.com';
$email_title = $config['email_title'] ?? 'Jusoor Contact Form Submit';
$recipient_email = $config['recipient_email'] ?? 'info@jusoor.com.eg';
$recaptcha_secret = $config['recaptcha_secret'] ?? '6LeftfgtAAAAABtPwq5MqSci96cIPwVVg81X07zT';

// Read JSON input or form POST data
$raw_input = file_get_contents('php://input');
if (empty($raw_input)) {
    $raw_input = file_get_contents('php://stdin');
}
$data = json_decode($raw_input, true);
if (!is_array($data)) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$subject = trim($data['subject'] ?? '');
$message = trim($data['message'] ?? '');
$recaptcha_token = trim($data['recaptchaToken'] ?? ($data['recaptcha'] ?? ''));

// Validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'يرجى ملء جميع الحقول المطلوبة (Name, Email, Message).'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'البريد الإلكتروني المدخل غير صالح.'
    ]);
    exit;
}

// 1. Google reCAPTCHA v3 Verification
if (!empty($recaptcha_secret)) {
    $is_dev_test = ($recaptcha_token === 'test' && in_array($_SERVER['REMOTE_ADDR'] ?? '', ['127.0.0.1', '::1', 'localhost']));

    if (!$is_dev_test) {
        if (empty($recaptcha_token)) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => 'فشل التحقق الأمني من reCAPTCHA (لم يتم استلام رمز التحقق).'
            ]);
            exit;
        }

        $verify_url = 'https://www.google.com/recaptcha/api/siteverify';
        $post_data = http_build_query([
            'secret' => $recaptcha_secret,
            'response' => $recaptcha_token,
            'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
        ]);

        $response_body = false;
        if (function_exists('curl_init')) {
            $ch = curl_init($verify_url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
            curl_setopt($ch, CURLOPT_TIMEOUT, 10);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
            $response_body = curl_exec($ch);
            curl_close($ch);
        } else {
            $context = stream_context_create([
                'http' => [
                    'method' => 'POST',
                    'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                    'content' => $post_data,
                    'timeout' => 10
                ],
                'ssl' => [
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                ]
            ]);
            $response_body = @file_get_contents($verify_url, false, $context);
        }

        $captcha_valid = false;
        if ($response_body) {
            $res = json_decode($response_body, true);
            if (!empty($res['success']) && $res['success'] === true) {
                $score = isset($res['score']) ? (float)$res['score'] : 1.0;
                if ($score >= 0.3) {
                    $captcha_valid = true;
                }
            }
        }

        if (!$captcha_valid) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => 'فشل التحقق الأمني من Google reCAPTCHA v3. يرجى تحديث الصفحة والمحاولة مجدداً.'
            ]);
            exit;
        }
    }
}

// Check SMTP Password
if (empty($smtp_pass)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'كلمة مرور البريد الإلكتروني غير معينة في ملف الإعدادات email-config.php.'
    ]);
    exit;
}

// Helper functions for SMTP dialog
function read_smtp_response($socket) {
    $response = '';
    while (!feof($socket)) {
        $line = fgets($socket, 1024);
        if ($line === false) break;
        $response .= $line;
        if (preg_match('/^[0-9]{3} /', $line)) {
            break;
        }
    }
    return $response;
}

function send_smtp_cmd($socket, $cmd, $expected_code) {
    if (!empty($cmd)) {
        fwrite($socket, $cmd . "\r\n");
    }
    $res = read_smtp_response($socket);
    $code = substr(trim($res), 0, 3);
    if ((int)$code !== (int)$expected_code) {
        throw new Exception("SMTP Error: Expected $expected_code, got: " . trim($res));
    }
    return $res;
}

try {
    // 2. Connect to SSL SMTP (Port 465)
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);

    $errno = 0;
    $errstr = '';
    $socket = @stream_socket_client(
        "ssl://{$smtp_host}:{$smtp_port}",
        $errno,
        $errstr,
        20,
        STREAM_CLIENT_CONNECT,
        $context
    );

    if (!$socket) {
        throw new Exception("تعذر الاتصال بخادم البريد: $errno - $errstr");
    }

    // Read greeting (220)
    $greeting = read_smtp_response($socket);
    if (substr(trim($greeting), 0, 3) !== '220') {
        throw new Exception("تحية خادم البريد غير صالحة: " . trim($greeting));
    }

    // EHLO
    send_smtp_cmd($socket, "EHLO {$ehlo_domain}", 250);

    // AUTH LOGIN
    send_smtp_cmd($socket, 'AUTH LOGIN', 334);
    send_smtp_cmd($socket, base64_encode($smtp_user), 334);
    send_smtp_cmd($socket, base64_encode($smtp_pass), 235);

    // Parse recipients
    $recipients = is_array($recipient_email) ? $recipient_email : array_map('trim', explode(',', $recipient_email));

    // MAIL FROM
    send_smtp_cmd($socket, "MAIL FROM:<{$from_address}>", 250);

    // RCPT TO for each recipient
    foreach ($recipients as $rcpt) {
        if (!empty($rcpt)) {
            send_smtp_cmd($socket, "RCPT TO:<{$rcpt}>", 250);
        }
    }

    // DATA
    send_smtp_cmd($socket, 'DATA', 354);

    // Prepare email content
    $safe_name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $safe_email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $display_subject = !empty($subject) ? $subject : 'بدون موضوع';
    $safe_subject = htmlspecialchars($display_subject, ENT_QUOTES, 'UTF-8');
    $safe_message = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
    $current_date = date('Y-m-d H:i:s');
    $ip_address = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';

    $full_subject_text = !empty($subject) ? "{$email_title} - {$subject}" : $email_title;

    $html_body = <<<HTML
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <title>{$email_title}</title>
</head>
<body style="font-family: Arial, Tahoma, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.08); border: 1px solid #e1e7ec;">
        <div style="background-color: #004869; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">{$email_title}</h2>
        </div>
        <div style="padding: 24px; color: #333333; line-height: 1.6;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: bold; width: 120px;">اسم الراسل:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">{$safe_name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: bold;">البريد الإلكتروني:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;"><a href="mailto:{$safe_email}" style="color: #0084b4;">{$safe_email}</a></td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: bold;">الموضوع:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">{$safe_subject}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: bold;">التاريخ والوقت:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; direction: ltr; text-align: right;">{$current_date}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; font-weight: bold;">عنوان IP:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; direction: ltr; text-align: right;">{$ip_address}</td>
                </tr>
            </table>
            
            <div style="margin-top: 24px;">
                <h4 style="margin: 0 0 10px 0; color: #004869;">نص الرسالة:</h4>
                <div style="background-color: #f9fbfd; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0; white-space: pre-wrap;">{$safe_message}</div>
            </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 12px; color: #718096;">
            تم إرسال هذا البريد تلقائياً عبر موقع جسور (Jsour Insurance)
        </div>
    </div>
</body>
</html>
HTML;

    $plain_text = "{$email_title}\r\n\r\n"
        . "اسم الراسل: {$name}\r\n"
        . "البريد الإلكتروني: {$email}\r\n"
        . "الموضوع: {$display_subject}\r\n"
        . "التاريخ والوقت: {$current_date}\r\n\r\n"
        . "نص الرسالة:\r\n{$message}\r\n";

    $domain = !empty($ehlo_domain) ? $ehlo_domain : 'aroma-perfumes.com';
    $msg_id = '<' . time() . '.' . bin2hex(random_bytes(8)) . '@' . $domain . '>';
    $encoded_subject = '=?UTF-8?B?' . base64_encode($full_subject_text) . '?=';
    $encoded_from_name = '=?UTF-8?B?' . base64_encode($from_name) . '?=';
    $boundary = "----=_Part_" . md5(uniqid());

    $to_headers = implode(', ', array_map(function($r) { return "<{$r}>"; }, $recipients));

    $headers = [
        "Date: " . date('r'),
        "To: {$to_headers}",
        "From: {$encoded_from_name} <{$from_address}>",
        "Reply-To: <{$email}>",
        "Subject: {$encoded_subject}",
        "Message-ID: {$msg_id}",
        "X-Mailer: PHP/" . phpversion(),
        "MIME-Version: 1.0",
        "Content-Type: multipart/alternative; boundary=\"{$boundary}\""
    ];

    $body_parts = "--{$boundary}\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: 8bit\r\n\r\n"
        . $plain_text . "\r\n\r\n"
        . "--{$boundary}\r\n"
        . "Content-Type: text/html; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: 8bit\r\n\r\n"
        . $html_body . "\r\n\r\n"
        . "--{$boundary}--";

    $email_payload = implode("\r\n", $headers) . "\r\n\r\n" . $body_parts . "\r\n.";
    send_smtp_cmd($socket, $email_payload, 250);

    // QUIT
    send_smtp_cmd($socket, 'QUIT', 221);
    fclose($socket);

    echo json_encode([
        'success' => true,
        'message' => 'تم إرسال رسالتك بنجاح. شكراً لتواصلك معنا!'
    ]);

} catch (Exception $e) {
    if (isset($socket) && is_resource($socket)) {
        @fclose($socket);
    }
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'حدث خطأ أثناء إرسال البريد الإلكتروني: ' . $e->getMessage()
    ]);
}
