import DefaultLayout from "../../layout/DefaultLayout"
import privacy from './../../images/privacy.jpg'

const temp = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Privacy Policy</h1>
                </div>
                <img src={privacy} alt="" />
            </div>
            <div className="container">
                <h3 style={{ marginTop: 16 }}>Introduction:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    We at Jusoor For Insurance Brokerage understand the importance of protecting your privacy and the information you entrust to us. This Privacy Policy explains how we collect, use, disclose, and manage your personal information.
                </p>
                <h3 style={{ marginTop: 16 }}>Information We Collect:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    We may collect the following personal information about you:
                    <br />
                    <ul>
                        <li> Contact information: Name, address, phone number, email address. </li>
                        <li> Insurance information: Policy details, claims history, risk factors.</li>
                        <li> Demographic information: Age, gender, occupation, marital status.</li>
                        <li> Financial information: Income, assets, credit score.</li>
                        <li> Social Security number (if required by law or regulation).</li>
                    </ul>
                </p>
                <h3 style={{ marginTop: 16 }}>We Use Your Information to:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    <ul>
                        <li>Provide insurance products and services.</li>
                        <li>Process and manage your insurance policies.</li>
                        <li>Assess your insurance needs and risks.</li>
                        <li>Prevent fraud and comply with legal requirements.</li>
                        <li>Communicate with you about your insurance needs.</li>
                        <li>Improve our products and services.</li>
                    </ul>
                </p>
                <h3 style={{ marginTop: 16 }}>Sharing Your Information:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    We may share your information with:
                    <br />
                    <ul>
                        <li>Insurance carriers</li>
                        <li>Claims adjusters</li>
                        <li>Government agencies (as required by law)</li>
                        <li>Third-party service providers who assist us in providing our services</li>
                        <li>We will only share your information with third-party service providers who have agreed to protect your privacy in accordance with our standards.</li>
                        <li>We will not sell or rent your information to third parties.</li>
                    </ul>
                </p>
                <h3 style={{ marginTop: 16 }}>You have the right to:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    <ul>
                        <li>Access and update your personal information</li>
                        <li>Request that we delete your personal information</li>
                        <li>Opt out of receiving marketing communications from us</li>
                    </ul>
                </p>
                <h3 style={{ marginTop: 16 }}>Security:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    We take steps to protect your information from unauthorized access, use, disclosure, alteration, or destruction. We use secure servers, encryption, and other security measures to protect your information.
                </p>
                <h3 style={{ marginTop: 16 }}>Cookies and Tracking Technologies:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    We may use cookies and other tracking technologies to collect information about your use of our website. This information may be used to personalize your experience on our website and to improve our services. You can control the use of cookies and tracking technologies through your browser settings.
                </p>
                <h3 style={{ marginTop: 16 }}>Data Retention:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    We will retain your information for as long as necessary to provide you with our services and comply with legal requirements.
                </p>
                <h3 style={{ marginTop: 16 }}>Children's Privacy:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    Our website is not intended for children under the age of 13. We do not knowingly collect information from children under the age of 13.
                </p>
                <h3 style={{ marginTop: 16 }}>Changes to This Privacy Policy:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    We may update this Privacy Policy from time to time. We will post any changes on our website.
                </p>
                <h3 style={{ marginTop: 16 }}>Contact Us:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    if you have any questions about this Privacy Policy please contact us
                </p>
            </div>
        </DefaultLayout>
    )
}

export default temp