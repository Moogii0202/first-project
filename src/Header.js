import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (type) => {
    setActiveDropdown(activeDropdown === type ? null : type); // Close if it's already open, otherwise open
  };
  return (
    <header className="header">
      <div className="navbar">
        {/* Left section with logo and menu toggle */}
        <div className="navbar-left">
          <div className="logo">Blackat</div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span>&#9776;</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>

        {/* Right section with icons and user profile */}
        <div className="navbar-right">
          <div className="icon-group">
            <a href="#">
              <i className="fa-regular fa-bell"></i>
            </a>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </div>

          <div className="user-profile">
            <span>Munkhbayar</span>
            <img src="profile.jpg" alt="Profile" className="profile-pic" />
            <span>Student</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Links - Toggles on small screens */}
      <div className={`navbar-bottom ${isMenuOpen ? 'open' : ''}`}>
        <div className="dropdown-container">
          <a href="#" className="nav-link" onClick={() => toggleDropdown('IT')}>
            IT & Software
          </a>
          {activeDropdown === 'IT' && (
            <div className="dropdown-menu">
              <a href="#">Java</a>
              <a href="#">Python</a>
              <a href="#">C++</a>
              <a href="#">JavaScript</a>
              <a href="#">HTML & CSS</a>
              <a href="#">Ruby</a>
              <a href="#">Go</a>
              <a href="#">Kotlin</a>
              <a href="#">Swift</a>
              <a href="#">PHP</a>
              <a href="#">TypeScript</a>
              <a href="#">SQL</a>
              <a href="#">R</a>
              <a href="#">Scala</a>
              <a href="#">Perl</a>
            </div>
          )}
        </div>

        <div className="dropdown-container">
          <a href="#" className="nav-link" onClick={() => toggleDropdown('Finance')}>
            Санхүү
          </a>
          {activeDropdown === 'Finance' && (
            <div className="dropdown-menu">
              <a href="#">Java</a>
              <a href="#">Python</a>
              <a href="#">C++</a>
              <a href="#">JavaScript</a>
              <a href="#">HTML & CSS</a>
              <a href="#">Ruby</a>
             
            </div>
          )}
        </div>

        <a href="#" className="nav-link" onClick={() => toggleDropdown('PersonalDevelopment')}>
          Хувь Хүний Хөгжил
        </a>
        {/* You can add dropdown for this section similarly if needed */}

        <a href="#" className="nav-link" onClick={() => toggleDropdown('Design')}>
          Дизайн
        </a>
        {/* Add more links as necessary */}
      </div>
    </header>
  );
};

export default Header;
