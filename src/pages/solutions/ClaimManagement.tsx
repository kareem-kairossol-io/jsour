import { useTranslation } from "react-i18next"
import DefaultLayout from "../../layout/DefaultLayout"
import claim from './../../images/claim.jpg'

const Temp = () => {
    const {t} = useTranslation()
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('solutions.claimManagement.title')}</h1>
                </div>
                <img src="/imgs/Claim Management.jpg" alt="" />
            </div>
            <div className="container">
                <p style={{
                    padding: '32px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t('solutions.claimManagement.content')}
                </p>
            </div>
        </DefaultLayout>
    )
}

export default Temp