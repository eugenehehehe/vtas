import React from 'react';
import './MainContent.css';
<link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'></link>

const MainContent = () => {
  return (
    <section className="main-section">
      <h1 className="heading">Welcome to</h1>
      <h1 className="subheading">Visual Tech Asia</h1>
      <p className="text">
        At Visual Tech Asia, we transform businesses with cutting-edge technology and expert consultation services. 
        Founded in 2017 by a team with over 15 years of experience, we are dedicated to helping your business achieve its 
        full potential through innovative solutions and strategic guidance.
      </p>
    </section>
  );
}

export default MainContent;