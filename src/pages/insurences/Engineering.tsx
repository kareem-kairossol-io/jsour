import DefaultLayout from "../../layout/DefaultLayout"
import Engineering from './../../images/midical.jpg'

const temp = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Engineering Insurance</h1>
                </div>
                <img src={Engineering} alt="" />
            </div>
            <div className="container">
                <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Engineering insurance provides comprehensive coverage for a wide range of engineering projects and equipment, ensuring protection against potential risks such as accidental damage, mechanical breakdown, and third-party liability. This type of insurance is crucial for construction companies, contractors, and engineering firms, as it covers machinery, plant, and equipment used in construction and operational phases. Additionally, it includes coverage for project-related risks like delays, design defects, and natural disasters. By securing engineering insurance, businesses can safeguard their investments, ensure project continuity, and mitigate financial losses, ultimately enhancing their operational resilience and financial stability.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default temp