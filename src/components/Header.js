import React, { useState } from 'react';
import './Header.css';

const Header = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <img src="/assets/logo.png" alt="GydeXP Logo" />
          </div>
          <div className="logo-text">
            <img src="/assets/logoname.png" alt="GydeXP" />
          </div>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => handleNavClick('hero')} className="nav-link">Home</button>
          <button onClick={() => handleNavClick('dashboard')} className="nav-link">Tracking Studio</button>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#experiences" className="nav-link">Experiences</a>
          <a href="#dreamxp" className="nav-link">DreamXP</a>
        </nav>

        <div className="header-actions">
          <button className="btn btn-text">Log In</button>
          <button className="btn btn-primary">Book a Demo</button>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
