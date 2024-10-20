// src/utils/auth.js
export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');

  if (!refreshToken) {
    // Si no hay token de refresco, redirigir al login
    window.location.href = '/';
    return null;
  }

  try {
    const response = await fetch('http://127.0.0.1:8000/api/auth/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('access_token', data.access); // Actualizar el token
      return data.access;
    } else {
      // Si el token de refresco también expira o es inválido
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      window.location.href = '/';
      return null;
    }
  } catch (error) {
    console.error('Error al renovar el token de acceso:', error);
    window.location.href = '/';
    return null;
  }
};




  