import DefaultLayout from "../../layout/DefaultLayout"
import Aviation from './../../images/Aviation.jpg'

const temp = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Aviation Insurance</h1>
                </div>
                <img src={Aviation} alt="" />
            </div>
            <div className="container">
                <h2 style={{ marginTop: 32 }}>Personal & Corporate</h2>
                <p style={{
                    padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Aviation insurance provides specialized coverage for aircraft, protecting owners and operators against a variety of risks associated with aviation. This includes coverage for physical damage to the aircraft, liability for passenger injuries, third-party damage, and loss of cargo. Aviation insurance is essential for ensuring the financial security of airlines, private aircraft owners, and aviation-related businesses, as it helps manage the substantial risks involved in operating and maintaining aircraft. By securing aviation insurance, stakeholders in the aviation industry can safeguard their assets, maintain operational continuity, and comply with regulatory requirements, ensuring peace of mind and financial stability.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default temp