import DefaultLayout from "../../layout/DefaultLayout"
import Cargo from './../../images/Carg2.jpg'
import { SwiperSlide, Swiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const temp = () => {
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
                            <h1 className="page-title">Cargo Insurance</h1>
                        </div>
                        <img src={Cargo} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Cargo Insurance</h1>
                        </div>
                        <img src={Cargo} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Cargo Insurance</h1>
                        </div>
                        <img src={Cargo} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Cargo insurance provides essential protection for goods in transit, whether by land, sea, or air. It covers the loss or damage of cargo during transportation, ensuring that businesses and individuals are financially protected against potential risks such as theft, accidents, natural disasters, or other unforeseen events. By securing cargo insurance, companies can safeguard their investments and ensure the smooth operation of their supply chains, while individuals can have peace of mind knowing their valuable shipments are covered. This type of insurance is crucial for mitigating financial losses and maintaining business continuity in the face of transportation-related challenges.                 </p>
            </div>
        </DefaultLayout>
    )
}

export default temp