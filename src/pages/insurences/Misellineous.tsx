import DefaultLayout from "../../layout/DefaultLayout"
import Misellineous from './../../images/Misellineous.jpg'
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
                            <h1 className="page-title">Miscellaneous perils insurance </h1>
                        </div>
                        <img src={Misellineous} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Miscellaneous perils insurance </h1>
                        </div>
                        <img src={Misellineous} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Miscellaneous perils insurance </h1>
                        </div>
                        <img src={Misellineous} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <ContentComponent img="/133563.jpg" content={`
                    <div>
                        <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                        <p style={{
                            padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                        }}>
                            Miscellaneous perils insurance provides coverage for a diverse range of risks that are not typically covered under standard insurance policies. This type of insurance includes protection against unique and unforeseen events such as accidental damage, fraud, and even specific industry-related risks. Miscellaneous perils insurance is essential for businesses and individuals who seek comprehensive protection tailored to their specific needs and activities. By securing this insurance, policyholders can safeguard their assets and mitigate financial losses arising from unexpected incidents, ensuring greater peace of mind and financial stability.                 </p>
                    </div>
                `} />
            </div>


        </DefaultLayout>
    )
}

export default temp