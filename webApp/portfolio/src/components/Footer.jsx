import React from 'react';
import reactLogo from '../assets/react.svg'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className='footContainer'>
        <a target="_blank">
            <p>Made using<img src={reactLogo} className="logo" alt="React logo" /></p>
          
        </a>
        <p>footer</p>
      </div>
    </footer>
  );
}

export default Footer;
