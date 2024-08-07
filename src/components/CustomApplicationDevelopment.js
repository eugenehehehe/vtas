import React, { useEffect } from 'react';
import './CustomApplicationDevelopment.css';
import Navbar from './Navbar';

const CustomApplicationDevelopment = () => {
  useEffect(() => {
    const bgSection = document.querySelector('.custom.bg');
    const img = new Image();
    img.src = '/src/image/customappdev.png';
    img.onload = () => {
      bgSection.style.backgroundImage = `url(${img.src})`;
    };
  }, []);

  return (
    <section className="custom bg">
      <Navbar />
      <div className="section">
        <div className="heading">Custom Application </div>
        <div className="subheading">Development </div>
        <p>At Visual Tech Asia, we craft bespoke <strong>mobile and web</strong> applications designed to meet your unique business needs. Our dedicated team of developers and designers leverage the latest technologies to deliver high-quality, scalable, and user-friendly applications.</p>
      </div>
      <div className="steps">
        <div className="step">
          <h2>Assessment & Planning</h2>
          <div className="left">
            We start by understanding your business goals and requirements. This involves a thorough analysis of your needs, defining the project scope, timeline, and budget to ensure a clear roadmap for development.
          </div>
        </div>
        <div className="step">
          <h2>UI/UX Design</h2>
          <div className="right">
            Our design team creates intuitive and engaging user interfaces, ensuring a seamless and enjoyable user experience. We focus on aesthetics and usability to make your application stand out.
          </div>
        </div>
        <div className="step">
          <h2>Agile Development</h2>
          <div className="left">
            Utilizing agile methodologies, our developers build your application in iterative cycles, allowing for flexibility and continuous improvement. This approach ensures timely delivery and the highest quality standards.
          </div>
        </div>
        <div className="step">
          <h2>Integration & Customization</h2>
          <div className="right">
            We ensure your application integrates seamlessly with existing systems and third-party services. Our customization capabilities mean we can adapt the solution to fit your specific needs.
          </div>
        </div>
        <div className="step">
          <h2>Quality Assurance & Testing</h2>
          <div className="left">
            Rigorous testing is conducted throughout the development process. From unit testing to user acceptance testing, we ensure your application is bug-free and performs flawlessly.
          </div>
        </div>
        <div className="step">
          <h2>Holistic Business Improvement</h2>
          <div className="right">
            Our services are designed to enhance the overall value of your business. This includes expert guidance on your requirements, ensuring that your operations are optimized both digitally and physically. We strive to make your business more efficient and effective in every aspect.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomApplicationDevelopment;
