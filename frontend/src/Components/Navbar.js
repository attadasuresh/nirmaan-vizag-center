import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className='navbar-full-container'>
      <div>
        <Link className='navbar-home1' to="/home">
          <img src='images/nirmaanlogo.png' alt='logo' className='navbar-image-logo' />
        </Link>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}> {/* Centering Vizag */}
        <h1 style={{ color: '#fff', margin: 0, fontSize: '24px', fontWeight: "bold", fontFamily: "roboto" }}>
          Visakhapatnam
        </h1>
      </div>
      <button className='hamburger' onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-headings-container ${isOpen ? "show" : ""}`}>
        <Link  className='navbar-button1 navbar-home' to="/about">About Us</Link>
        <Link  className='navbar-button1 navbar-home' to="/Cource">Courses</Link>
        <Link  className='navbar-button1 navbar-home' to="/Contact">Contact</Link>
        <Link  className='navbar-button1 navbar-home' to="/Placement">Placement</Link>
      </div>
    </div>
  );
};

export default Navbar;
