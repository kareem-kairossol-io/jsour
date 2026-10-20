const { spawn } = require('child_process');
const path = require('path');
const express = require('express');

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const handleSendEmail = (req, res) => {
    const phpScript = path.resolve(__dirname, '../public/send-email.php');
    const inputData = JSON.stringify(req.body);

    const php = spawn('php', [
      '-r',
      `$_SERVER['REQUEST_METHOD'] = 'POST'; $_SERVER['REMOTE_ADDR'] = '127.0.0.1'; include $argv[1];`,
      phpScript
    ]);

    let output = '';
    let errorOutput = '';

    php.stdin.write(inputData);
    php.stdin.end();

    php.stdout.on('data', (data) => {
      output += data.toString();
    });

    php.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });

    php.on('close', (code) => {
      const jsonStart = output.indexOf('{');
      const jsonEnd = output.lastIndexOf('}');
      if (jsonStart !== -1 && jsonEnd !== -1) {
        const jsonStr = output.substring(jsonStart, jsonEnd + 1);
        try {
          const parsed = JSON.parse(jsonStr);
          return res.status(parsed.success ? 200 : 400).json(parsed);
        } catch (e) {
          // continue below
        }
      }

      if (code !== 0 && errorOutput) {
        return res.status(500).json({
          success: false,
          message: 'خطأ في تشغيل PHP محلياً: ' + errorOutput
        });
      }

      res.status(200).send(output);
    });

    php.on('error', (err) => {
      return res.status(500).json({
        success: false,
        message: 'تعذر تشغيل PHP محلياً أثناء npm start: ' + err.message
      });
    });
  };

  app.post('/send-email.php', handleSendEmail);
  app.post('/send-email.php', handleSendEmail);
};
