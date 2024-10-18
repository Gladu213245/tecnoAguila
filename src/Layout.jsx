// src/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaUsers, FaMoneyCheckAlt, FaEnvelope, FaClipboardList, FaFileAlt } from 'react-icons/fa';
import { IconButton, Menu, MenuItem, Avatar } from '@mui/material';

const Layout = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  // Datos del usuario desde localStorage
  const username = localStorage.getItem('username') || 'Usuario';
  const userType = 'Administrador'; // Aquí puedes ajustar el tipo de usuario

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    navigate('/');
  };

  // Controlar el menú desplegable
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Cerrar sesión automáticamente después de 10 minutos de inactividad
  useEffect(() => {
    const timeoutDuration = 10 * 60 * 1000; // 10 minutos

    let timeout;

    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handleLogout();
      }, timeoutDuration);
    };

    // Escuchar eventos de interacción para detectar actividad
    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('keypress', resetTimeout);

    resetTimeout(); // Iniciar el timeout

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('keypress', resetTimeout);
    };
  }, [navigate]);

  return (
    <div className="layout">
      <nav className="navbar">
        {/* Ícono de la marca como botón */}
        <button className="icon-button" onClick={() => handleNavigation('/home')}>
          <img
            className="navbar-icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQya4Eqme0GTpz3oCRL5m64s-lqT_zINP4nbQ&s"
            alt="Icon"
          />
          <div className="icon-text">Tecno Desarrolladora Águila</div>
        </button>

        {/* Botones de navegación */}
        <button className="nav-button" onClick={() => handleNavigation('/home')}>
          <AiFillHome className="nav-icon" />
          Inicio
        </button>
        <button className="nav-button" onClick={() => handleNavigation('/asistencias')}>
          <FaClipboardList className="nav-icon" />
          Asistencias
        </button>
        <button className="nav-button" onClick={() => handleNavigation('/employees')}>
          <FaUsers className="nav-icon" />
          Empleados
        </button>
        <button className="nav-button" onClick={() => handleNavigation('/nuevo-archivo')}>
          <FaFileAlt className="nav-icon" />
          Nuevo Archivo
        </button>
        <button className="nav-button" onClick={() => handleNavigation('/nomina')}>
          <FaMoneyCheckAlt className="nav-icon" />
          Nómina
        </button>
        <button className="nav-button" onClick={() => handleNavigation('/contacto')}>
          <FaEnvelope className="nav-icon" />
          Contacto
        </button>

        {/* Menú desplegable del perfil */}
        <div className="profile-container">
          <IconButton onClick={handleMenuOpen}>
            <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem>{username}</MenuItem>
            <MenuItem>{userType}</MenuItem>
            <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
          </Menu>
        </div>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;











