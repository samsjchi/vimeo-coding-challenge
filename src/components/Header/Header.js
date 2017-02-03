import React from 'react';
import './Header.css';

import logo from '../../assets/img/vimeo-logo.png';
import badge from '../../assets/img/sp-badge.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="https://vimeo.com"><img src={logo} alt="Vimeo Logo" /></a>
      </div>
      <div className="header__badge">
        <img src={badge} alt="Staff Picks Badge" />
      </div>
    </header>
  );
};

export default Header;
