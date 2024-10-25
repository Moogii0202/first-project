import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="navbar">
        {/* Left section with logo and menu toggle */}
        <div className="navbar-left">
          <div className="logo">
            Blackat
          </div>
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
        <a href="#">IT & Software</a>
        <a href="#">Санхүү</a>
        <a href="#">Хувь Хүний Хөгжил</a>
        <a href="#">Дизайн</a>
        <a href="#">Маркетинг</a>
        <a href="#">Эрүүл Мэнд & Фитнесс</a>
        <a href="#">Хөгжим</a>
      </div>
    </header>
  );
};

export default Header;
