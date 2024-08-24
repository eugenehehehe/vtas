import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/VTAAA2.png';
import flag from '../image/usflag.png';
import flag2 from '../image/idnflag.png';
import { FaChevronDown } from 'react-icons/fa';
import './Navbar.css';
<link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'></link>
// import './CustomApplicationDevelopment';
// import './RFID';
// import './ERP';

const Navbar = () => {
    const [activeLanguage, setActiveLanguage] = useState('EN');

    const handleLanguageChange = (language) => {
        setActiveLanguage(language);
    };
    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="nav">
            <Link to="/">
            <div className="logo-container">
                    <img src={logo} alt="Visual Tech Logo" className="logo" />
                </div>
            </Link>
            <div className="menu">
                <div className="menu-item">
                    <a href="#expertise" className="nav-item">
                        Our Expertise <FaChevronDown className="dropdown-icon" />
                    </a>
                    <div className="dropdown">
                        <Link to="/erp" className="dropdown-item">
                            ERP Microsoft Dynamics 365 F&O Implementation
                        </Link>
                        <Link to="/custom-application-development" className="dropdown-item">
                            Custom Application Development
                        </Link>
                        <Link to="/rfid-solutions" className="dropdown-item">
                            RFID Solutions
                        </Link>
                    </div>
                </div>
                <a href="#services" className="nav-item">Our Services</a>
                <Link to="/" onClick={handleScrollToContact} className='nav-item'>
                    Contact Us
                </Link>
            </div>
            <div className="language-buttons">
                <img
                    src={flag}
                    alt="US Flag"
                    className={`small-logo ${activeLanguage === 'EN' ? '' : 'inactive-flag'}`}
                />
                <button
                    className={`language-button ${activeLanguage === 'ID' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('EN')}>
                    EN
                </button>
                <span>|</span>
                <button
                    className={`language-button ${activeLanguage === 'EN' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('ID')}>
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
