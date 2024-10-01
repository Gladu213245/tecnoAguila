import React from 'react';
import './styles.css';

const EmployeeForm = () => {
  return (
    <div className="employee-form-container">
      <h2>Registro De Empleados</h2>
      <form className="employee-form-horizontal">
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

        {/* Campo de selección de género */}
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

