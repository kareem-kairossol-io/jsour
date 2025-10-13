import { useTranslation } from "react-i18next"
import DefaultLayout from "../../layout/DefaultLayout"
import managment from './../../images/managment.jpg'

const Temp = () => {
    const {t} = useTranslation()
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">
                        {t("solutions.issuanceManagement.title")}
                    </h1>
                </div>
                <img src={managment} alt="" />
            </div>
            <div className="container">
                <p style={{
                    padding: '32px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                    {t("solutions.issuanceManagement.content")}
                </p>
            </div>
        </DefaultLayout>
    )
}

export default Temp