import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <div className="card">
        <img src="/assets/Profile.png" alt="Profile" className="profile-pic" />
        <h2>About Me</h2>
        <p>
          Hi there, thanks for stopping by. My name is Kajal Jha, and I started <span className="gradient-text">workk_in.progress</span> with a vision to bring mindfulness and meditation to schools, colleges, and corporates. I was a troubled and anxious child; for years, I was just breathing, not living.
          <br /><br />
          If you’re wondering, what? Well, breathing and living aren’t the same thing. Breathing is a simple process of taking up O2 and releasing CO2, but living means being available for this life. Through Mindfulness and Meditation, I have finally understood how to be available for life. It’s not about life will not throw lemons at you, but it simply means that it won’t bother you much. A simple realization that we don’t suffer because of the situation, but our perception and attachment to it. But the ‘Happy News’ is we can learn it any day. ‘You can start now’.
          <br /><br />
          But one thing still bothers me, that these skills should be our foundation, and taught in schools. So, here I am ready to take it on me, and let the era of transformation begin.
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
