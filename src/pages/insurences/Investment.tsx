import DefaultLayout from "../../layout/DefaultLayout"
import Investment from './../../images/Investment.jpg'

const temp = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Investment Insurance</h1>
                </div>
                <img src={Investment} alt="" />
            </div>
            <div className="container">
                <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Investment insurance is a specialized form of financial protection that combines traditional insurance benefits with investment opportunities, designed to help individuals grow their wealth while safeguarding against unforeseen risks. This type of insurance provides policyholders with the dual advantage of securing a safety net for their beneficiaries in the event of the policyholder's death or critical illness, while simultaneously allowing a portion of the premiums to be invested in various financial instruments such as stocks, bonds, or mutual funds. Investment insurance policies are tailored to meet the diverse financial goals and risk appetites of individuals, offering potential returns that can enhance long-term savings and retirement plans. By integrating insurance with investment strategies, policyholders can achieve a balanced approach to financial planning, ensuring both security and growth. This comprehensive coverage not only protects against life's uncertainties but also provides a pathway to accumulate wealth, making investment insurance an integral component of a robust financial strategy.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default temp