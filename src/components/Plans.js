import React, { useState, useEffect } from 'react';
import './Plans.css'; // Make sure to import the CSS file
import Lottie from 'lottie-react'; // Import the Lottie component
import { AiOutlineCalendar } from 'react-icons/ai'; // Import the calendar icon from React Icons

const Plans = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the animation data from the public/assets folder
    fetch(`${process.env.PUBLIC_URL}/assets/AnimatedPlantLoader.json`)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading Lottie animation:', error));
  }, []);

  return (
    <section className="plans-section" id="plans"> {/* Add id="plans" here */}
      {/* Lottie Animation at the Top */}
      {animationData && (
        <div className="lottie-animation">
          <Lottie 
            animationData={animationData} 
            loop={true} 
            style={{ width: '300px', height: '200px' }} 
          />
        </div>
      )}
      
      <h2></h2> {/* Add a heading for the section */}
      <div className="plans-container" id="plansss">
        <div className="plan-card popular">
          <span className="tag">Popular</span>
          <h3>Basic Plan</h3>
          <div className="price">
            <AiOutlineCalendar className="calendar-icon" />
            <div>
              <span className="old-price">$10</span> 
              <span className="new-price">$8/month</span>
            </div>
          </div>
        </div>
        <div className="plan-card">
          <h3>Standard Plan</h3>
          <div className="price">
            <AiOutlineCalendar className="calendar-icon" />
            <div>
              <span className="old-price">$20</span> 
              <span className="new-price">$18/month</span>
            </div>
          </div>
        </div>
        <div className="plan-card">
          <h3>Premium Plan</h3>
          <div className="price">
            <AiOutlineCalendar className="calendar-icon" />
            <div>
              <span className="old-price">$30</span> 
              <span className="new-price">$27/month</span>
            </div>
          </div>
        </div>
        <div className="plan-card">
          <h3>Pro Plan</h3>
          <div className="price">
            <AiOutlineCalendar className="calendar-icon" />
            <div>
              <span className="old-price">$40</span> 
              <span className="new-price">$36/month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
