import React from 'react';
import './ContactUs.css'; 
import qrCode from '../image/qrCode.png';
const ContactUs = () => {
    return (
        <section id="contact" className="contact-us">
            <h2>CONTACT</h2>
            <h1>Join the <span className="highlight">Visual Tech Asia</span> Success Story</h1>
            <p>At Visual Tech Asia, our commitment is to help you unlock the full potential of your business.
               Contact us today to learn how we can transform your financial and operational processes, 
               driving growth and efficiency in your organization.</p>
            <div className="contact-info">
                <div className="contact-details">
                    <h3>Visual Tech Asia</h3>
                    <p>Ruko Bavaria, Jl. Fatmawati Perum. Gading Serpong No.90<br/>Tangerang, Banten</p>
                    <p>Email: support@visualtechasia.com</p>
                    <p>WhatsApp: 0819 2461 689</p>
                </div>
                <div className="qr-code">
                    <img src={qrCode} alt="QR Code" />
                    <p>SCAN ME</p>
                </div>
            </div>
            {/* <div className="map">
                <img src=" alt="Map" />
            </div> maps api*/}
        </section>
    );
};

export default ContactUs;
