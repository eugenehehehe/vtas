import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import { GlobalStyle } from './styles/GlobalStyles';
import './App.css';

import OurExpertise from './components/OurExpertise';




const App = () => {
  return (
    <div className="app-container">
      <GlobalStyle />
      <div className="background-wrapper"></div>
      <Navbar />
      <MainContent />
      
      <OurExpertise />

    </div>
    
  );
}

export default App;


