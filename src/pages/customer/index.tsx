import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import DefaultLayout from "../../layout/DefaultLayout";

const pdf = require('./../../files/pdf.pdf');

const CustomerRights = () => {
    const { t } = useTranslation();
    
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('customerRights.title')}</h1>
                </div>
                <img src="/imgs/Customer rights.jpg" alt="" />
            </div>
            <div className="container" style={{ padding: '40px 15px' }}>
                <h2 style={{ fontSize: '24px', color: '#0056b3', marginBottom: '20px' }}>
                    {t('customerRights.consumerGuide')}
                </h2>
                <div style={{ fontSize: '16px', lineHeight: '32px', textAlign: 'justify', marginBottom: '32px' }}>
                    <p style={{ marginBottom: '16px' }}>
                        {t('customerRights.consumerGuideP1')}
                    </p>
                    <p style={{ marginBottom: '16px' }}>
                        {t('customerRights.consumerGuideP2')}
                    </p>
                    <p style={{ fontWeight: 'bold', color: '#0056b3', marginTop: '16px' }}>
                        {t('customerRights.satisfaction')}
                    </p>
                </div>

                <h2 style={{ fontSize: '24px', color: '#0056b3', marginBottom: '20px' }}>
                    {t('customerRights.protectionGuide')}
                </h2>
                <div style={{ fontSize: '16px', lineHeight: '32px', textAlign: 'justify' }}>
                    <p style={{ marginBottom: '16px' }}>
                        {t('customerRights.protectionGuideP1')}
                    </p>
                    <p style={{ marginBottom: '16px' }}>
                        {t('customerRights.protectionGuideP2')}
                    </p>
                    <p style={{ marginBottom: '16px' }}>
                        <span>{t('customerRights.fra')} </span>
                        <a 
                            href="https://fra.gov.eg/wp-content/uploads/2021/05/guide-4.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: '#31a8df', textDecoration: 'underline' }}
                        >
                            {t('customerRights.fraLink')}
                        </a>
                    </p>
                    <p style={{ marginBottom: '24px' }}>
                        {t('customerRights.complaintsPrefix')}
                        <Link 
                            to="/customer-complaints" 
                            style={{ color: '#31a8df', textDecoration: 'underline' }}
                        >
                            {t('customerRights.complaintsLinkText')}
                        </Link>
                        {t('customerRights.complaintsSuffix')}
                    </p>

                    <div style={{ margin: '20px 0' }}>
                        <button 
                            style={{
                                padding: '10px 20px', 
                                border: 'none', 
                                borderRadius: 10, 
                                background: "#31a8df", 
                                color: "white",
                                cursor: "pointer",
                                fontSize: "16px"
                            }}
                            onClick={() => window.open(pdf, '_blank')}
                        >
                            {t('customerRights.download')}
                        </button>
                    </div>

                    <embed 
                        id="pdf-embed" 
                        style={{ maxWidth: "100%" }} 
                        src={pdf} 
                        width="900" 
                        height="900" 
                        type="application/pdf"
                    />
                </div>
            </div>
        </DefaultLayout>
    );
};

export default CustomerRights;
