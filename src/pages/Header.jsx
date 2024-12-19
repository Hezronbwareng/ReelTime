import React, { useState } from 'react';
import '../pages/header.css';
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import Search from '../components/Search';
import Button from '../components/Button';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
    
      <a href="/" className="logo">ReelTime</a>

   
      <div className="header-actions">
        <Search className="search-bar" />
        <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name="Sign In" className="signIn" />
        <div className="menu-icon" onClick={toggleMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>

      
      <ul className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        {navListData.map(nav => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
    </header>
  );
}

export default Header;
