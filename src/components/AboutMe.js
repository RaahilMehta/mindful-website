import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <div className="card">
        <div className="about-me-container">
          <img src="/assets/Profile.jpg" alt="Profile" className="profile-pic" />
          <div className="about-me-content">
            <h2>About Me</h2>
            <p>
              Hi there, thanks for stopping by. My name is Kajal Jha, and I started <span className="gradient-text">workk_in.progress</span> with a vision to bring mindfulness and meditation to schools, colleges, and corporates. I was a troubled and anxious child; for years, I was just breathing, not living.
              <br /><br />
              If you’re wondering, what? Well, breathing and living aren’t the same thing.Breathing is a simple process of taking up O2 and releasing CO2, but living means being available for this life.<br></br><br></br>Through Mindfulness and Meditation I have finally understood how to be available for life. It’s not about life will not throw lemons at you, but it simply means that it won’t bother you much. A simple realization that we don’t suffer because of the situation, but our perception, and attachment to it. But, the ‘Happy News’ is we can learn it anyday. ‘You can start now’.
But one thing still bothers me that these skills should be our foundation, and taught in schools. So, here I am ready to take it on me, and let the era of transformation begin.

            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/workk_in.progress/profilecard/?igsh=MW5lNHdyZTlmdDc2MQ==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/@workk_in.progress?si=GoTXS10RihL64fs2" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://littlemaytheuniverse.wordpress.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-wordpress"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
