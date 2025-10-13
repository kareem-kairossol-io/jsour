import DefaultLayout from "../../layout/DefaultLayout"
import about from './../../images/about.jpg'
import { useTranslation } from "react-i18next"

const About = () => {
    const { t } = useTranslation()
    
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('about.title')}</h1>
                </div>
                <img src={about} alt={t('about.title')} />
            </div>
            <div className="about-sec" style={{marginTop: 24}}>
                <div className="container">
                    <h2>{t('about.vision.title')}</h2>
                    <p style={{
                        padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                    }}>
                        {t('about.vision.content')}
                    </p>
                </div>
            </div>

            <div className="about-sec">
                <div className="container">
                    <h2>{t('about.mission.title')}</h2>
                    <p style={{
                        padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                    }}>
                        {t('about.mission.content')}
                    </p>
                </div>
            </div>

            <div className="about-sec">
                <div className="container">
                    <h2>{t('about.objective.title')}</h2>
                    <p style={{
                        padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                    }}>
                        {t('about.objective.content')}
                    </p>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default About