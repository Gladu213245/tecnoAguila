// src/Layout.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './styles.css';
import { AiFillHome } from 'react-icons/ai';
import { FaUsers, FaMoneyCheckAlt, FaEnvelope, FaClipboardList, FaFileAlt } from 'react-icons/fa';

const Layout = () => {
    const navigate = useNavigate();

    // Función para manejar la redirección
    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleExternalLink = () => {
        window.location.href = "https://tecnoaguila.com.mx/";
    };

    return (
        <div className="layout">
            <nav className="navbar">
                {/* Ícono de la marca como botón */}
                <button className="icon-button" onClick={() => handleNavigation('/')}>
                    <img
                        className="navbar-icon"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQya4Eqme0GTpz3oCRL5m64s-lqT_zINP4nbQ&s"
                        alt="Icon"
                    />
                    <div className="icon-text">Tecno Desarrolladora Águila</div>
                </button>

                {/* Botón Inicio con ícono */}
                <button className="nav-button" onClick={() => handleNavigation('/')}>
                    <AiFillHome className="nav-icon" />
                    Inicio
                </button>

                {/* Botón Asistencias con ícono */}
                <button className="nav-button" onClick={() => handleNavigation('/asistencias')}>
                    <FaClipboardList className="nav-icon" />
                    Asistencias
                </button>

                {/* Botón Empleados con ícono */}
                <button className="nav-button" onClick={() => handleNavigation('/employees')}>
                    <FaUsers className="nav-icon" />
                    Empleados
                </button> 

                {/* Botón Nuevo Archivo con ícono */}
                <button className="nav-button" onClick={() => handleNavigation('/nuevo-archivo')}>
                    <FaFileAlt className="nav-icon" />
                    Nuevo Archivo
                </button>

                {/* Botón Nómina con ícono */}
                <button className="nav-button" onClick={() => handleNavigation('/nomina')}>
                    <FaMoneyCheckAlt className="nav-icon" />
                    Nómina
                </button>

                {/* Botón Contacto con ícono */}
                <button className="nav-button" onClick={handleExternalLink}>
                    <FaEnvelope className="nav-icon" />
                    Contacto
                </button>
            </nav>
            <div className="content">
                <Outlet /> {/* Renderiza el componente correspondiente a la ruta */}
            </div>
        </div>
    );
};

export default Layout;
