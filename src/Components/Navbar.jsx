import React from 'react';
import Logo from './../assets/images/rembg-echunav.png';
import './../Components/Navbar.css';

function Navbar() {
  return (
    <div className="NavBar">
      <a href="/candidates">
        <img
          src={Logo}
          alt="eChunav Logo"
          className="NavLogo"
        />
      </a>

      <div className="nav-links">
        <a href="/result">Results</a>
        <a href="/profile">Profile</a>
      </div>
    </div>
  );
}

export default Navbar;
