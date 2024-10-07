// src/HomePage.jsx
import React from 'react';
import './styles.css';
import CarouselComponent from './CarouselComponent';

const HomePage = () => {
  return (
    <div className="home-page">
      <CarouselComponent />
      {/* Otros contenidos de la página de inicio */}
    </div>
  );
};

export default HomePage;


