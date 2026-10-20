import React, { useState, useEffect, FormEvent } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const { t, i18n } = useTranslation();

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        subject: "",
        message: ""
    });
    const [loading, setLoading] = useState<boolean>(false);

    // Feature Flag: Enable/Disable contact form submission
    // Set REACT_APP_ENABLE_CONTACT_FORM='false' in .env for test environment, 'true' for production
    const isFormEnabled = process.env.REACT_APP_ENABLE_CONTACT_FORM !== "false";

    // Google reCAPTCHA v3 site key
    const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY || "6LeftfgtAAAAAL6EGkrltuVGRzdfM54hq167svVU";
    const apiUrl = process.env.REACT_APP_CONTACT_API_URL || `${process.env.PUBLIC_URL || ''}/send-email.php`;

    // Load reCAPTCHA v3 script dynamically
    useEffect(() => {
        if (!isFormEnabled) return;

        const scriptId = 'google-recaptcha-v3-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
            script.async = true;
            document.body.appendChild(script);
        }
    }, [siteKey, isFormEnabled]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            toast.warning(t('contact.form.fillAllFields') || "Please fill in all required fields.");
            return;
        }

        // Feature Flag Check: When disabled in test environment
        if (!isFormEnabled) {
            toast.info(t('contact.form.disabledMessage') || "The contact form is currently disabled in the test environment.");
            return;
        }

        setLoading(true);

        try {
            // Get reCAPTCHA v3 token silently
            let token: string | null = null;
            if (typeof window !== 'undefined' && (window as any).grecaptcha) {
                token = await new Promise<string | null>((resolve) => {
                    (window as any).grecaptcha.ready(async () => {
                        try {
                            const resToken = await (window as any).grecaptcha.execute(siteKey, { action: 'contact_submit' });
                            resolve(resToken);
                        } catch (err) {
                            console.error("reCAPTCHA v3 execution failed:", err);
                            resolve(null);
                        }
                    });
                });
            }

            const response = await axios.post(apiUrl, {
                name: formData.name.trim(),
                email: formData.email.trim(),
                subject: formData.subject.trim() || t('contact.title'),
                message: formData.message.trim(),
                recaptchaToken: token || "test"
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data && response.data.disabled) {
                toast.info(response.data.message || t('contact.form.disabledMessage'));
                return;
            }

            if (response.data && response.data.success) {
                toast.success(t('contact.form.success') || "Message sent successfully!");
                setFormData({ email: "", name: "", subject: "", message: "" });
            } else {
                toast.error(response.data?.message || t('contact.form.error') || "Failed to send message.");
            }
        } catch (error: any) {
            const errorMsg = error.response?.data?.message || t('contact.form.error') || "Failed to send message. Please try again.";
            toast.error(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DefaultLayout>
            <ToastContainer position="top-center" autoClose={5000} rtl={i18n.language === 'ar'} />
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('contact.title')}</h1>
                </div>
                <img src="/imgs/Contact us.jpg" alt={t('contact.title')} />
            </div>
            <div className="contact_us_wrapper">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h2>{t('contact.subtitle')}</h2>
                        <div className="form_wrapper">
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.email')} 
                                required
                            />
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.name')} 
                                required
                            />
                            <input 
                                type="text" 
                                name="subject" 
                                id="subject" 
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.subject')} 
                            />
                            <textarea 
                                name="message" 
                                id="message" 
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.message')} 
                                required
                                rows={5}
                            ></textarea>

                            {!isFormEnabled && (
                                <div
                                    style={{
                                        gridColumn: "span 2",
                                        backgroundColor: "#fef3c7",
                                        border: "1px solid #f59e0b",
                                        color: "#92400e",
                                        padding: "12px 16px",
                                        borderRadius: "8px",
                                        fontSize: "14px",
                                        textAlign: "center",
                                        fontWeight: 500,
                                        lineHeight: 1.5
                                    }}
                                >
                                    ℹ️ {t('contact.form.disabledNotice')}
                                </div>
                            )}

                            <button 
                                type="submit" 
                                disabled={loading}
                                style={{ 
                                    cursor: loading ? "not-allowed" : "pointer",
                                    opacity: loading ? 0.7 : 1,
                                    transition: "all 0.3s ease"
                                }}
                            >
                                {loading ? t('contact.form.sending') : t('contact.form.button')}
                            </button>
                        </div>
                    </form>
                    <iframe 
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.4889196294653!2d31.20589227620154!3d30.051517018234485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841258343c36d%3A0x1d46b4ab7263e6f7!2s10%20El-Batal%20Ahmed%20Abd%20El-Aziz%2C%20Ad%20Doqi%2C%20Dokki%2C%20Giza%20Governorate%203751333!5e0!3m2!1sen!2seg!4v1707392314566!5m2!1sen!2seg" 
                        width="600" 
                        height="450" 
                        style={{border: 0}}
                        loading="lazy" 
                    ></iframe>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Contact;
