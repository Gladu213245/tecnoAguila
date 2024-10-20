// src/EmployeeForm.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchWithAuth } from './utils/api'; // Importamos fetchWithAuth
import './styles.css';

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);  // Agregar estado de carga
  const navigate = useNavigate();  // Para redirigir al login si es necesario

  // Función para obtener los datos de los empleados
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        console.log('Haciendo solicitud para obtener datos de empleados');
        
        // Realizamos la solicitud protegida con fetchWithAuth
        const response = await fetchWithAuth('http://127.0.0.1:8000/api/v1/registro/', {
          method: 'GET',
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Datos de empleados obtenidos:', data);
          setEmployeeData(data);
        } else if (response.status === 401) {
          console.log('Error de autenticación, redirigiendo al login');
          setError('No estás autorizado. Inicia sesión de nuevo.');
          navigate('/');
        } else {
          console.log('Error obteniendo los datos de empleados:', response.status);
          setError('Error al obtener los datos del empleado.');
        }
      } catch (error) {
        setError('Error en la solicitud. Inténtalo más tarde.');
        console.error('Error en la solicitud:', error);
      } finally {
        setLoading(false);  // Detener la carga cuando se completan las llamadas
      }
    };

    fetchEmployeeData();  // Llamamos a la función para obtener los datos
  }, [navigate]);

  if (loading) {
    return <p>Cargando datos...</p>;  // Muestra un estado de carga mientras se obtienen los datos
  }

  return (
    <div className="employee-form-container">
      <h2>Datos del Empleado</h2>

      {error && <p className="error">{error}</p>}

      {employeeData.length > 0 ? (
        <ul>
          {employeeData.map((employee) => (
            <li key={employee.id}>
              <p><strong>Nombre:</strong> {employee.Nombre}</p>
              <p><strong>Apellido Paterno:</strong> {employee.Apellidos}</p>
              <p><strong>Teléfono:</strong> {employee.Telefono}</p>
              <p><strong>Correo Electrónico:</strong> {employee.Correo}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay datos de empleados disponibles.</p>
      )}

      <form className="employee-form-horizontal">
        {/* Formulario para crear o editar empleados */}
        <div className="input-group-horizontal">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
          <input type="text" id="apellidoPaterno" name="apellidoPaterno" />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="apellidoMaterno">Apellido Materno:</label>
          <input type="text" id="apellidoMaterno" name="apellidoMaterno" />
        </div>

        <div className="input-group">
          <label>Género:</label>
          <div className="gender-options">
            <label>
              <input type="radio" name="genero" value="hombre" required />
              Hombre
            </label>
            <label>
              <input type="radio" name="genero" value="mujer" required />
              Mujer
            </label>
          </div>
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="edad">Edad:</label>
          <input type="number" id="edad" name="edad" />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input type="email" id="correo" name="correo" />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="fechaContratacion">Fecha de Contratación:</label>
          <input type="date" id="fechaContratacion" name="fechaContratacion" />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="curp">CURP:</label>
          <input type="text" id="curp" name="curp" required />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="nss">NSS:</label>
          <input type="text" id="nss" name="nss" required />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="ine">INE:</label>
          <input type="text" id="ine" name="ine" required />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="rfc">RFC:</label>
          <input type="text" id="rfc" name="rfc" required />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="puesto">Puesto:</label>
          <input type="text" id="puesto" name="puesto" required />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="certificacionSeguridad">Certificación de Seguridad:</label>
          <input type="text" id="certificacionSeguridad" name="certificacionSeguridad" required />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="especialidad">Especialidad:</label>
          <input type="text" id="especialidad" name="especialidad" required />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="experiencia">Experiencia (años):</label>
          <input type="number" id="experiencia" name="experiencia" required />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="SUELDO">Sueldo:</label>
          <input type="number" id="SUELDO" name="SUELDO" required />
        </div>

        <div className="input-group-horizontal">
          <label htmlFor="cargo">Cargo</label>
          <select id="cargo" name="cargo">
            <option value="Super Administrador">Super Administrador</option>
            <option value="Administrador">Administrador</option>
            <option value="Administrador de operaciones">Administrador de operaciones</option>
            <option value="Usuario">Usuario</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default EmployeeForm;





