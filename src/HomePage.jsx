// src/HomePage.jsx
import React from 'react';
import './styles.css';
import CarouselComponent from './CarouselComponent';

/**
 * HomePage es la página de inicio que se muestra después de que el usuario ha iniciado sesión.
 *
 * @returns {React.ReactNode} - Contenido de la página de inicio.
 */
const HomePage = () => {
  return (
    <div className="home-page">
      <CarouselComponent />
      {/* Otros contenidos de la página de inicio */}
    </div>
  );
};

export default HomePage;



