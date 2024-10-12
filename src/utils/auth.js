// src/utils/auth.js

export const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/token/refresh/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('access_token', data.access);
        return data.access;
      } else {
        // El token de refresco también ha expirado o es inválido
        // Redirigir al usuario a la página de inicio de sesión
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error:', error);
      // Manejar el error según tus necesidades
    }
  };
  