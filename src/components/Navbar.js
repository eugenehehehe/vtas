import React, { useState } from 'react';
import logo from '../image/VTAAA.png';
import flag from '../image/usflag.png';
import flag2 from '../image/idnflag.png';
import { FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [activeLanguage, setActiveLanguage] = useState('EN');

    const handleLanguageChange = (language) => {
        setActiveLanguage(language);
    };

    return (
        <nav className="nav">
            <img src={logo} alt="Visual Tech Logo" className="logo" />
            <div className="menu">
                <div className="menu-item">
                    <a href="#expertise" className="nav-item">
                        Our Expertise <FaChevronDown className="dropdown-icon" />
                    </a>
                    <div className="dropdown">
                        <a href="#erp" className="dropdown-item">ERP Microsoft Dynamics 365 F&O Implementation</a>
                        <a href="#custom-dev" className="dropdown-item">Custom Application Development</a>
                        <a href="#rfid" className="dropdown-item">RFID Solutions</a>
                    </div>
                </div>
                <a href="#services" className="nav-item">Our Services</a>
                <a href="#contact" className="nav-item">Contact Us</a>
            </div>
            <div className="language-buttons">
                <img 
                    src={flag} 
                    alt="US Flag" 
                    className={`small-logo ${activeLanguage === 'EN' ? '' : 'inactive-flag'}`} 
                />
                <button 
                    className={`language-button ${activeLanguage === 'ID' ? 'active' : ''}`} 
                    onClick={() => handleLanguageChange('EN')}
                >
                    EN
                </button>
                <span>|</span>
                <button 
                    className={`language-button ${activeLanguage === 'EN' ? 'active' : ''}`} 
                    onClick={() => handleLanguageChange('ID')}
                >
                    ID
                </button>
                <img 
                    src={flag2} 
                    alt="Indonesia Flag" 
                    className={`small-logo ${activeLanguage === 'ID' ? '' : 'inactive-flag'}`} 
                />
                
            </div>
        </nav>
    );
}

export default Navbar;
