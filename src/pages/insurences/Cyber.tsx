import DefaultLayout from "../../layout/DefaultLayout"
import Cargo from './../../images/Carg2.jpg'
import { SwiperSlide, Swiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Cyber = () => {
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
                            <h1 className="page-title">Cyber insurance</h1>
                        </div>
                        <img src={Cargo} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Cyber insurance</h1>
                        </div>
                        <img src={Cargo} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Cyber insurance</h1>
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
                    Cyber insurance provides crucial protection against a range of cyber threats and data breaches that can significantly impact businesses. This type of insurance covers losses resulting from cyberattacks, such as data breaches, ransomware attacks, and network failures. It also includes coverage for legal fees, notification costs, and expenses related to restoring data and systems. By securing cyber insurance, businesses can mitigate the financial and operational risks associated with cyber incidents, ensuring they are prepared to respond effectively to threats. This insurance is essential for maintaining trust, protecting sensitive information, and ensuring business continuity in an increasingly digital world.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default Cyber