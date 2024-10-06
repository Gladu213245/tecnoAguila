import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Llamamos al componente principal del proyecto
import './styles.css';        // Estilos globales
import 'bootstrap/dist/css/bootstrap.min.css';


// Montamos la aplicación dentro del elemento con id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
