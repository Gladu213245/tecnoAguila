// src/LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar los tokens del almacenamiento local
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');

    // Redirigir al usuario a la página de inicio de sesión
    navigate('/');
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
