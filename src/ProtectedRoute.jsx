// src/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute es un componente que envuelve otras rutas y verifica
 * si el usuario está autenticado antes de permitir el acceso.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Elemento(s) React que se renderizarán si el usuario está autenticado.
 * @returns {React.ReactNode} - El componente hijo si está autenticado, de lo contrario, redirige al login.
 */
const ProtectedRoute = ({ children }) => {
  // Obtener el token de acceso almacenado en localStorage
  const token = localStorage.getItem('access_token');

  // Si no hay token, redirigir al usuario a la página de inicio de sesión
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Si hay un token, permitir el acceso a las rutas protegidas
  return children;
};

export default ProtectedRoute;
