import DefaultLayout from "../../layout/DefaultLayout"
import life from './../../images/life.jpg'
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
                            <h1 className="page-title">Life insurance</h1>
                        </div>
                        <img src={life} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Life insurance</h1>
                        </div>
                        <img src={life} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page-header">
                        <div className="container">
                            <h1 className="page-title">Life insurance</h1>
                        </div>
                        <img src={life} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <h2 style={{marginTop: 32}}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Individual life insurance provides financial protection to an individual's loved ones in the event of their death. It offers a lump sum payout to beneficiaries, helping to cover expenses such as funeral costs, outstanding debts, and ongoing living expenses. With individual life insurance, policyholders have the flexibility to choose coverage amounts and customize their policies based on their specific needs and financial goals. 
                    <br />
                    <br />
                    On the other hand, corporate life insurance for employees is a vital component of a comprehensive benefits package offered by companies to their workforce. This type of insurance provides financial security to employees' families in the unfortunate event of their death while employed. Typically, the company owns the policy and pays the premiums, with the employee being the insured individual. In the event of the employee's death, the insurance payout helps to support the employee's dependents by providing a lump sum benefit. This benefit can assist with immediate financial needs such as funeral expenses, outstanding debts, and ongoing living expenses. Additionally, corporate life insurance demonstrates an employer's commitment to the well-being of its employees and their families, enhancing employee morale and loyalty. By offering corporate life insurance, companies not only provide valuable financial protection to their employees but also contribute to a sense of security and stability within the workplace.
                 </p>
            </div>
        </DefaultLayout>
    )
}

export default temp