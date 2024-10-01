import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import EmployeeForm from './EmployeeForm';  // Asegúrate de que esto esté aquí

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/employees" element={<EmployeeForm />} /> {/* Esta es la ruta para el formulario */}
      </Routes>
    </Router>
  );
}

export default App;
