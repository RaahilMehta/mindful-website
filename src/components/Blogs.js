import React, { useRef } from 'react';
import './Blogs.css'; // Create this CSS for Blogs-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const blogs = [
  {
    image: '/assets/blog1.webp',
    title: 'THE THEORY OF +, – and 0.',
    // description: 'THE THEORY OF +, – and 0.',
    link: 'https://littlemaytheuniverse.wordpress.com/2021/01/04/the-theory-of-and-0/',
  },
  {
    image: '/assets/blog2.webp',
    title: 'BLAME GAME – WORST ENEMY!!',
    // description: 'BLAME GAME – WORST ENEMY!!',
    link: 'https://littlemaytheuniverse.wordpress.com/2021/07/09/blame-game-worst-enemy/',
  },
  {
    image: '/assets/blog3.png',
    title: 'THE UNATTENDED LOVE!!',
    // description: 'THE UNATTENDED LOVE!!',
    link: 'https://littlemaytheuniverse.wordpress.com/2021/05/20/the-unattended-love/',
  },
];

const Blogs = () => {
  const blogScrollRef = useRef(null);

  const scrollBlogs = (direction) => {
    if (blogScrollRef.current) {
      const scrollAmount = blogScrollRef.current.clientWidth * direction;
      blogScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="blogs-section" id="blogs">
      <h2>Blogs</h2>
      {/* <button className="scroll-button" onClick={() => scrollBlogs(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button> */}
      <div className="blogs-container" ref={blogScrollRef}>
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
      {/* <button className="scroll-button" onClick={() => scrollBlogs(1)}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button> */}
    </div>
  );
};

export default Blogs;
