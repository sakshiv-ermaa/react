import React, { useEffect, useState } from "react";
import "../../styles/loader.css";

// loader.jsx



const Loader = () => {
  useEffect(() => {
    // Hide loader when page finishes loading
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.classList.add('fade-out');
      }
    });
  }, []);

  return (
    <div id="loader">
      <video autoplay muted loop playsinline>
        <source src="857263-hd_1920_1080_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="loader-content">
        <div className="car-container">
          <img className="car" src="path/to/your/car.png" alt="Car" />
        </div>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loader;