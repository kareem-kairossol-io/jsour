import DefaultLayout from "../../layout/DefaultLayout"
import review from './../../images/review.jpg'

const temp = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Ongoing Review</h1>
                </div>
                <img src="/imgs/Ongoing review.jpg" alt="" />
            </div>
            <div className="container">
                <p style={{
                    padding: '32px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    At Jusoor, we recognize that the insurance needs of our clients are dynamic, requiring ongoing attention to ensure their coverage remains effective. That's why we are committed to providing regular reviews as a fundamental part of our service. Our dedicated team conducts thorough assessments of our clients' policies, considering changes in their personal or business circumstances, as well as shifts in the broader insurance landscape. These reviews serve as an opportunity to identify any gaps or areas for improvement in their coverage. Whether it's adapting to changes in family dynamics, accommodating business growth, or addressing new regulatory requirements, we proactively collaborate with our clients to tailor their insurance solutions accordingly. Our ultimate goal is to offer peace of mind by ensuring that our clients are adequately protected against potential risks, with insurance portfolios optimized to meet their evolving needs. Through our ongoing reviews, we empower our clients to make informed decisions and stay proactive in safeguarding their financial security.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default temp