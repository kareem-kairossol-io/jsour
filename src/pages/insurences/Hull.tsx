import DefaultLayout from "../../layout/DefaultLayout"
import Hull from './../../images/Hull.jpg'
import { SwiperSlide, Swiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import ContentComponent from "./ContentComponent"
import { useTranslation } from "react-i18next"

const Temp = () => {
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
                            <h1 className="page-title">{t('insuranceDetails.hull.title')}</h1>
                        </div>
                        <img src="/Hull-Insurance/1.jpg" alt={t('insuranceDetails.hull.title')} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">{t('insuranceDetails.hull.title')}</h1>
                        </div>
                        <img src="/Hull-Insurance/2.jpg" alt={t('insuranceDetails.hull.title')} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">{t('insuranceDetails.hull.title')}</h1>
                        </div>
                        <img src="/Hull-Insurance/3.jpg" alt={t('insuranceDetails.hull.title')} />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <ContentComponent img="/517.jpg" content={`
                    <div>
                        <h2 style="margin-top:32px">${t('insuranceDetails.hull.subtitle')}</h2>
                        <p style="padding:16px 0 24px; font-size:16px; line-height:32px">
                            ${t('insuranceDetails.hull.content')}
                        </p>
                    </div>
                `} />
            </div>
        </DefaultLayout>
    )
}

export default Temp