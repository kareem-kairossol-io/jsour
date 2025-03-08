import DefaultLayout from "../../layout/DefaultLayout"
import Aviation from './../../images/terms.jpg'

const temp = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Terms and Conditions</h1>
                </div>
                <img src={Aviation} alt="" />
            </div>
            <div className="container">
                <h2 style={{ marginTop: 32 }}>Disclaimer & Terms of Use for Brokerage Insurance Brokerage Website</h2>
                <h3 style={{ marginTop: 16 }}>Introduction:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    Welcome to the Brokerage Insurance Brokerage website! By accessing this website, you agree to be bound by the following terms and conditions. Please read these terms carefully before using our website.
                </p>
                <h3 style={{ marginTop: 16 }}>Definitions:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    <ul>
                        <li>
                            "Client," "You," and "Your" refer to you, the user of this website.
                        </li>
                        <li>
                            "The Company," "Ourselves," "We," "Our," and "Us" refer to Brokerage Insurance Brokerage.
                        </li>
                        <li>
                            "Party," "Parties," or "Us" refers to both the Client and us.
                        </li>
                    </ul>
                </p>
                <h3 style={{ marginTop: 16 }}>Intellectual Property Rights:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    Unless otherwise stated, Brokerage Insurance Brokerage owns all intellectual property rights on this website. This includes all written content, images, and other materials. You are granted access to this material for your personal use only, subject to the restrictions set forth in these terms.
                </p>
                <h3 style={{ marginTop: 16 }}>Restrictions:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    <ul>
                        <li>You are not permitted to republish material from this website.</li>
                        <li>You are not permitted to sell, rent, or sub-license material from this website.</li>
                        <li>You are not permitted to reproduce, duplicate, or copy material from this website.</li>
                        <li>You are not permitted to redistribute content from this website.</li>
                    </ul>
                </p>
                <h3 style={{ marginTop: 16 }}>User Comments:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    Certain areas of our website allow users to post and exchange opinions and information. Brokerage Insurance Brokerage does not filter, edit, publish, or review these comments before they appear on the website. The views expressed in the comments do not reflect the views of Brokerage Insurance Brokerage, its agents, or its affiliates. They reflect the views and opinions of the individual users who posted them.
                    <br />
                    Brokerage Insurance Brokerage reserves the right to monitor all comments and remove any that are deemed inappropriate, offensive, or in breach of these terms.
                </p>
                <h3 style={{ marginTop: 16 }}>Warranties & Representations:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    By posting comments on our website, you warrant and represent that:
                    <br />
                    <ul>
                        <li>You have the right to post the comments and have all necessary licenses and consents to do so.</li>
                        <li>The comments do not infringe on any intellectual property rights of any third party.</li>
                        <li>The comments do not contain any defamatory, libelous, offensive, indecent, or unlawful material, or invade anyone's privacy.</li>
                        <li>The comments will not be used to solicit or promote business, custom, or unlawful activity.</li>
                    </ul>
                </p>
                <h3 style={{ marginTop: 16 }}>Cookies:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    Our website uses cookies to enhance your experience. By accessing our website, you agree to the use of cookies in accordance with our Privacy Policy.
                </p>
                <h3 style={{ marginTop: 16 }}>Hyperlinking to our Website:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    The following organizations are permitted to link to our website without prior written approval:
                    <br />
                    <ul>
                        <li>Government agencies</li>
                        <li>Search engines</li>
                        <li>News organizations</li>
                        <li>Online directory distributors</li>
                        <li>Accredited businesses (excluding non-profit organizations, charity shopping malls, and charity fundraising groups)</li>
                    </ul>
                    <br />
                    These organizations may link to our home page, publications, or other website information as long as the link is not misleading, does not falsely imply sponsorship, and fits within the context of the linking party's website.
                </p>
                <h3 style={{ marginTop: 16 }}>Disclaimer:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    We reserve the right to modify these terms and conditions at any time. This includes the right to remove or edit any content from our website. Your continued use of this website after any changes constitutes your acceptance of the revised terms.
                </p>
                <h3 style={{ marginTop: 16 }}>Contact Us:</h3>
                <p style={{
                    padding: '16px 0', fontSize: '16px', lineHeight: '32px'
                }}>
                    If you have any questions about these terms and conditions, please contact us.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default temp