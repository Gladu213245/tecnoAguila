// src/UserProfile.jsx
import React, { useEffect, useState } from "react";
import { fetchWithAuth } from './utils/api'; // Importa la función que maneja la autenticación

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fetchUserData = async () => {
    try {
      const response = await fetchWithAuth('http://127.0.0.1:8000/api/auth/user/', {
        method: 'GET',
      });

      const data = await response.json();

      if (response.ok) {
        setUserData(data);
      } else {
        setError('No se pudo obtener la información del usuario.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Ocurrió un error al obtener los datos del usuario.');
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!userData) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <p><strong>Nombre de Usuario:</strong> {userData.username}</p>
      {/* Añade más campos según la información que devuelva tu API */}
    </div>
  );
};

export default UserProfile;
