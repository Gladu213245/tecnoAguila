// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Layout from './Layout';
import HomePage from './HomePage';
import Asistencias from './Asistencias';
import EmployeeForm from './EmployeeForm';
import NuevoArchivo from './NuevoArchivo';
import Nomina from './Nomina';
import Contacto from './Contacto';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta pública: Página de inicio de sesión */}
        <Route path="/" element={<LoginPage />} />

        {/* Rutas protegidas: Solo accesibles para usuarios autenticados */}
        <Route
          path="/user"
          element={<ProtectedRoute><Layout /></ProtectedRoute>}
        >
          <Route path="home" element={<HomePage />} />
          <Route path="asistencias" element={<Asistencias />} />
          <Route path="employees" element={<EmployeeForm />} />
          <Route path="nuevo-archivo" element={<NuevoArchivo />} />
          <Route path="nomina" element={<Nomina />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>

        {/* Ruta por defecto: Redirigir al login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;









