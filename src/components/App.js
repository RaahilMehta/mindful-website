import React from 'react';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import AboutMe from './AboutMe';
import Blogs from './Blogs';
import Plans from './Plans';
import Reviews from './Reviews';
import Footer from './Footer'; // Import Footer component
import './App.css'; // Global styling

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
      <Footer /> {/* Add Footer at the end */}
    </div>
  );
}

export default App;
