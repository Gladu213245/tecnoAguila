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
      <nav className="navbar">
      <button className="nav-button" onClick={() => handleNavigation('/')}>Inicio</button>
        <button className="nav-button" onClick={() => handleNavigation('/asistencias')}>Asistencias</button>
        <button className="nav-button" onClick={() => navigate('/employees')}>Empleados</button> 
        <button className="nav-button" onClick={() => handleNavigation('/nuevo-archivo')}>Nuevo Archivo</button>
        <button className="nav-button" onClick={() => handleNavigation('/nomina')}>Nómina</button>
         {/* Botón para redirigir a la página externa */}
         <button className="nav-button" onClick={handleExternalLink}>
          Contacto
        </button>
      </nav>
      <div className="content">
        {/* Aquí puedes añadir más contenido para la página de inicio */}
        <CarouselComponent />
      </div>
    </div>
  );
};

export default HomePage;
