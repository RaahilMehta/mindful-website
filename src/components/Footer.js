// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Footer-specific styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/workk_in.progress/profilecard/?igsh=MW5lNHdyZTlmdDc2MQ%3D%3D" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">Contact</a>
          <a href="mailto:your-email@example.com">Mail</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
