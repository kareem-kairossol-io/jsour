import DefaultLayout from "../../layout/DefaultLayout"
import claim from './../../images/claim.jpg'

const temp = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Claim Management</h1>
                </div>
                <img src={claim} alt="" />
            </div>
            <div className="container">
                <p style={{
                    padding: '32px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    Jusoor offers a comprehensive claim management solution designed to expedite claim resolution and provide exceptional client support. We prioritize efficiency, transparency, and unwavering advocacy throughout the process. Our dedicated team guides clients through each step with clear communication, keeping them informed of progress and addressing any concerns.Leveraging our strong insurer relationships, we advocate tirelessly for fair and timely settlements. Furthermore, we continuously analyze claim data to identify trends and proactively mitigate future risks. Through our claim management solution, Jusoor empowers clients to navigate challenging situations with confidence, ensuring a swift recovery from unforeseen events.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default temp