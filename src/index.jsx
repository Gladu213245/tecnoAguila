import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Llamamos al componente principal del proyecto
import './styles.css';        // Estilos globales
import 'bootstrap/dist/css/bootstrap.min.css';


// Montamos la aplicación dentro del elemento con id "root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  {/* Aquí llamamos al componente principal que organiza el proyecto */}
  </StrictMode>
);
