// src/LoginPage.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';
import "./styles.css"; // Asegúrate de que el nombre del archivo es correcto

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Puedes agregar lógica adicional aquí si lo deseas
    navigate('/home'); // Redirige al home después de "iniciar sesión"
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="button" className="login-button" onClick={handleLogin}>Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;



