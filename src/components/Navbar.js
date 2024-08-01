import React from 'react';
import logo from '../image/VTAAA.png';
import flag from '../image/usflag.png';
import flag2 from '../image/hoveridn.png';
import { FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
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
                <a href="#services" className="nav-item2">Our Services</a>
                <a href="#contact" className="nav-item">Contact Us</a>
            </div>
            <div className="language-buttons">
                <img src={flag} alt="Small Logo" className="small-logo" />
                <button className="language-button">EN| </button>
                <img src={flag2} alt="Small Logo" className="small-logo" />
                <button className="language-button gray-button">ID</button>
            </div>
        </nav>
    );
}

export default Navbar;