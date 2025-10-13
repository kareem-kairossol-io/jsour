import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [showDrop, setShowDrop] = useState(false);
    const [showLangDrop, setShowLangDrop] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lng;
        setShowLangDrop(false);
        window.location.reload();

    };

    const currentLanguage = i18n.language;

    return (
        <header>
            <div className="top">
                <div className="container">
                    <img src={logo} alt="" className="logo" />
                    <div>
                        <a href="tel:01044479475">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            </svg>
                            01044479475
                        </a>
                        <a href="mailto:info@jusoor.com.eg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                <path d="M3 7l9 6l9 -6" />
                            </svg>
                            info@jusoor.com.eg
                        </a>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                            </svg>
                            {t('header.address')}
                        </p>
                    </div>
                    <div 
                        className="language_select" 
                        onClick={() => setShowLangDrop(!showLangDrop)}
                        style={{ position: 'relative', cursor: 'pointer' }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M3.6 9h16.8" />
                            <path d="M3.6 15h16.8" />
                            <path d="M11.5 3a17 17 0 0 0 0 18" />
                            <path d="M12.5 3a17 17 0 0 1 0 18" />
                        </svg>
                        {t('header.language')}
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 9l6 6l6 -6" />
                        </svg>
                        {showLangDrop && (
                            <div className="language-dropdown" style={{
                                position: 'absolute',
                                top: '100%',
                                right: 0,
                                background: 'white',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                borderRadius: '4px',
                                marginTop: '8px',
                                minWidth: '120px',
                                color: "#000",
                                zIndex: 1000
                            }}>
                                <div 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        changeLanguage('en');
                                    }}
                                    style={{
                                        padding: '10px 16px',
                                        cursor: 'pointer',
                                        borderBottom: '1px solid #f0f0f0',
                                        background: currentLanguage === 'en' ? '#f5f5f5' : 'white'
                                    }}
                                >
                                    English
                                </div>
                                <div 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        changeLanguage('ar');
                                    }}
                                    style={{
                                        padding: '10px 16px',
                                        cursor: 'pointer',
                                        background: currentLanguage === 'ar' ? '#f5f5f5' : 'white'
                                    }}
                                >
                                    العربية
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <nav>
                <div className="container">
                    <div className={"links" + (isOpen ? " open" : '')}>
                        <Link to={'/'}>{t('header.home')}</Link>
                        <Link to={'/about'}>{t('header.about')}</Link>
                        <Link to={'/solutions'}>{t('header.howWeWork')}</Link>
                        <div className="has-drop">
                            <p onClick={() => {setShowDrop(!showDrop)}} style={{cursor: 'pointer'}}>
                                {t('header.insuranceCoverage')}
                            </p>
                            {
                                showDrop && (
                                    <div className="drop" onClick={() => {setShowDrop(!showDrop)}}>
                                        <Link to={'/Life-Insurance'}>{t('insurance.life')}</Link>
                                        <Link to={'/Medical-Insurance'}>{t('insurance.medical')}</Link>
                                        <Link to={'/Accident-Insurance'}>{t('insurance.accident')}</Link>
                                        <Link to={'/Investment-Insurance'}>{t('insurance.investment')}</Link>
                                        <Link to={'/Motor-Insurance'}>{t('insurance.motor')}</Link>
                                        <Link to={'/Cargo-Insurance'}>{t('insurance.cargo')}</Link>
                                        <Link to={'/Hull-Insurance'}>{t('insurance.hull')}</Link>
                                        <Link to={'/Aviation-Insurance'}>{t('insurance.aviation')}</Link>
                                        <Link to={'/Engineering-Insurance'}>{t('insurance.engineering')}</Link>
                                        <Link to={'/Oil-&-Gas-Insurance'}>{t('insurance.oilGas')}</Link>
                                        <Link to={'/Fire-Insurance'}>{t('insurance.fire')}</Link>
                                        <Link to={'/Misellineous-Insurance'}>{t('insurance.miscellaneous')}</Link>
                                        <Link to={'/non-payment-risks-insurance'}>{t('insurance.nonPayment')}</Link>
                                        <Link to={'/Cyber-insurance'}>{t('insurance.cyber')}</Link>
                                    </div>
                                )
                            }
                        </div>
                        <Link to={'/Customer-Rights'}>{t('header.customerRights')}</Link>
                        <Link to={'/Customer-Complaints'}>{t('header.customerComplaints')}</Link>
                        <Link to={'/contact'}>{t('header.contact')}</Link>
                    </div>
                    <button className="show-mobile-menu" onClick={() => {
                        setIsOpen(!isOpen)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;