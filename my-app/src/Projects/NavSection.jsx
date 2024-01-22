import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
   <nav id="desktop-nav" className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
    <Link to={"/"}>
      <div className="logo">Shabrez G</div>
      </Link>
      <Link to={'/'}>
      <ul className="nav-links underline font-semibold">
        <li><a href="#">&#8592; Pull Back</a></li>
      </ul>
      </Link>
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
         <Link to={'/'}>
            <ul>
                <li className='backbtn'>Main</li>
            </ul>
         </Link>
        </div>
      </div>
      </nav>
      </>
  );
}

export default NavSection;
