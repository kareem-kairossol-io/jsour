import DefaultLayout from "../../layout/DefaultLayout"
import Fire from './../../images/Fire.jpg'
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
                            <h1 className="page-title">Fire and allied perils insurance</h1>
                        </div>
                        <img src={Fire} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Fire and allied perils insurance</h1>
                        </div>
                        <img src={Fire} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Fire and allied perils insurance</h1>
                        </div>
                        <img src={Fire} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Fire and allied perils insurance provides essential protection against damage and losses caused by fire and related hazards. This type of insurance covers risks such as fire, lightning, explosion, and impact damage from vehicles or aircraft, ensuring comprehensive protection for properties, both residential and commercial. It also often includes coverage for additional perils like natural disasters, riots, strikes, and malicious damage. By securing fire and allied perils insurance, property owners can safeguard their investments, mitigate financial losses, and ensure the continuity of their operations. This insurance is crucial for maintaining financial stability and peace of mind in the face of unexpected disasters.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default temp