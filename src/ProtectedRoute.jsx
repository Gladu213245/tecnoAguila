import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);  // Si hay token, autenticado
    } else {
      setIsAuthenticated(false); // Si no hay token, no autenticado
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Cargando...</div>;  // Muestra un mensaje de carga mientras verifica el token
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;  // Redirige al inicio de sesión si no está autenticado
  }

  return children;
};

export default ProtectedRoute;









