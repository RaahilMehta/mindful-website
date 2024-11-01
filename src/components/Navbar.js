import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= navbarRef.current.offsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`} ref={navbarRef}>
      <div className="navbar-content">
        {/* Burger menu icon on the left */}
        <div className="burger-menu" onClick={toggleMobileMenu}>
          &#9776;
        </div>

        {/* Navbar links for desktop */}
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#plans">Plans</a></li>
        </ul>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#blogs" onClick={toggleMobileMenu}>Blogs</a></li>
            <li><a href="#plans" onClick={toggleMobileMenu}>Plans</a></li>
          </ul>
        </div>

        {/* E-book button on the right */}
        <div className="ebook-button">
          <button>Get free e-book!</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
