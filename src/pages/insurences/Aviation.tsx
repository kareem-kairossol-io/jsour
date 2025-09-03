import DefaultLayout from "../../layout/DefaultLayout"
import Aviation from './../../images/Aviation.jpg'
import { SwiperSlide, Swiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import ContentComponent from "./ContentComponent"

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
                            <h1 className="page-title">Aviation Insurance</h1>
                        </div>
                        <img src={Aviation} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Aviation Insurance</h1>
                        </div>
                        <img src={Aviation} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Aviation Insurance</h1>
                        </div>
                        <img src={Aviation} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <ContentComponent img="/2151582550.jpg" content={`
                    <div>
                        <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                        <p style={{
                            padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                        }}>
                            Aviation insurance provides specialized coverage for aircraft, protecting owners and operators against a variety of risks associated with aviation. This includes coverage for physical damage to the aircraft, liability for passenger injuries, third-party damage, and loss of cargo. Aviation insurance is essential for ensuring the financial security of airlines, private aircraft owners, and aviation-related businesses, as it helps manage the substantial risks involved in operating and maintaining aircraft. By securing aviation insurance, stakeholders in the aviation industry can safeguard their assets, maintain operational continuity, and comply with regulatory requirements, ensuring peace of mind and financial stability.
                        </p>
                    </div>
                `} />
            </div>

        </DefaultLayout>
    )
}

export default temp