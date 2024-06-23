import React, { useState, useEffect } from "react";
import logo from "../../src/assets/images/logo.png";
import img from "../../src/assets/images/robot2.png";
import { CSSTransition } from "react-transition-group"; // Importa CSSTransition
import "./trans.css"; 
import { useNavigate, useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import Button from "./Form2";

const Formulario = () => {

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({}); 
  const location = useLocation();




  const handleSubmit = () => {
    if (!password || !correo){
      console.log("campos vacíos");
    }

    const formData = {correo, password}
    try{
      navigate("/Form1", {state: formData});
    }catch(error){
     console.log("error", error);
    }


  }
  useEffect(() => {
    window.scrollTo(0, 0);
    if(location.state){
      const formDataFromLocation = location.state.formData;
      setCorreo(formDataFromLocation?.correo || "");
      setPassword(formDataFromLocation?.password || "");
      setFormData(formDataFromLocation);

    } // Mueve la página hacia la parte superior cuando se monta el componente
  }, []);
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const Button = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className="Button"
        style={{
          width: 370,
          height: 50,
          background: isHovered ? "#002761" : "#fff", // Cambiado el color del fondo basado en el estado hovered
          color: isHovered ? "#FFFFFF" : "#000000",
          border: "0.5px solid #425466", /* Define el grosor y el color del borde */
          borderRadius: 10,
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: 14,
          fontFamily: "Arial",
          fontWeight: "700",
          wordWrap: "break-word",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginRight: 10,
          transition: "background 0.5s, color 0.5s",
          textDecoration: "none", // Evitar la línea debajo del texto como un enlace
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href="/Inicio2"
          style={{
            textDecoration: "none",
            color: isHovered ? "#FFFFFF" : "#000000",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </a>
      </div>
    );
  };
  
  class Rectangle extends React.Component {
    render() {
      const { width, height, color } = this.props;
      const rectangleStyle = {
        width: width,
        height: height,
        backgroundColor: color,
        border: "1px solid #000", // Puedes ajustar el estilo del borde según tus necesidades
      };

      return <div style={rectangleStyle}></div>;
    }
  }

  const handlePlaceOfBirthChange = (event) => {
    setPlaceOfBirth(event.target.value);
  };
  const [accepted, setAccepted] = useState(false);

  const toggleAcceptance = () => {
    setAccepted(!accepted);
  };
  const CustomButton = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="Button"
        style={{
          width: 150,
          height: 50,
          background: isHovered ? "#4AB3CA" : "#fff", // Cambiado el color del fondo basado en el estado hovered
          color: isHovered ? "#FFFFFF" : "#000000",
          border: "0.5px solid #425466", /* Define el grosor y el color del borde */
          borderRadius: 10,
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: 14,
          fontFamily: "Arial",
          fontWeight: "700",
          wordWrap: "break-word",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginRight: 10,
          transition: "background 0.3s, color 0.3s",
          textDecoration: "none", // Evitar la línea debajo del texto como un enlace
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href="/crear-cuenta"
          style={{
            textDecoration: "none",
            color: isHovered ? "#FFFFFF" : "#000000",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </a>
      </div>
    );
  };
  return (
    <CSSTransition in={true} appear={true} classNames="fade" timeout={300}>

      <div>
            <img
              style={{
                position: "absolute",
                paddingTop: 30,
                top: "calc(2% + 3px)",
                right: 1290,
                width: "3%",
                height: "auto",
              }}
              src={logo}
              alt="logo"
            />
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
          style={{
            width: 2558.12,
            paddingBottom: 4.48,
            left: 295.88,
            top: 34.72,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            gap: 165.38,
            display: "inline-flex",
          }}
        >
       

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to="/inicio" style={{ textDecoration: "none" }}>
              <CustomButton>Salir</CustomButton>
           </Link>
          </div>

          <div
            style={{
              width: 388.12,
              height: 44.8,
              position: "relative",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 180,
                height: 44.8,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 150,
                  height: 13.8,
                  position: "relative",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "flex",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 374.88,
            height: 60.48,
            left: 36,
            top: 25.76,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              paddingTop: 8,
              paddingBottom: 10.72,
              paddingLeft: 69.75,
              paddingRight: 41.12,
              justifyContent: "flex-end",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#302F2F",
                fontSize: 36,
                fontFamily: "Arial",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              <a
                href="/Inicio"
                style={{ textDecoration: "none", color: "#302F2F" }}
              >
                PBOO
              </a>
            </div>
          </div>
        </div>
        </div>

        <br />
        <br />
        <br />
        
        <div
  style={{
    width: "50%",
    margin: "0 auto", // Esto centra el contenedor horizontalmente
    border: "none", // Establece el borde del contenedor
    padding: "20px", // Añade espacio interno al contenedor
    marginRight: "150px", // Mueve el contenedor hacia la derecha

  }}
>
  <div style={{ width: "100%" }}>
    <br />
    <div style={{ width: "50%" }}>
      <div
        className="SubTitle"
        style={{
          color: "#27272E",
          fontSize: 28,
          fontFamily: "Arial",
          alignItems: "center",
          fontWeight: 600,
          lineHeight: 2.5,
          textAlign: "center", // Centra el texto horizontalmente
          wordWrap: "break-word",
        }}
      >
        Crear cuenta
      </div>
    </div>
    <div
      className="FormTitle"
      style={{
        color: "#425466",
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: 500,
        lineHeight: 5.5,
        wordWrap: "break-word",
      }}
    >
      Nombre(s)
    </div>
    <div
      className="Input"
      style={{
        width: "50%",
        background: "#EDF2F7",
        borderRadius: 6,
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        marginBottom: 10,
      }}
    >
      <input
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}className="Control"
        style={{
          flex: 1,
          height: 40,
          padding: "0 10px",
          border: "none",
          background: "#EDF2F7",
          color: "#7A828A",
          fontSize: 14,
          fontFamily: "Arial",
          fontWeight: 500,
        }}
        type="text"
        placeholder="Ingresa un nombre"
      />
    </div>
    <div
      className="FormTitle"
      style={{
        color: "#425466",
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: 500,
        lineHeight: 3.5,
        wordWrap: "break-word",
      }}
    >
      Correo electronico
    </div>
    <div
      className="Input"
      style={{
        width: "50%",
        background: "#EDF2F7",
        borderRadius: 6,
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        marginBottom: 10,
      }}
    >
      <input
        className="Control"
        style={{
          flex: 1,
          height: 40,
          padding: "0 10px",
          border: "none",
          background: "#EDF2F7",
          color: "#7A828A",
          fontSize: 14,
          fontFamily: "Arial",
          fontWeight: 500,
        }}
        type="email"
        placeholder="Ingresa tu Correo"
      />
    </div>
    <div>
  <div
    className="FormTitle"
    style={{
      color: "#425466",
      fontSize: 14,
      fontFamily: "Arial",
      fontWeight: 500,
      lineHeight: 3.5,
      wordWrap: "break-word",
    }}
  >
    Contraseña
  </div>
  <div
    className="Input"
    style={{
      width: "50%",
      background: "#EDF2F7",
      borderRadius: 6,
      justifyContent: "flex-start",
      alignItems: "center",
      display: "flex",
      marginBottom: 10,
    }}
  >
    <input
   value={password}
   onChange={(e) => setPassword(e.target.value)} 
      className="Control"
      style={{
        flex: 1,
        height: 40,
        padding: "0 10px",
        border: "none",
        background: "#EDF2F7",
        color: "#7A828A",
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: 500,
      }}
      type="password"
      placeholder="Ingresa tu Contraseña"
    />
  </div>
</div>
<div
  className="FormTitle"
  style={{
    color: "#425466",
    fontSize: 12, // Tamaño de letra más pequeño
    fontFamily: "Arial",
    fontWeight: 500,
    marginLeft: "34%", // Mueve el texto a la derecha
    transform: "translateX(-50%)", // Centra el texto horizontalmente
  }}
>
  Mínimo 8 Caracteres
</div>
</div>

  <div>
    <br />
    <p>
      <input
        type="checkbox"
        checked={accepted}
        onChange={toggleAcceptance}
      />
      Estoy de acuerdo con los{" "}
      <a href="/TermCond">
      <label
        style={{ cursor: "pointer", textDecoration: "underline" }}
      >
        Términos y Condiciones
      </label>
    </a>
    </p>
    {accepted && (
      <div style={{ marginTop: "10px" }}>
        ¡Gracias por aceptar los términos y condiciones!
      </div>
    )}
  </div>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginTop: 20,
    }}
  >
    <div style={{ display: "flex" }}>
        <button onClick={handleSubmit}>
          Crear cuenta<span style={{ marginLeft: 5 }}></span>
        </button>
      
    </div>

    
  </div>
  
</div>;
<div style={{ textAlign: "center" }}> {/* Contenedor para centrar horizontalmente */}
  <div
    style={{
      padding: 0.3,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: 1,
      display: "inline-flex",
    }}
  >
    <div style={{ textAlign: "right" }}>
      <span
        style={{
          color: "#718096",
          fontSize: 14,
          fontFamily: "Arial",
          fontWeight: "600",
          lineHeight: 1,
          wordWrap: "break-word",
        }}
      >
        ¿Ya tienes cuenta?{" "}
      </span>
      <span
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "Arial",
          fontWeight: "600",
          lineHeight: 1,
          wordWrap: "break-word",
        }}
      >
        <a href="Sesion">Inicia Sesion</a>
      </span>
    </div>
  </div>
</div>


      
      </div>
    </CSSTransition>
  );
};

export default Formulario;
