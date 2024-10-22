import React, { useEffect, useRef, useState } from 'react';
import './ImageSlider.css'; // Create this CSS for ImageSlider-specific styles

const images = [
  '/assets/unsplash1.png',
  '/assets/unsplash2.png',
  '/assets/unsplash3.png',
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.clientWidth * currentImageIndex,
        behavior: 'smooth',
      });
    }
  }, [currentImageIndex]);

  return (
    <div className="image-container" ref={scrollRef}>
      <div className="images-wrapper">
        {images.map((src, index) => (
          <div className="image-slide" key={index}>
            <img src={src} alt={`Image ${index + 1}`} className="banner-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
