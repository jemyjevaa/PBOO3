// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import Sesion from "./components/Sesion";
import Nosotros from "./components/Nosotros";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from "./components/Form4";




const App = () => {
  return (
    <Router>
      <div>
        <hr />

        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/Sesion" element={<Sesion />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Form1" element={<Form1 />} />
          <Route path="/Form2" element={<Form2 />} />
          <Route path="/Form3" element={<Form3 />} />
          <Route path="/Form4" element={<Form4 />} />


           


        </Routes>
      </div>
    </Router>
  );
};


export default App;
