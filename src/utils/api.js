// src/utils/api.js
import { refreshAccessToken } from './auth';

export const fetchWithAuth = async (url, options = {}) => {
  let accessToken = localStorage.getItem('access_token');

  if (!accessToken) {
    // Si no hay token, redirigir al login
    window.location.href = '/';
    return;
  }

  const authHeaders = {
    'Authorization': `Bearer ${accessToken}`,
    ...options.headers,
  };

  try {
    // Hacer la solicitud inicial con el token de acceso
    const response = await fetch(url, {
      ...options,
      headers: authHeaders,
    });

    // Si el token ha expirado, intentar renovarlo
    if (response.status === 401) {
      accessToken = await refreshAccessToken();

      if (accessToken) {
        const newAuthHeaders = {
          'Authorization': `Bearer ${accessToken}`,
          ...options.headers,
        };

        // Reintentar la solicitud con el nuevo token de acceso
        return await fetch(url, {
          ...options,
          headers: newAuthHeaders,
        });
      } else {
        // Si no se puede renovar el token, redirigir al login
        window.location.href = '/';
      }
    }

    return response;
  } catch (error) {
    console.error('Error en fetchWithAuth:', error);
    throw error;
  }
};