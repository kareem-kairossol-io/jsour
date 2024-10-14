import DefaultLayout from "../../layout/DefaultLayout"
import Motor from './../../images/Motor.jpg'

const temp = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Motor Insurance</h1>
                </div>
                <img src={Motor} alt="" />
            </div>
            <div className="container">
                <h2 style={{marginTop: 32}}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Motor insurance provides coverage for both individuals and corporates, offering financial protection against damages and liabilities arising from vehicle-related incidents. 
                    <br />
                    For personal motor insurance, policies typically cover private cars and provide benefits such as accident damage, theft, and third-party liability, ensuring that individual drivers are safeguarded against unforeseen expenses. 
                    <br />
                    Corporate motor insurance, on the other hand, is tailored to meet the needs of businesses that own and operate fleets of vehicles. 
                    <br />
                    By choosing the appropriate motor insurance, both personal and corporate clients can secure peace of mind and financial stability in the event of vehicular accidents or damages.
                 </p>
            </div>
        </DefaultLayout>
    )
}

export default temp