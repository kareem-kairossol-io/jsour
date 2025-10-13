import { useTranslation } from 'react-i18next'
import DefaultLayout from "../../layout/DefaultLayout"
import Aviation from './../../images/terms.jpg'

const Terms = () => {
    const { t } = useTranslation()
    
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('terms.pageTitle')}</h1>
                </div>
                <img src={Aviation} alt="" />
            </div>
            <div className="container">
                <h2 style={{ marginTop: 32 }}>{t('terms.mainTitle')}</h2>
                
                <h3 style={{ marginTop: 16 }}>{t('terms.introduction.title')}</h3>
                <p style={{ padding: '16px 0', fontSize: '16px', lineHeight: '32px' }}>
                    {t('terms.introduction.content')}
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('terms.definitions.title')}</h3>
                <p style={{ padding: '16px 0', fontSize: '16px', lineHeight: '32px' }}>
                    <ul>
                        <li>{t('terms.definitions.client')}</li>
                        <li>{t('terms.definitions.company')}</li>
                        <li>{t('terms.definitions.parties')}</li>
                    </ul>
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('terms.intellectualProperty.title')}</h3>
                <p style={{ padding: '16px 0', fontSize: '16px', lineHeight: '32px' }}>
                    {t('terms.intellectualProperty.content')}
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('terms.restrictions.title')}</h3>
                <p style={{ padding: '16px 0', fontSize: '16px', lineHeight: '32px' }}>
                    <ul>
                        <li>{t('terms.restrictions.republish')}</li>
                        <li>{t('terms.restrictions.sell')}</li>
                        <li>{t('terms.restrictions.reproduce')}</li>
                        <li>{t('terms.restrictions.redistribute')}</li>
                    </ul>
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('terms.userComments.title')}</h3>
                <p style={{ padding: '16px 0', fontSize: '16px', lineHeight: '32px' }}>
                    {t('terms.userComments.content')}
                    <br />
                    {t('terms.userComments.rights')}
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('terms.warranties.title')}</h3>
                <p style={{ padding: '16px 0', fontSize: '16px', lineHeight: '32px' }}>
                    {t('terms.warranties.intro')}
                    <br />
                    <ul>
                        <li>{t('terms.warranties.right')}</li>
                        <li>{t('terms.warranties.noInfringe')}</li>
                        <li>{t('terms.warranties.noDefamatory')}</li>
                        <li>{t('terms.warranties.noSolicitation')}</li>
                    </ul>
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('terms.cookies.title')}</h3>
                <p style={{ padding: '16px 0', fontSize: '16px', lineHeight: '32px' }}>
                    {t('terms.cookies.content')}
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('terms.hyperlinking.title')}</h3>
                <p style={{ padding: '16px 0', fontSize: '16px', lineHeight: '32px' }}>
                    {t('terms.hyperlinking.intro')}
                    <br />
                    <ul>
                        <li>{t('terms.hyperlinking.government')}</li>
                        <li>{t('terms.hyperlinking.searchEngines')}</li>
                        <li>{t('terms.hyperlinking.news')}</li>
                        <li>{t('terms.hyperlinking.directories')}</li>
                        <li>{t('terms.hyperlinking.businesses')}</li>
                    </ul>
                    <br />
                    {t('terms.hyperlinking.conditions')}
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('terms.disclaimer.title')}</h3>
                <p style={{ padding: '16px 0', fontSize: '16px', lineHeight: '32px' }}>
                    {t('terms.disclaimer.content')}
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('terms.contact.title')}</h3>
                <p style={{ padding: '16px 0', fontSize: '16px', lineHeight: '32px' }}>
                    {t('terms.contact.content')}
                </p>
            </div>
        </DefaultLayout>
    )
}

export default Terms