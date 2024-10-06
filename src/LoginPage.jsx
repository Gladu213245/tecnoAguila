// src/LoginPage.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';
import "./styles.css"; // Importamos el archivo de estilos actualizado

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación real (validaciones, llamadas a API, etc.)
    onLogin(); // Cambia el estado de autenticado en App
    navigate('/'); // Redirige al home
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;



