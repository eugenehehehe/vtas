import React from 'react';
import './MainContent.css';
import Navbar from './Navbar';


const MainContent = () => {
  return (
    <div className="main-content-container">
      <Navbar />
    <section className="main-section">
      <div className="content-wrapper">
        <div className="line"></div>
        <div className="content-text">
          <div className="title-wrapper">
            <div className="headingm">Welcome to</div>
            <div className="subheadingm">Visual Tech Asia</div>
            </div>
          <p className="textm">
            At Visual Tech Asia, we transform businesses with cutting-edge technology and expert consultation services. 
            Founded in 2017 by a team with over 15 years of experience, we are dedicated to helping your business achieve its 
            full potential through innovative solutions and strategic guidance.
          </p>
        </div>
      </div>
    </section>
    </div>
    );
}

export default MainContent;
