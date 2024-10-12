// src/utils/api.js
import { refreshAccessToken } from './auth';

export const fetchWithAuth = async (url, options = {}) => {
  let accessToken = localStorage.getItem('access_token');
  console.log("Token de acceso actual:", accessToken);

  const authHeaders = {
    'Authorization': `Bearer ${accessToken}`,
    ...options.headers,
  };

  try {
    console.log("Realizando solicitud a:", url);
    let response = await fetch(url, {
      ...options,
      headers: authHeaders,
    });

    console.log("Respuesta de la solicitud:", response);

    if (response.status === 401) {
      console.log("Token expirado. Intentando renovar...");
      accessToken = await refreshAccessToken();

      if (accessToken) {
        console.log("Nuevo token de acceso:", accessToken);
        const newAuthHeaders = {
          'Authorization': `Bearer ${accessToken}`,
          ...options.headers,
        };

        console.log("Reintentando solicitud con nuevo token...");
        response = await fetch(url, {
          ...options,
          headers: newAuthHeaders,
        });
      }
    }

    return response;
  } catch (error) {
    console.error('Error en fetchWithAuth:', error);
    throw error;
  }
};

