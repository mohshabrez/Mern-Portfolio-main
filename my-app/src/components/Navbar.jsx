import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav id="desktop-nav" className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
      <div className="logo">Shabrez G</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>
      <nav id='hamburger-nav'>
      <div class="logo">Shabrez G</div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-icon ${isMenuOpen ? 'hamburger-icon open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${isMenuOpen ? 'menu-links open' : ''}`}>
          <li><a href="#about" >About</a></li>
          <li><a href="#experience" >Experience</a></li>
          <li><a href="#projects" >Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </div>
      </div>
      </nav>
      </>
  );
}

export default Navbar;
