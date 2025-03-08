import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import './style.css'

const CustomerComplaints = () => {
  return (
    <DefaultLayout>        
        <div className="complaints-container">
        <h1>Customer Complaints Handling Procedures</h1>
        <p>
            At Jusoor Insurance Brokerage, we are committed to providing high-quality insurance services with transparency and professionalism. In the event of any complaint, we ensure a clear and fair process to address and resolve it in a manner that meets our clients’ satisfaction.
        </p>

        <h2>Complaint Submission and Handling Procedures:</h2>
        
        <h3>Submitting a Complaint:</h3>
        <p>Clients can submit their complaints through one of the following channels:</p>
        <ul>
            <li>Email: <a href="mailto:complaints@jusoor.com.eg">complaints@jusoor.com.eg</a></li>
            <li>Phone: <a href="tel:+201044479475">002 0104 447 9475</a></li>
            <li>Visiting our office: 10 El-Batal Ahmed Abd El-Aziz, Dokki, Giza</li>
        </ul>
        
        <h3>Acknowledgment of Receipt:</h3>
        <p>
            Upon receiving the complaint, an acknowledgment will be sent to the client, including a reference number for follow-up.
        </p>
        
        <h3>Complaint Review:</h3>
        <p>
            A specialized team will carefully review the complaint and contact the client within <strong>[3-5]</strong> business days to request any additional documents if necessary.
        </p>
        
        <h3>Response to the Complaint:</h3>
        <p>
            A formal response will be provided to the client within <strong>[7]</strong> business days, outlining the measures taken to resolve the issue.
        </p>
        
        <h3>If the Client is Not Satisfied with the Proposed Resolution:</h3>
        <p>
            If a satisfactory resolution is not reached, the client has the right to escalate the complaint to the Financial Regulatory Authority (FRA) through the following channels:
        </p>
        <ul>
            <li>Website: <a href="https://complaints.fra.gov.eg" target="_blank" rel="noopener noreferrer">https://complaints.fra.gov.eg</a></li>
            <li>Email: <a href="mailto:complaints@fra.gov.eg">complaints@fra.gov.eg</a></li>
        </ul>
        
        <h3>Company Complaints Officer:</h3>
        <p>
            To ensure effective communication and transparency, <strong>[………………]</strong> has been appointed as the designated officer responsible for responding to complaints and inquiries.
        </p>
        <p>
            He can be reached via email at <strong>[………………………………..…]</strong> or phone at <strong>[……………………]</strong>.
        </p>
        
        <p>
            At Jusoor Insurance Brokerage, we believe that our clients’ feedback and complaints provide valuable opportunities for improving our services. We are committed to ensuring the highest levels of satisfaction and trust.
        </p>
        </div>
    </DefaultLayout>
  );
};

export default CustomerComplaints;
