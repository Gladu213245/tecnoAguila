// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout'; // Layout para rutas privadas
import HomePage from './HomePage';
import EmployeeForm from './EmployeeForm';
import Asistencias from './Asistencias';
import NuevoArchivo from './NuevoArchivo';
import Nomina from './Nomina';
import Contacto from './Contacto';
import LoginPage from './LoginPage'; // Ruta pública

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manejo del estado de autenticación

  // Función para manejar la autenticación
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Ruta Pública para Login */}
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        {/* Rutas Privadas */}
        <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" replace />}>
          <Route index element={<HomePage />} />
          <Route path="asistencias" element={<Asistencias />} />
          <Route path="employees" element={<EmployeeForm />} />
          <Route path="nuevo-archivo" element={<NuevoArchivo />} />
          <Route path="nomina" element={<Nomina />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>

        {/* Ruta por Defecto: Redirigir a Login si la ruta no coincide */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;



