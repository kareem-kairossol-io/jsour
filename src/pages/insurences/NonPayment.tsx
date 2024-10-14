import DefaultLayout from "../../layout/DefaultLayout"
import life from './../../images/life.jpg'

const NonPayment = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Insurance against non-payment risks</h1>
                </div>
                <img src={life} alt="" />
            </div>
            <div className="container">
                <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Insurance against non-payment risks, also known as credit insurance, provides protection for businesses against the risk of their clients or customers failing to pay for goods or services. This type of insurance covers losses arising from non-payment due to insolvency, bankruptcy, or prolonged default. By securing this insurance, businesses can protect their cash flow, mitigate financial losses, and maintain stability even when faced with unreliable or insolvent clients. It also enables businesses to extend credit to new customers with greater confidence, supporting growth and expansion while minimizing the risks associated with non-payment.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default NonPayment