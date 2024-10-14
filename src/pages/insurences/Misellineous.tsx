import DefaultLayout from "../../layout/DefaultLayout"
import Misellineous from './../../images/Misellineous.jpg'

const temp = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Miscellaneous perils insurance </h1>
                </div>
                <img src={Misellineous} alt="" />
            </div>
            <div className="container">
                <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Miscellaneous perils insurance provides coverage for a diverse range of risks that are not typically covered under standard insurance policies. This type of insurance includes protection against unique and unforeseen events such as accidental damage, fraud, and even specific industry-related risks. Miscellaneous perils insurance is essential for businesses and individuals who seek comprehensive protection tailored to their specific needs and activities. By securing this insurance, policyholders can safeguard their assets and mitigate financial losses arising from unexpected incidents, ensuring greater peace of mind and financial stability.                 </p>
            </div>
        </DefaultLayout>
    )
}

export default temp