import { useTranslation } from "react-i18next"
import DefaultLayout from "../../layout/DefaultLayout"
import policy from './../../images/policy.jpg'

const Temp = () => {
    const {t} = useTranslation()
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('solutions.policyRenewal.content')}</h1>
                </div>
                <img src="imgs/Policy Renewal.jpg" alt="" />
            </div>
            <div className="container">
                <p style={{
                    padding: '32px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                {t('solutions.policyRenewal.content')}
                </p>
            </div>
        </DefaultLayout>
    )
}

export default Temp