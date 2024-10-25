import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`} ref={navbarRef}>
      <div className="navbar-content">
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#plans">Plans</a></li>
        </ul>
        <div className="ebook-button">
          <button>Get free e-book!</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
