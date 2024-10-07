// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Layout from './Layout';
import HomePage from './HomePage';
import Asistencias from './Asistencias';
import EmployeeForm from './EmployeeForm';
import NuevoArchivo from './NuevoArchivo';
import Nomina from './Nomina';
import Contacto from './Contacto';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta Principal para Login */}
        <Route path="/" element={<LoginPage />} />

          {/* Rutas Envuelta en Layout */}
          <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="asistencias" element={<Asistencias />} />
          <Route path="employees" element={<EmployeeForm />} />
          <Route path="nuevo-archivo" element={<NuevoArchivo />} />
          <Route path="nomina" element={<Nomina />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>

        {/* Ruta por Defecto: Redirigir a Login si la ruta no coincide */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;




