import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import './Reviews.css';

const Reviews = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/assets/reviewAnimation.json`)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading Lottie animation:', error));
  }, []);

  const reviews = [
    {
      name: 'John Doe',
      date: 'October 1, 2023',
      review: 'Great product! Really improved my workflow and made my day more productive!',
    },
    {
      name: 'Jane Smith',
      date: 'September 28, 2023',
      review: 'Absolutely love this! Super easy to use and highly recommend it.',
    },
    {
      name: 'Samuel Green',
      date: 'September 25, 2023',
      review: 'Fantastic experience! Customer support was very helpful and responsive.',
    },
    
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="lottie-container">
          {animationData && <Lottie animationData={animationData} loop={true} />}
        </div>

        <div className="reviews-content">
          <h2>What My Customers Say</h2>
          <div className="reviews-list">
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="review-header">
                  <h3 className="review-name">{review.name}</h3>
                  <span className="review-date">{review.date}</span>
                </div>
                <p className="review-text">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
