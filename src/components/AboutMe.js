import React from 'react';
import './AboutMe.css'; // Create this CSS for AboutMe-specific styles

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <div className="card">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name], a passionate developer with a love for creating 
          beautiful and functional web experiences. I specialize in [your specialization] 
          and enjoy working on innovative projects. In my free time, I enjoy [your hobbies].
        </p>
        <div className="social-icons">
          <a href="https://www.instagram.com/workk_in.progress/profilecard/?igsh=MW5lNHdyZTlmdDc2MQ==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
