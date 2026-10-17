import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Brand Logo & Name */}
      <div className="brand">
        <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
        <span className="brand-name">NeoVision</span>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        
        {/* Dropdown Link */}
        <div 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="#services" className="dropdown-trigger">
            Services
          </a>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="#web">Web Design</a>
              <a href="#branding">Branding</a>
              <a href="#seo">SEO</a>
            </div>
          )}
        </div>

        <a href="#contact">Contact</a>
      </nav>

      {/* Search Bar */}
      <div className="search-box">
        <input type="text" placeholder="I'am looking for..." />
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </header>
  );
};

export default Navbar;