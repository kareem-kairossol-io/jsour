import { useTranslation } from "react-i18next"
import DefaultLayout from "../../layout/DefaultLayout"
import accuracy from './../../images/accuracy.jpg'

const Temp = () => {
    const {t} = useTranslation()
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('solutions.accuracyAdequacy.title')}</h1>
                </div>
                <img src={accuracy} alt="" />
            </div>
            <div className="container">
                <p style={{
                    padding: '32px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t('solutions.accuracyAdequacy.content')}
                </p>
            </div>
        </DefaultLayout>
    )
}

export default Temp