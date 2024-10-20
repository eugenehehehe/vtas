import React, { useEffect } from 'react';
import './CustomApplicationDevelopment.css';
import Navbar from './Navbar';
import icon1 from '../image/8-1.png';
import icon2 from '../image/8.png';
import icon3 from '../image/4.png';
import icon4 from '../image/5.png';
import icon5 from '../image/6.png';
import icon6 from '../image/7.png';
import icon7 from '../image/holistic 2.png';
<link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'></link>

const CustomApplicationDevelopment = () => {
  useEffect(() => {
    const bgSection = document.querySelector('.background2');
    const img = new Image();
    img.src = '/image/appdevbg.png'; 
    img.onload = () => {
      bgSection.style.backgroundImage = `url(${img.src})`;
    };
  }, []);

  return (
    <section className="background2">
      <Navbar />
      <div className="section">
        <div className="headingc">Custom Application <br/> Development</div>
        <p>At Visual Tech Asia, we craft bespoke <strong style={{"font-weight": 900}}>mobile and web</strong> applications designed to meet your unique business needs. Our dedicated team of developers and designers leverage the latest technologies to deliver high-quality, scalable, and user-friendly applications.</p>
      </div>
      <div className="steps c">
        <div className="stepc">
          <img src={icon1} alt="Assessment & Planning" className="icon left-icon"/>
          <div className="text1">
            <h2>Assessment & Planning</h2>
            <p>We start by understanding your business goals and requirements. This involves a thorough analysis of your needs, defining the project scope, timeline, and budget to ensure a clear roadmap for development.</p>
          </div>
        </div>
        <div className="stepc">
          <div className="text2">
            <h2>UI/UX Design</h2>
            <p>Our design team creates intuitive and engaging user interfaces, ensuring a seamless and enjoyable user experience. We focus on aesthetics and usability to make your application stand out.</p>
          </div>
          <img src={icon2} alt="UI/UX Design" className="icon right-icon"/>
        </div>
        <div className="stepc">
          <img src={icon3} alt="Agile Development" className="icon left-icon"/>
          <div className="text1">
            <h2>Agile Development</h2>
            <p>Utilizing agile methodologies, our developers build your application in iterative cycles, allowing for flexibility and continuous improvement. This approach ensures timely delivery and the highest quality standards.</p>
          </div>
        </div>
        <div className="stepc">
          <div className="text2">
            <h2>Integration & <br/>Customization</h2>
            <p>We ensure your application integrates seamlessly with existing systems and third-party services. Our customization capabilities mean we can adapt the solution to fit your specific needs.</p>
          </div>
          <img src={icon4} alt="Integration & Customization" className="icon right-icon"/>
        </div>
        <div className="stepc">
          <img src={icon5} alt="Quality Assurance & Testing" className="icon left-icon"/>
          <div className="text1">
            <h2>Quality Assurance & Testing</h2>
            <p>Rigorous testing is conducted throughout the development process. From unit testing to user acceptance testing, we ensure your application is bug-free and performs flawlessly.</p>
          </div>
        </div>
        <div className="stepc">
          <div className="text2">
            <h2>Deployment & Support</h2>
            <p>Our deployment process is smooth and efficient, minimizing any disruption to your operations. Post-deployment, we provide ongoing support and maintenance to keep your application running smoothly.</p>
          </div>
          <img src={icon6} alt="Deployment & Support" className="icon-6"/>
        </div>
        <div className="stepc">
          <img src={icon7} alt="Holistic Business Improvement" className="icon left-icon"/>
          <div className="text1">
            <h2>Holistic Business Improvement</h2>
            <p>Our services are designed to enhance the overall value of your business. This includes expert guidance on your requirements, ensuring that your operations are optimized both digitally and physically. We strive to make your business more efficient and effective in every aspect.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomApplicationDevelopment;
