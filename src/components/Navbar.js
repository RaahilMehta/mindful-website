import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css'; // Create this CSS for Navbar-specific styles

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
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#blogsss">Blogs</a></li>
        <li><a href="#plans">Plans</a></li> {/* Link to Plans Section */}
        <li><a href="#plans">  </a></li>
      </ul>
    </div>
  );
};

export default Navbar;
