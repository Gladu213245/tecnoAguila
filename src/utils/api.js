// src/utils/api.js
import { refreshAccessToken } from './auth';

export const fetchWithAuth = async (url, options = {}) => {
  let accessToken = localStorage.getItem('access_token');
  console.log('Acceso Token inicial:', accessToken);

  if (!accessToken) {
    // Si no hay token, redirigir al login
    console.log('No hay token de acceso, redirigiendo al login');
    window.location.href = '/';
    return;
  }

  const authHeaders = {
    'Authorization': `Bearer ${accessToken}`,
    ...options.headers,
  };

  try {
    console.log('Haciendo solicitud con token:', accessToken);
    // Hacer la solicitud inicial con el token de acceso
    const response = await fetch(url, {
      ...options,
      headers: authHeaders,
    });

    console.log('Respuesta del servidor:', response.status);

    // Si el token ha expirado (error 401), intentar renovarlo
    if (response.status === 401) {
      console.log('El token ha expirado, intentando refrescar el token');
      accessToken = await refreshAccessToken();

      if (accessToken) {
        console.log('Nuevo token de acceso:', accessToken);
        const newAuthHeaders = {
          'Authorization': `Bearer ${accessToken}`,
          ...options.headers,
        };

        return await fetch(url, {
          ...options,
          headers: newAuthHeaders,
        });
      } else {
        console.log('No se pudo renovar el token, redirigiendo al login');
        window.location.href = '/';
      }
    }

    return response;
  } catch (error) {
    console.error('Error en fetchWithAuth:', error);
    throw error;
  }
};

