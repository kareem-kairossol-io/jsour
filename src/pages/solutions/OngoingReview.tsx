import { useTranslation } from "react-i18next"
import DefaultLayout from "../../layout/DefaultLayout"
import review from './../../images/review.jpg'

const Temp = () => {
    const {t} = useTranslation()
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('solutions.ongoingReview.title')}</h1>
                </div>
                <img src="/imgs/Ongoing review.jpg" alt="" />
            </div>
            <div className="container">
                <p style={{
                    padding: '32px 0 24px', fontSize: '16px', lineHeight: '32px', textAlign: 'justify'
                }}>
                    {t('solutions.ongoingReview.content')}
                </p>
            </div>
        </DefaultLayout>
    )
}

export default Temp