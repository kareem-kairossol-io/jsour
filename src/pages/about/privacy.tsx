import { useTranslation } from 'react-i18next';
import DefaultLayout from "../../layout/DefaultLayout"
import privacy from './../../images/privacy.jpg'

const PrivacyPolicy = () => {
    const { t } = useTranslation();
    
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('privacy.title')}</h1>
                </div>
                <img src={privacy} alt="" />
            </div>
            <div className="container">
                <h3 style={{ marginTop: 16 }}>{t('privacy.introduction.title')}</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t('privacy.introduction.content')}
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('privacy.informationCollect.title')}</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t('privacy.informationCollect.content')}
                    <br />
                    <ul>
                        <li>{t('privacy.informationCollect.items.contact')}</li>
                        <li>{t('privacy.informationCollect.items.insurance')}</li>
                        <li>{t('privacy.informationCollect.items.demographic')}</li>
                        <li>{t('privacy.informationCollect.items.financial')}</li>
                        <li>{t('privacy.informationCollect.items.ssn')}</li>
                    </ul>
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('privacy.useInformation.title')}</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    <ul>
                        <li>{t('privacy.useInformation.items.provide')}</li>
                        <li>{t('privacy.useInformation.items.process')}</li>
                        <li>{t('privacy.useInformation.items.assess')}</li>
                        <li>{t('privacy.useInformation.items.prevent')}</li>
                        <li>{t('privacy.useInformation.items.communicate')}</li>
                        <li>{t('privacy.useInformation.items.improve')}</li>
                    </ul>
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('privacy.sharingInformation.title')}</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t('privacy.sharingInformation.content')}
                    <br />
                    <ul>
                        <li>{t('privacy.sharingInformation.items.carriers')}</li>
                        <li>{t('privacy.sharingInformation.items.adjusters')}</li>
                        <li>{t('privacy.sharingInformation.items.government')}</li>
                        <li>{t('privacy.sharingInformation.items.thirdParty')}</li>
                        <li>{t('privacy.sharingInformation.items.protection')}</li>
                        <li>{t('privacy.sharingInformation.items.noSell')}</li>
                    </ul>
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('privacy.yourRights.title')}</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    <ul>
                        <li>{t('privacy.yourRights.items.access')}</li>
                        <li>{t('privacy.yourRights.items.delete')}</li>
                        <li>{t('privacy.yourRights.items.optOut')}</li>
                    </ul>
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('privacy.security.title')}</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t('privacy.security.content')}
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('privacy.cookies.title')}</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t('privacy.cookies.content')}
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('privacy.dataRetention.title')}</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t('privacy.dataRetention.content')}
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('privacy.childrenPrivacy.title')}</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t('privacy.childrenPrivacy.content')}
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('privacy.changes.title')}</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t('privacy.changes.content')}
                </p>
                
                <h3 style={{ marginTop: 16 }}>{t('privacy.contactUs.title')}</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t('privacy.contactUs.content')}
                </p>
            </div>
        </DefaultLayout>
    )
}

export default PrivacyPolicy