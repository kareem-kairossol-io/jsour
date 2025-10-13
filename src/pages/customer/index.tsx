import { useTranslation } from 'react-i18next';
import DefaultLayout from "../../layout/DefaultLayout"
import rights from './../../images/rights.jpg'
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
            <div className="container">
                <br />
                <br />
                <h2>{t('customerRights.consumerGuide')}</h2>
                <p style={{
                    padding: '32px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t('customerRights.description')}
                    <br />
                    <br />
                    {t('customerRights.satisfaction')}
                    <br />
                    {t('customerRights.note')}
                    <br />
                    <a href="https://fra.gov.eg" target="_blank" rel="noopener noreferrer">
                        {t('customerRights.fra')}
                    </a>
                    <br />
                    {t('customerRights.guideInfo')}
                    <br />
                    {t('customerRights.readBelow')}
                    <button 
                        style={{
                            padding: 10, 
                            border: 'none', 
                            borderRadius: 10, 
                            background: "#31a8df", 
                            margin: "16px",
                            color: "white",
                            cursor: "pointer"
                        }}
                        onClick={() => window.open(pdf, '_blank')}
                    >
                        {t('customerRights.download')}
                    </button>
                    <br />
                    <embed 
                        id="pdf-embed" 
                        style={{maxWidth: "100%"}} 
                        src={pdf} 
                        width="900" 
                        height="900" 
                        type="application/pdf"
                    />
                </p>
            </div>
        </DefaultLayout>
    )
}

export default CustomerRights