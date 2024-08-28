import React from 'react';
import './ContactUs.css'; 
import qrCode from '../image/qrCode.png';
import locationIcon from '../image/mapIcon.png'; // Import the location icon
import emailIcon from '../image/mailIcon.png'; // Import the email icon
import whatsappIcon from '../image/waIcon.png';

const ContactUs = () => {
    return (
        <section id="contact-sction" className="contact-us">
            <div className="anchor-offset" id="contact-anchor"></div>
            <h2>CONTACT</h2>
            <h1>Join the <span className="highlight">Visual Tech Asia</span> Success Story</h1>
            <p>At Visual Tech Asia, our commitment is to help you unlock the full potential of your business.
               Contact us today to learn how we can transform your financial and operational processes, 
               driving growth and efficiency in your organization.</p>
            <div className="contact-info">
                <div className="contact-details">
                <h3>Visual Tech Asia</h3>        
                <div className="contact-item">
                        <img src={locationIcon} alt="Location Icon" className="icon" />
                        <p>Ruko Bavaria, Jl. Fatmawati Perum. Gading Serpong No.90<br/>Tangerang, Banten</p>
                    </div>
                    <div className="contact-item">
                        <img src={emailIcon} alt="Email Icon" className="icon" />
                        <p>support@visualtechasia.com</p>
                    </div>
                    <div className="contact-item">
                        <img src={whatsappIcon} alt="WhatsApp Icon" className="icon" />
                        <p>0819 2461 689</p>
                    </div>
                </div>
                <div className="qr-section">
                <div className="qr-code-box">
                
                <div className='scan-container'>
                <div className="text-heading">SCAN</div>
                <div className="text-sub">ME</div>
                </div>
                    <img src={qrCode} alt="QR Code" className="qr-code" />
                </div>
                
            </div>
            </div>
            {/* <div className="map">
                <img src=" alt="Map" />
            </div> maps api*/}
        </section>
    );
};

export default ContactUs;
