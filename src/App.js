// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./components/Inicio";
import Inicio2 from "./components/Inicio2";

import Alertas from "./components/Alertas";

import Formulario from "./components/Formulario";
import Principal from "./components/Principal";
import Roberto from "./components/Roberto";
import Sesion from "./components/Sesion";
import Nosotros from "./components/Nosotros";
import Modal from "./components/Modal";
import TermCond from "./components/TermCond";
import Sidebar from './components/Barra.jsx';
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from "./components/Form4";
import Reporte from "./components/Reporte.jsx";
import Reporte1 from "./components/Reporte1.jsx";
import Mensajes  from "./components/Mensajes";
import Icono  from "./components/Icono";
import Estadis2  from "./components/Estadis2.jsx";
import Estadis  from "./components/Estadis.jsx";
import Respaldo from "./components/Respaldo.jsx";

import Admin from "./components/Admin.jsx";
import UserPanel from "./components/UserPanel";
import Servicios from "./components/Servicios";
import Brigada from "./components/Brigada";
import Soporte from "./components/Soporte";
import Mapa from "./components/Mapa";

const App = () => {
  return (
    <Router>
      <div>
        <hr />

        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/inicio2" element={<Inicio2 />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/Roberto" element={<Roberto />} />
          <Route path="/Sesion" element={<Sesion />} />
          <Route path="/Modal" element={<Modal />} />
          <Route path="/Barra" element={<Sidebar />} />
          <Route path="/Alertas" element={<Alertas />} />
          <Route path="/Respaldo" element={<Respaldo />} />

           <Route path="/Icono" element={<Icono />} />
          <Route path="/Principal" element={<Principal />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/TermCond" element={<TermCond />} />
          <Route path="/Mensajes" element={<Mensajes/>} />
          <Route path="/Reporte" element={<Reporte/>} />
          <Route path="/Reporte1" element={<Reporte1/>} />
          <Route path="/Form1" element={<Form1 />} />
          <Route path="/Form2" element={<Form2 />} />
          <Route path="/Form3" element={<Form3 />} />
          <Route path="/Form4" element={<Form4 />} />
          <Route path="/UserPanel" element={<UserPanel />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Brigada" element={<Brigada />} />
          <Route path="/Soporte" element={<Soporte />} />
          <Route path="/Mapa" element={<Mapa />} />
          <Route path="/Estadis2" element={<Estadis2 />} />
          <Route path="/Estadis" element={<Estadis />} />
          <Route path="/Admin" element={<Admin />} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;
