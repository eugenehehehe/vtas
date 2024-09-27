import React from 'react';
import './ContactUs.css';
import qrCode from '../image/qrcoden.png';
import locationIcon from '../image/mapIcon.png'; 
import emailIcon from '../image/mailIcon.png'; 
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
                        <p>Ruko Bavaria, Jl. Fatmawati Perum. Gading Serpong No.90<br />Tangerang, Banten</p>
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
            <div className="map-wrapper">
                <iframe
                    className="responsive-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1492479649305!2d106.6198921!3d-6.244053600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd45edf66449%3A0xbeb406fa930af266!2sVisual%20Tech%20Asia!5e0!3m2!1sid!2sid!4v1725545904411!5m2!1sid!2sid"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    );
};

export default ContactUs;
