// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Layout from './Layout';
import UserProfile from './UserProfile';
import LogoutButton from './LogoutButton';
import HomePage from './HomePage';
import Asistencias from './Asistencias';
import EmployeeForm from './EmployeeForm';
import NuevoArchivo from './NuevoArchivo';
import Nomina from './Nomina';
import Contacto from './Contacto';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './ProtectedRoute';

/**
 * App es el componente principal de la aplicación que define las rutas y su estructura.
 *
 * @returns {React.ReactNode} - Estructura de rutas de la aplicación.
 */
function App() {
  return (
    // Router envuelve toda la aplicación para manejar la navegación
    <Router>
      <Routes>
        {/* Ruta Pública: Página de Inicio de Sesión */}
        <Route path="/" element={<LoginPage />} />

        {/* Rutas Protegidas: Solo accesibles para usuarios autenticados */}
        <Route
          path="/user"
          element={
            // ProtectedRoute verifica la autenticación antes de renderizar Layout
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {/* Rutas Hijas dentro de Layout */}
          <Route path="home" element={<HomePage />} />
          <Route path="asistencias" element={<Asistencias />} />
          <Route path="employees" element={<EmployeeForm />} />
          <Route path="nuevo-archivo" element={<NuevoArchivo />} />
          <Route path="nomina" element={<Nomina />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>

        {/* Ruta por Defecto: Redirigir a Login si la ruta no coincide */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;





