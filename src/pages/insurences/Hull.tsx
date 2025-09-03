import DefaultLayout from "../../layout/DefaultLayout"
import Hull from './../../images/Hull.jpg'
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
                            <h1 className="page-title">Hull Insurance</h1>
                        </div>
                        <img src={Hull} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Hull Insurance</h1>
                        </div>
                        <img src={Hull} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Hull Insurance</h1>
                        </div>
                        <img src={Hull} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Hull insurance provides comprehensive coverage for the physical damage or loss of a vessel, whether it is a commercial ship, fishing boat, or recreational yacht. This type of insurance protects the owner against a wide range of risks, including collisions, grounding, fire, and other maritime perils. By securing hull insurance, vessel owners can ensure that their significant investments are protected, allowing for repairs or replacement in the event of damage or total loss. This insurance is crucial for maintaining the operational capability of the vessel and mitigating financial losses, offering peace of mind to both commercial operators and private owners.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default temp