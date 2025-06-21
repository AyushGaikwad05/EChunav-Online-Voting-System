import React from 'react';
import './../Components/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <p>Made By @AyushGaikwad</p>
      <div className='social-links'>
        <a href="https://github.com/AyushGaikwad05" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ayush-gaikwad05" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:ayushgaikwad0605@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
