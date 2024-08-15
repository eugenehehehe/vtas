import React, { useEffect } from 'react';
import './RFID.css';
import Navbar from './Navbar';
import icon1 from '../image/15.png';
import icon2 from '../image/16.png';
import icon3 from '../image/17.png';
import icon4 from '../image/18.png';
import icon5 from '../image/19.png';
import icon6 from '../image/20.png';
import icon7 from '../image/22.png';
import icon8 from '../image/21.png';



const RFID = () => {
  useEffect(() => {
    const bgSection = document.querySelector('.custom.bg');
    const img = new Image();
    img.src = '/image/customappdev2.png'; 
    img.onload = () => {
      bgSection.style.backgroundImage = `url(${img.src})`;
    };
  }, []);

  return (
    <section className="custom bg">
      <Navbar />
      <div className="section">
        <div className="heading">RFID Solutions</div>
        <p>Visual Tech Asia offers cutting-edge RFID solutions that enhance efficiency and accuracy in tracking and managing your assets. Our comprehensive services ensure that you leverage the full potential of RFID technology for your business operations.
        </p>
      </div>
      <div className="steps">
        <div className="step">
          <img src={icon1} alt="Consultation & Planning" className="icon left-icon" style={{ width: '460px', height: '314px' }}/>
          <div className="text1">
            <h2>Consultation & Planning</h2>
            <p>We begin with a detailed consultation to understand your tracking and management needs. This includes identifying the best RFID technology and solutions that align with your business goals.</p></div>
        </div>
        <div className="step">
          <div className="text2">
            <h2>System Design & Integration</h2>
            <p>Our experts design an RFID system tailored to your requirements, ensuring seamless integration with your existing processes and systems. This includes hardware selection, software development, and system architecture planning.</p></div>
          <img src={icon2} alt="System Design & Integration" className="icon right-icon" style={{ width: '402px', height: '292px' }}/>
        </div>
        <div className="step">
          <img src={icon3} alt="Tagging & Implementation" className="icon left-icon" style={{ width: '385px', height: '325pxpx' }}/>
          <div className="text1">
            <h2>Tagging & Implementation</h2>
            <p>We provide and implement RFID tags for your assets, ensuring optimal placement and configuration for accurate tracking. Our implementation process is efficient, minimizing downtime and disruption.</p>
          </div>
        </div>
        <div className="step">
          <div className="text2">
            <h2>Data Collection & Management</h2>
            <p>Our RFID solutions enable real-time data collection and management, giving you complete visibility and control over your assets. This includes inventory management, asset tracking, and process automation.</p>
          </div>
          <img src={icon4} alt="Data Collection & Management" className="icon right-icon" style={{ width: '413px', height: '370px' }}/>
        </div>
        <div className="step">
          <img src={icon5} alt="Training & Support" className="icon left-icon" style={{ width: '341pxpx', height: '361px' }}/>
          <div className="text1">
            <h2>Training & Support</h2>
            <p>We offer comprehensive training for your staff to ensure they are proficient in using the RFID system. Additionally, our ongoing support services ensure that your system remains reliable and efficient.</p>
          </div>
        </div>
      </div>
      <div className="why-rfid">
        <h2>WHY RFID?</h2>
        <h4>RFID (Radio Frequency Identification) technology revolutionizes asset tracking and management, offering numerous benefits:
        </h4>
        <div className="benefits">
          <div className="benefit">
            <img src={icon6} alt="Improved Security and Compliance" className="benefit-icon" />
            <div>
              <h3>Improved Security and Compliance</h3>
              <p>Our RFID solutions enhance security measures and ensure compliance with industry standards.</p>
            </div>
          </div>
          <div className="benefit">
            <img src={icon7} alt="Enhanced Efficiency and Accuracy" className="benefit-icon" />
            <div>
              <h3>Enhanced Efficiency and Accuracy</h3>
              <p>RFID technology streamlines processes and improves accuracy in tracking and managing assets.</p>
            </div>
          </div>
          <div className="benefit">
            <img src={icon8} alt="Cost Savings and Scalability" className="benefit-icon" />
            <div>
              <h3>Cost Savings and Scalability</h3>
              <p>Our scalable solutions offer significant cost savings and adapt to the growing needs of your business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFID;