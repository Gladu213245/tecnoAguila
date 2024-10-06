// src/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Asegúrate de que este archivo esté en la misma carpeta
import CarouselComponent from './CarouselComponent'; // Importamos el carrusel


const HomePage = () => {
    const navigate = useNavigate(); // Inicializa el hook useNavigate

    // Función para manejar la redirección
    const handleNavigation = (path) => {
      navigate(path); // Navega a la ruta especificada
    };

    const handleExternalLink = () => {
        window.location.href = "https://tecnoaguila.com.mx/"; // Redirige a la página externa
      };

    return (
        <div className="home-page">
            <CarouselComponent />
        </div>
    );
};

export default HomePage;
