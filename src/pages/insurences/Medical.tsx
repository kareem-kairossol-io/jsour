import DefaultLayout from "../../layout/DefaultLayout"
import Medical from './../../images/midical.jpg'
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
                            <h1 className="page-title">Medical Insurance</h1>
                        </div>
                        <img src={Medical} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Medical Insurance</h1>
                        </div>
                        <img src={Medical} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Medical Insurance</h1>
                        </div>
                        <img src={Medical} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Individual medical insurance is a pivotal component of personal financial planning, offering individuals and families peace of mind by providing coverage for medical expenses. This type of insurance typically offers a range of benefits, including coverage for doctor's visits, hospital stays, prescription medications, and preventive care services. With individual medical insurance, policyholders have the flexibility to choose from various plans and coverage options tailored to their specific healthcare needs and budgetary constraints. Additionally, individual medical insurance policies often provide access to a network of healthcare providers, ensuring quality care and timely treatment when needed.
                    <br />
                    <br />
                    On the corporate front, offering medical insurance as part of an employee benefits package is essential for attracting and retaining top talent. Corporate medical insurance provides employees and their families with access to comprehensive healthcare coverage, promoting their overall well-being and productivity. Typically, the employer sponsors the policy and may cover all or a portion of the premiums, with employees contributing through payroll deductions. This coverage extends beyond individual medical insurance, often including additional benefits such as dental, vision, and mental health services. By prioritizing the health and wellness of their workforce, companies demonstrate their commitment to employee satisfaction and engagement, fostering a positive work environment and driving organizational success.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default temp