import React, { useEffect } from 'react';
import './ERP.css';
import Navbar from './Navbar';
import icon1 from '../image/23.png';
import icon2 from '../image/24.png';
import icon3 from '../image/25.png';
import icon4 from '../image/26.png';
import icon5 from '../image/27.png';
import icon6 from '../image/28.png';
import icon7 from '../image/29.png';
import icon8 from '../image/30.png';
import icon9 from '../image/31.png';
import erp1 from '../image/erp1.png';
import erp2 from '../image/erp2.png';
import erp3 from '../image/erp3.png';
// import vector1 from '../image/Vector1.png';
// import vector2 from '../image/Vector2.png';
// import vector3 from '../image/Vector3.png';
// import vector4 from '../image/Vector4.png';
// import vector5 from '../image/Vector5.png';

const ERP = () => {
    useEffect(() => {
        const bgSection = document.querySelector('.custom.bg');
        const img = new Image();
        img.src = '/image/ERP.png';
        img.onload = () => {
            bgSection.style.backgroundImage = `url(${img.src})`;
        };
    }, []);

    return (
        <section className="custom bg">
            <Navbar />
            <div className="section">
                <div className="heading">ERP Microsoft Dynamics 365 F&O Implementation</div>
                <p>With years of experience and a team of certified experts, Visual Tech Asia ensures a seamless implementation of Dynamics 365 F&O. Our proven methodology, tailored to your specific requirements, minimizes risks and ensures a smooth transition.
                </p>
                
                <div className="erp-logos">
                    <div className="erp-logo-box">
                        <img src={erp1} alt="Microsoft Dynamics 365" className="erp-logo" />
                    </div>
                    <div className="erp-logo-box">
                        <img src={erp2} alt="Microsoft Dynamics 365 for Finance & Operations" className="erp-logo" />
                    </div>
                    <div className="erp-logo-box">
                        <img src={erp3} alt="Copilot" className="erp-logo" />
                    </div>
                </div>
                </div>
                <div className="steps">
                    <div className='step'>
                        <img src={icon1} alt="Comprehensive Planning and Scoping" className="icon left-icon" style={{ width: '460px', height: '314px' }} />
                        <div className="text1">
                            <h2>Comprehensive Planning and Scoping</h2>
                            <p>We begin with a detailed analysis of your business needs, defining the project scope, budget, and timeline. This ensures that all stakeholders are aligned and prepared for a successful implementation​​.</p>
                        </div>
                    </div>
                </div>
                {/* <img src={vector1} alt="vector1" className="vector" /> */}

                <div className="step">
                    <div className="text2">
                        <h2>Lifecycle Services (LCS)
                            Configuration</h2>
                        <p>Our team expertly configures LCS to manage and track your project from start to finish. This includes setting up environments, managing code, and monitoring progress, ensuring every aspect of the implementation is controlled and optimized.</p>
                    </div>
                    <img src={icon2} alt="System Design & Integration" className="icon right-icon" style={{ width: '325px', height: '380px' }} />
                </div>
                {/* <img src={vector2} alt="vector2" className="vector" /> */}

                <div className="step">
                    <img src={icon3} alt="Tailored Solution Design and Development" className="icon left-icon" style={{ width: '385px', height: '325pxpx' }} />
                    <div className="text1">
                        <h2>Tailored Solution
                            Design and Development</h2>
                        <p>We collaborate closely with your team to design and develop a solution that meets your business requirements. Our approach includes creating functional and technical design documents, developing custom features, and ensuring compatibility with existing systems​​ or business procedures</p>
                    </div>
                </div>
                {/* <img src={vector3} alt="vector3" className="vector" /> */}

                <div className="step">
                    <div className="text2">
                        <h2>Rigorous Testing & Validation</h2>
                        <p style={{width: "659px", height: "60.15px"}}>To ensure the highest quality, we conduct extensive testing, including unit tests, integration tests, and user acceptance tests. This thorough process guarantees that the solution works seamlessly in your environment before it goes live​​.</p>
                    </div>
                    <img src={icon4} alt="Rigorous Testing & Validation" className="icon right-icon" style={{ width: '413px', height: '370px' }} />
                </div>
                {/* <img src={vector4} alt="vector4" className="vector" /> */}

                <div className="step">
                    <img src={icon5} alt="Seamless Deployment and Ongoing Support" className="icon left-icon" style={{ width: '341pxpx', height: '361px' }} />
                    <div className="text1">
                        <h2>Seamless Deployment and Ongoing Support</h2>
                        <p>Our deployment process is meticulously planned and executed to ensure minimal disruption to your business. Post-deployment, we offer continuous support and maintenance to keep your systems running smoothly and efficiently​.</p>
                    </div>
                </div>
                {/* <img src={vector5} alt="vector5" className="vector" /> */}


            <div className="why-f">
                <h2>Why Dynamics 365 F&O ?</h2>
                <div className="benefits">
                    <div className="benefit">
                        <img src={icon6} alt="Enhanced Financial Management" className="benefit-icon" />
                        <div>
                            <h3>Enhanced Financial Management</h3>
                            <p>Leverage AI-driven insights for accurate financial forecasting, improved cash flow management, and streamlined accounting processes​.</p>
                        </div>
                    </div>
                    <div className="benefit">
                        <img src={icon7} alt="Optimized Supply Chain Operations" className="benefit-icon" />
                        <div>
                            <h3>Optimized Supply Chain Operations</h3>
                            <p>Manage your inventory, warehouse, and procurement processes more effectively, ensuring timely delivery and quality control​.</p>
                        </div>
                    </div>
                    <div className="benefit">
                        <img src={icon8} alt="Robust Data Security" className="benefit-icon" />
                        <div>
                            <h3>Robust Data Security</h3>
                            <p>Benefit from top-tier security features, ensuring your data is protected against breaches and compliant with industry standards​​.</p>
                        </div>
                    </div>
                    <div className="benefit">
                        <img src={icon9} alt="Seamless Integrations" className="benefit-icon" />
                        <div>
                            <h3>Seamless Integrations</h3>
                            <p>Integrate seamlessly with other Microsoft products like Power BI, Power Apps, and SharePoint, as well as third-party applications, for a unified business solution​.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ERP;
