import DefaultLayout from "../../layout/DefaultLayout"
import about from './../../images/about.jpg'
import { useTranslation } from "react-i18next"
import { SwiperSlide, Swiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"


const About = () => {
    const { t } = useTranslation()
    
    return (
        <DefaultLayout>
            <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            autoplay={{ delay: 4000 }}
            loop
            className="swiper-container"
            >
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">{t('about.title')}</h1>
                        </div>
                        <img src='/About-us/1.jpg' alt={t('about.title')} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">{t('about.title')}</h1>
                        </div>
                        <img src='/About-us/2.jpg' alt={t('about.title')} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">{t('about.title')}</h1>
                        </div>
                        <img src='/About-us/3.jpg' alt={t('about.title')} />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="about-sec" style={{marginTop: 24}}>
                <div className="container">
                    <h2>{t('about.aboutus.title')}</h2>
                    <p style={{
                        padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                    }}>
                        {t('about.aboutus.content')}
                    </p>
                </div>
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