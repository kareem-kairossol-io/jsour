import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './../../images/Jlogo-footer.webp';
import qrCode from './../../images/qr-code.png';

const Footer = () => {
    const { t } = useTranslation();
    
    return (
        <div className="footer-container">
            <div className="footer-content container">
                <div className="footer-section">
                    <h1>
                        <img className="footer-logo" src={logo} alt="Jusoor Logo" />
                    </h1>
                </div>
                
                <div className="footer-section" style={{ display: 'flex', alignItems: 'center' }}>
                    <img className="footer-qr" src={qrCode} alt="Jusoor QR Code" />
                </div>
                
                <div className="footer-section">
                    <h5 className="footer-heading">{t('footer.address.title')}</h5>
                    <p className="footer-text">
                        <i className="fa fa-map-marker-alt"></i>
                        <a
                            href="https://www.google.com/maps/place/10+El-Batal+Ahmed+Abd+El-Aziz+Street,+Mohandessin,+Giza"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('footer.address.street')}
                        </a>
                    </p>
                    <p className="footer-text">
                        <i className="fa fa-phone-alt"></i> {t('footer.address.phone')}
                    </p>
                    <p className="footer-text">
                        <i className="fa fa-envelope"></i> {t('footer.address.email')}
                    </p>
                </div>
                
                <div className="footer-section">
                    <h5 className="footer-heading">{t('footer.quickLinks.title')}</h5>
                    <Link className="footer-link" to="/about">{t('footer.quickLinks.aboutUs')}</Link>
                    <Link className="footer-link" to={'/solutions'}>{t('header.howWeWork')}</Link>
                    <Link className="footer-link" to="/Terms-and-Conditions">{t('footer.quickLinks.terms')}</Link>
                    <Link className="footer-link" to="/Privacy-policy">{t('footer.quickLinks.privacy')}</Link>
                    {/* <Link className="footer-link" to="/contact">{t('footer.quickLinks.contactUs')}</Link> */}
                    {/* <Link className="footer-link" to="/solutions">{t('footer.quickLinks.ourSolutions')}</Link> */}
                </div>
                
                {/* <div className="footer-section">
                    <h5 className="footer-heading">{t('footer.socialMedia.title')}</h5>
                    <p className="footer-text">{t('footer.socialMedia.subtitle')}</p>
                    <div className="social-media-icons">
                        <a className="social-icon" href="" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="social-icon" href="" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="social-icon" href="" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a className="social-icon" href="" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div> */}
            </div>
            
            <div className="footer-complaints" style={{maxWidth: 1500, margin: 'auto', textAlign: 'center', marginBottom: 16, color: '#fff'}}>
                <p style={{fontSize: 14}}>
                    {t('footer.complaints.text1')}{' '}
                    <a href="mailto:complaints@jusoor.com.eg" style={{color: '#ccc'}}>
                        complaints@jusoor.com.eg
                    </a>{' '}
                    {t('footer.complaints.text2')}{' '}
                    <a href="https://complaints.fra.gov.eg" target="_blank" rel="noopener noreferrer" style={{color: '#ccc'}}>
                        https://complaints.fra.gov.eg
                    </a>.
                </p>
            </div>
            
            <div className="footer-regulation" style={{maxWidth: 1500, margin: 'auto', textAlign: 'center', marginBottom: 16, color: '#fff'}}>
                <p style={{fontSize: 14}}>
                    {t('footer.regulation.text1')}
                </p>
                <p style={{fontSize: 14}}>
                    {t('footer.regulation.text2')}
                </p>
            </div>
            
            <div className="footer-copyright">
                {t('footer.copyright')}
            </div>
        </div>
    );
};

export default Footer;