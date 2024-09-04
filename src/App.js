import React from 'react';

import MainContent from './components/MainContent';

import './App.css';
import { GlobalStyle } from './styles/GlobalStyles';
import OurExpertise from './components/OurExpertise';

import ContactUs from './components/ContactUs';




const App = () => {
  return (
    <div className="app-container">
      
      <GlobalStyle />
      <div className="background-wrapper"></div>
      {/* <Navbar /> */}
      <MainContent />
      <OurExpertise />
      <ContactUs />
    </div>

  );
}

export default App;


