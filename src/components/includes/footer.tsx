import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file
import logo from './../../images/Jlogo-footer.webp';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content container">
        <div className="footer-section">
          <h1>
            <img className="footer-logo" src={logo} alt="Jusoor Logo" />
          </h1>
        </div>
        <div className="footer-section">
          <h5 className="footer-heading">Address</h5>
          <p className="footer-text">
            <i className="fa fa-map-marker-alt"></i>
            <a
              href="https://www.google.com/maps/place/10+El-Batal+Ahmed+Abd+El-Aziz+Street,+Mohandessin,+Giza"
              target="_blank"
              rel="noopener noreferrer"
            >
              10 El-Batal Ahmed Abd El-Aziz Street, Mohandessin, Giza
            </a>
          </p>
          <p className="footer-text">
            <i className="fa fa-phone-alt"></i> 01044479475
          </p>
          <p className="footer-text">
            <i className="fa fa-envelope"></i> info@jusoor.com.eg
          </p>
        </div>
        <div className="footer-section">
          <h5 className="footer-heading">Quick Links</h5>
          <Link className="footer-link" to="/about">About Us</Link>
          <Link className="footer-link" to="/contact">Contact Us</Link>
          <Link className="footer-link" to="/solutions">Our Solutions</Link>
          <Link className="footer-link" to="/Terms-and-Conditions">Terms &amp; Conditions</Link>
          <Link className="footer-link" to="/Privacy-policy">Privacy Policy</Link>
        </div>
        <div className="footer-section">
          <h5 className="footer-heading">Social Media</h5>
          <p className="footer-text">Always in touch</p>
          <div className="social-media-icons">
            <a className="social-icon" href=""><i className="fab fa-twitter"></i></a>
            <a className="social-icon" href=""><i className="fab fa-facebook-f"></i></a>
            <a className="social-icon" href=""><i className="fab fa-youtube"></i></a>
            <a className="social-icon" href=""><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-complaints"  style={{maxWidth: 1500, margin: 'auto', textAlign: 'center', marginBottom: 16, color: '#fff'}}>
        <p>
          If a client has a complaint, they have the right to first submit it to the company via phone no. 00201044479475 or email at
          <a href="mailto:complaints@jusoor.com.eg"  style={{color: '#ccc'}}> complaints@jusoor.com.eg</a> or manually at the company’s headquarters. If the complaint is not resolved within the specified timeframe, the company fails to address the complaint, or the client is not satisfied with the handling of their complaint within the company, they have the right to escalate it to the Financial Regulatory Authority (FRA) through its official website: 
          <a href="https://complaints.fra.gov.eg" target="_blank" rel="noopener noreferrer" style={{color: '#ccc'}}> https://complaints.fra.gov.eg</a>.
        </p>
      </div>
      <div className="footer-regulation"   style={{maxWidth: 1500, margin: 'auto', textAlign: 'center',marginBottom: 16, color: '#fff'}}>
        <p>
          Jusoor for Insurance Brokerage is regulated and supervised by the Financial Regulatory Authority (F.R.A) and licensed under no. 106.
          The website has been approved by the FRA on ../../….
        </p>
        <p>
          C.R No.: 168676 | Tax Registration No.: 636-084-167
        </p>
      </div>
      <div className="footer-copyright">
        COPYRIGHT © 2024 JUSOOR FOR INSURANCE BROKERAGE - ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
