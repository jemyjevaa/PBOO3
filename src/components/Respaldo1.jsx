import React from 'react';
import Sidebar from './Barra.jsx'; // Importa el componente Sidebar desde Barra.jsx
import Estadis from './Estadis.jsx'; // Importa el componente Estadis desde Estadis.jsx
import Estadis2 from './Estadis2.jsx'; // Importa el componente Estadis2 desde Estadis2.jsx;
import './Respaldo.css'; // Importa los estilos CSS para el componente Principal

const Reporte = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3 text-right">
        <h1 className="titulo">Historial De Respaldo</h1>
          <div className="table-responsive">
          <div className="tabla-container">

            <table className="table table-bordered tabla-alertas">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Hora</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
              
              
                <tr>
                  <td>0032</td>
                  <td>9:39 AM</td>
                  <td>2024-04-17</td>
                </tr>
                <tr>
                  <td>0302</td>
                  <td>12:45 AM</td>
                  <td>2024-04-16</td>
                </tr>
                 <tr>
                  <td>0120</td>
                  <td>13:25 AM</td>
                  <td>2024-04-15</td>
                </tr>
                
                <tr>
                  <td>1290</td>
                  <td>12:35 AM</td>
                  <td>2024-04-15</td>
                </tr>
                <tr>
                  <td>2303</td>
                  <td>13:15 AM</td>
                  <td>2024-04-14</td>
                </tr>
                <tr>
                  <td>7329</td>
                  <td>12:45 PM</td>
                  <td>2024-04-14</td>
                </tr>
                <tr>
                  <td>1920</td>
                  <td>13:15 AM</td>
                  <td>2024-04-13</td>
                </tr>
                <tr>
                  <td>3019</td>
                  <td>12:05 AM</td>
                  <td>2024-04-12</td>
                </tr>
                <tr>
                  <td>1338</td>
                  <td>11:45 PM</td>
                  <td>2024-04-12</td>
                </tr>
                
                

              </tbody>
            </table>
          </div>
        </div>
       
      </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Contenido principal de la aplicación */}
        </div>
      </div>
     
    </div>
  );
};

export default Reporte;
