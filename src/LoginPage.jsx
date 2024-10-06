import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación real
    // Por ahora, simularemos una autenticación exitosa
    navigate('/');
  };

  return (
    <div className="login-page">
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="submit-button">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginPage;


