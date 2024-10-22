import React, { useRef } from 'react';
import './Blogs.css'; // Create this CSS for Blogs-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const blogs = [
  {
    image: '/assets/blog1.png',
    title: 'Blog Post 1',
    description: 'This is a short description of the first blog post.',
    link: 'https://example.com/blog1',
  },
  {
    image: '/assets/blog2.png',
    title: 'Blog Post 2',
    description: 'This is a short description of the second blog post.',
    link: 'https://example.com/blog2',
  },
  {
    image: '/assets/blog3.png',
    title: 'Blog Post 3',
    description: 'This is a short description of the third blog post.',
    link: 'https://example.com/blog3',
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
