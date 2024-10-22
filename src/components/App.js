import React from 'react';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import AboutMe from './AboutMe';
import Blogs from './Blogs';
import './App.css'; // Global styling
import Plans from './Plans';
import Reviews from './Reviews';

function App() {
  return (
    <div className="app">
      <ImageSlider />
      <Navbar />
      <AboutMe />
      
      {/* Apply background image only to the Blogs section */}
      <div 
        className="blogs-background" id="blogsss"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Thumbnail.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Blogs />
      </div>
      
      <Plans />
      <Reviews />
    </div>
  );
}

export default App;
