import DefaultLayout from "../../layout/DefaultLayout"
import Accident from './../../images/Accident.jpg'
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
                            <h1 className="page-title">Accident Insurance</h1>
                        </div>
                        <img src={Accident} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Accident Insurance</h1>
                        </div>
                        <img src={Accident} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Accident Insurance</h1>
                        </div>
                        <img src={Accident} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Individual accident insurance is a crucial safeguard against the unexpected, providing individuals with financial protection in the event of accidents resulting in injuries or disabilities. This insurance coverage is designed to offer peace of mind by providing benefits tailored to address specific needs. Typically, individual accident insurance policies cover medical expenses incurred due to accidents, including hospitalization, surgery, and rehabilitation costs. Additionally, they may offer benefits such as income replacement for lost wages during recovery, coverage for accidental death or dismemberment, and reimbursement for transportation and lodging expenses related to medical treatment.
                    <br />
                    <br />
                    On the corporate front, accident insurance is a valuable addition to the benefits package offered by companies to their employees. It provides employees and their families with financial security in the face of unforeseen accidents, helping to ease the burden of medical expenses and other related costs. Corporate accident insurance policies may cover a range of benefits, including medical treatment, disability benefits, and accidental death benefits. By including accident insurance in their benefits package, companies demonstrate their commitment to the well-being of their employees and their families, contributing to a positive work environment and enhanced employee satisfaction.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default temp