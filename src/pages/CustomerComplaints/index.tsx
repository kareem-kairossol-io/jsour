import React from 'react';
import { useTranslation } from 'react-i18next';
import DefaultLayout from '../../layout/DefaultLayout';
import './style.css'

const CustomerComplaints = () => {
    const { t } = useTranslation();
    
    return (
        <DefaultLayout>
            <div className="complaints-container">
                <h1>{t('customerComplaints.title')}</h1>
                <p>
                    {t('customerComplaints.introduction')}
                </p>
                
                <h2>{t('customerComplaints.procedures.title')}</h2>
                
                <h3>{t('customerComplaints.procedures.submitting.title')}</h3>
                <p>{t('customerComplaints.procedures.submitting.description')}</p>
                <ul>
                    <li>
                        {t('customerComplaints.procedures.submitting.channels.email')}{' '}
                        <a href="mailto:complaints@jusoor.com.eg">complaints@jusoor.com.eg</a>
                    </li>
                    <li>
                        {t('customerComplaints.procedures.submitting.channels.phone')}{' '}
                        <a href="tel:+201044479475">002 0104 447 9475</a>
                    </li>
                    <li>
                        {t('customerComplaints.procedures.submitting.channels.office')}{' '}
                        {t('customerComplaints.procedures.submitting.channels.address')}
                    </li>
                </ul>
                
                <h3>{t('customerComplaints.procedures.acknowledgment.title')}</h3>
                <p>
                    {t('customerComplaints.procedures.acknowledgment.description')}
                </p>
                
                <h3>{t('customerComplaints.procedures.review.title')}</h3>
                <p>
                    {t('customerComplaints.procedures.review.description')}
                </p>
                
                <h3>{t('customerComplaints.procedures.response.title')}</h3>
                <p>
                    {t('customerComplaints.procedures.response.description')}
                </p>
                
                <h3>{t('customerComplaints.procedures.escalation.title')}</h3>
                <p>
                    {t('customerComplaints.procedures.escalation.description')}
                </p>
                <ul>
                    <li>
                        {t('customerComplaints.procedures.escalation.channels.website')}{' '}
                        <a href="https://complaints.fra.gov.eg" target="_blank" rel="noopener noreferrer">
                            https://complaints.fra.gov.eg
                        </a>
                    </li>
                    <li>
                        {t('customerComplaints.procedures.escalation.channels.email')}{' '}
                        <a href="mailto:complaints@fra.gov.eg">complaints@fra.gov.eg</a>
                    </li>
                </ul>
                
                <h3>{t('customerComplaints.officer.title')}</h3>
                <p>
                    {t('customerComplaints.officer.description')}
                </p>
                <p>
                    {t('customerComplaints.officer.contact')}
                </p>
                
                <p>
                    {t('customerComplaints.closing')}
                </p>
            </div>
        </DefaultLayout>
    );
};

export default CustomerComplaints;