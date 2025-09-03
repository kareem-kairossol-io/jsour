import DefaultLayout from "../../layout/DefaultLayout"
import OilGas from './../../images/OilGas.jpg'
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
                            <h1 className="page-title">Oil & Gas Insurance</h1>
                        </div>
                        <img src={OilGas} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Oil & Gas Insurance</h1>
                        </div>
                        <img src={OilGas} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Oil & Gas Insurance</h1>
                        </div>
                        <img src={OilGas} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Oil and gas insurance provides specialized coverage tailored to the unique risks and challenges faced by the oil and gas industry. This insurance covers a wide range of potential liabilities, including property damage, business interruption, environmental pollution, and employee injuries. It also protects against risks associated with exploration, production, refining, and transportation of oil and gas. By securing oil and gas insurance, companies in this sector can mitigate financial losses, ensure regulatory compliance, and protect their assets and workforce. This insurance is essential for maintaining operational continuity and financial stability in an industry characterized by high stakes and complex risks.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default temp