import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa el archivo de estilos
import logo from "../../src/assets/images/logo.png";
import { FaPhone } from "react-icons/fa";
import { AiOutlinePlus } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IoChevronDown } from 'react-icons/io5';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';



const Soporte = () => {
    const CustomLink = ({ href, children }) => {
        const [isHovered, setIsHovered] = useState(false);
    
        return (
          <a
            href={href}
            style={{
              textDecoration: "none",
              color: isHovered ? "#4AB3CA" : "rgba(0, 0, 0, 0.87)", // Cambia el color del texto basado en el estado hovered
              fontSize: 18,
              fontFamily: "Arial",
              fontWeight: "700",
              wordWrap: "break-word",
              transition: "background 0.3s, color 0.3s",
              marginLeft: "30px", // Añade margen izquierdo para separar los enlaces
            }}
            onMouseEnter={() => setIsHovered(true)} // Establece hovered en true cuando el cursor entra
            onMouseLeave={() => setIsHovered(false)} // Establece hovered en false cuando el cursor sale
          >
            {children}
          </a>
        );
      };
      const CustomButton = ({ children }) => {
        const [isHovered, setIsHovered] = useState(false);
    
        return (
          <div
            className="Button"
            style={{
              width: 150,
              height: 50,
              background: isHovered ? "#4AB3CA" : "#FFFFFF", // Cambiado el color del fondo basado en el estado hovered
              color: isHovered ? "#FFFFFF" : "#000000",
              border: "none",
              borderRadius: 10,
              textAlign: "center",
              fontSize: 14,
              fontFamily: "Arial",
              fontWeight: "700",
              textTransform: "uppercase",
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
                width: 1408.12,
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
             <div style={{ display: 'flex', alignItems: 'center', width: 954.62, opacity: 0.75 }}>
             <h3 style={{ marginRight: '30px', color: '#FFFFFF' }}>Títulosin </h3>
                <CustomLink href="/Inicio">Inicio</CustomLink>
                <CustomLink href="/servicios">Servicios</CustomLink>
                
                <CustomLink href="/brigada">Brigada</CustomLink>
                <CustomLink href="/Nosotros">Contactos</CustomLink>
                <CustomLink href="/Soporte">Soporte</CustomLink>
            </div>
    
    
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link to="/Formulario" style={{ textDecoration: "none" }}>
                  <CustomButton>Crear cuenta</CustomButton>
                </Link>
                <Link to="/Sesion" style={{ textDecoration: "none" }}>
                  <CustomButton>Iniciar sesión</CustomButton>
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
                width: 388.88,
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
                  <a href="/" style={{ textDecoration: "none", color: "#302F2F" }}>
                    PBOO
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
           <br/>
            <br/>
             <br/>

             <div style={{width: 1680, height: 432, paddingTop: 40, paddingBottom: 40, background: '#E9FBFF', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
  <div style={{height: 176, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
    <div style={{height: 176, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{alignSelf: 'stretch', color: '#1A191E', fontSize: 80, fontFamily: 'Arial', fontWeight: 'Bold', lineHeight: 1.5, paddingTop:18,wordWrap: 'break-word',paddingRight:800}}>¿Cómo podemos<br/>ayudarte?</div>
    </div>
  </div>
  <div style={{width: 380, height: 429, left: 953, top: 200, position: 'absolute', background: 'white', borderRadius: 50, overflow: 'hidden', border: '3px #FFFFFF solid'}}>
    <div style={{width: 305, left: 37, top: 43, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{width: 24, height: 24, position: 'relative'}}>
      <div>
      <IoArrowBack /> {/* Icono de flecha hacia la izquierda */}
    </div>
      </div>
      <div style={{color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Soporte Técnico</div>
      <div style={{width: 24, height: 24, position: 'relative'}}>
      <div>
 
 <IoArrowForward /> {/* Icono de flecha hacia la derecha */}
</div>
      </div>
    </div>
    <div style={{height: 95, paddingTop: 20, paddingBottom: 30, paddingLeft: 20, paddingRight: 20, left: 0, top: 705, position: 'absolute', background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div style={{justifyContent: 'center', alignItems: 'flex-start', gap: 44, display: 'inline-flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
          <div style={{width: 22, height: 22, position: 'relative'}}>
            <div style={{width: 16.50, height: 17.17, left: 2.75, top: 2.08, position: 'absolute', background: '#1A191E'}}></div>
          </div>
          <div style={{color: '#1A191E', fontSize: 12, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Home</div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
          <div style={{width: 22, height: 22, position: 'relative'}}>
            <div style={{width: 18.33, height: 18.33, left: 1.83, top: 1.83, position: 'absolute', background: '#1A191E'}}></div>
          </div>
          <div style={{color: '#1A191E', fontSize: 12, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Savings</div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
          <div style={{width: 22, height: 22, position: 'relative'}}>
          <div>
      <IoChevronDown />
    </div>
          </div>
          <div style={{color: '#1A191E', fontSize: 12, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Cards</div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
          <div style={{width: 22, height: 22, position: 'relative'}}>
          <div>
      <IoChevronDown />
    </div>
          </div>
          <div style={{color: '#1A191E', fontSize: 12, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Account</div>
        </div>
      </div>
    </div>
    <div style={{height: 344, left: 30, top: 109, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 40, height: 40, background: '#4AB3CA', borderRadius: 500, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
          <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Arial', fontWeight: '500', lineHeight: 22.40, wordWrap: 'break-word'}}>PB</div>
        </div>
        <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#F8F8F8', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 14, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Hola Jessica, ¿En qué podemos<br/>ayudarte?</div>
        </div>
      </div>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#F8F8F8', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 14, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Tengo un problema con <br/>mi dispositivo.</div>
        </div>
        <div style={{width: 40, height: 40, background: '#4AB3CA', borderRadius: 500, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
          <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Arial', fontWeight: '500', lineHeight: 22.40, wordWrap: 'break-word'}}>JA</div>
        </div>
      </div>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 40, height: 40, background: '#4AB3CA', borderRadius: 500, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
          <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Arial', fontWeight: '500', lineHeight: 22.40, wordWrap: 'break-word'}}>PB</div>
        </div>
        <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#F8F8F8', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 14, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Muy bien, ¿me puedes dar tu ID de<br/>cliente?</div>
        </div>
      </div>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#F8F8F8', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 14, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>123456</div>
        </div>
        <div style={{width: 40, height: 40, background: '#4AB3CA', borderRadius: 500, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
          <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Arial', fontWeight: '500', lineHeight: 22.40, wordWrap: 'break-word'}}>JA</div>
        </div>
      </div>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 40, height: 40, background: '#4AB3CA', borderRadius: 500, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
          <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Arial', fontWeight: '500', lineHeight: 22.40, wordWrap: 'break-word'}}>NL</div>
        </div>
        <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#F8F8F8', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 14, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>One moment please.</div>
        </div>
      </div>
    </div>
  </div>
</div>


<div style={{width: 1200, height: 322, paddingTop: 96, paddingBottom: 96, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex',paddingLeft:140}}>
  <div style={{height: 130, padding: 32, background: '#4AB3CA', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex'}}>
      <div style={{width: 353, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div style={{width: 253, color: 'white', fontSize: 28, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿Más preguntas?</div>
        <div style={{opacity: 0.70, color: 'white', fontSize: 18, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Estamos para ayudar.</div>
      </div>
      <div style={{flex: '1 1 0', height: 50, justifyContent: 'flex-end', alignItems: 'center', gap: 96, display: 'flex'}}>
        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{width: 40, height: 40, background: 'rgba(255, 255, 255, 0.20)', borderRadius: 100, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 22, height: 22, position: 'relative'}}>
            <div style={{width: '16.5px',color:'white', height: '16.5px', position: 'absolute', left: '2.75px', top: '2.75px'}}>
      <FaPhone />
    </div>
            </div>
          </div>
          <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 18, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>+52 331 123 456</div>
            <div style={{opacity: 0.70, color: 'white', fontSize: 14, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Atención a clientes</div>
          </div>
        </div>
        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{width: 40,color:'white', height: 40, background: 'rgba(255, 255, 255, 0.20)', borderRadius: 100, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 15, height: 15, position: 'relative'}}>
            <div>
      <MdEmail />
    </div>
            </div>
          </div>
          <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 18, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>pbooind@gmail.com</div>
            <div style={{opacity: 0.70, color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Contacto por correo</div>
          </div>
        </div>
        <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 7, paddingBottom: 7, background: '#1A191E', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <div style={{color: 'white', fontSize: 18, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Contáctanos</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div style={{width: 1200, height: 1654,paddingLeft:150, justifyContent: 'center', alignItems: 'flex-start', gap: 128, display: 'inline-flex'}}>
  <div style={{width: 280, padding: 32, background: '#F8F8F8', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
    <div style={{color: '#1A191E', fontSize: 18, fontFamily: 'Arial', fontWeight: 'bold', lineHeight: 2, wordWrap: 'break-word'}}>Categorías</div>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
      <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 16, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Preguntas</div>
      <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 16, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Problemas con cuenta</div>
      <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 16, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Dispositivo</div>
    </div>
  </div>
  <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 128, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', height: 588, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 64, display: 'flex'}}>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 50, height: 50, background: '#E9FBFF', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <div style={{width: 15, height: 15, position: 'relative'}}>
          <div>
      <IoChevronDown />
    </div>
          </div>
        </div>
        <div style={{color: '#1A191E', fontSize: 28, fontFamily: 'Arial', fontWeight: 'bold', lineHeight: 2, wordWrap: 'break-word'}}>Programa de registros</div>
      </div>
      <div style={{alignSelf: 'stretch', height: 474, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿Qué tipo de situaciones de emergencia cubre el servicio de PBOO?</div>
          <div style={{width: 24, height: 24, position: 'relative'}}>
          <div>
      <AiOutlinePlus />
    </div>
          </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 1, background: '#E8E8E8'}} />
        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿PBOO está disponible para su uso fuera del campus universitario?</div>
          <div style={{width: 24, height: 24, position: 'relative'}}>
          <div>
      <AiOutlinePlus />
    </div>
          </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 1, background: '#E8E8E8'}} />
        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿Qué sucede después de presionar el botón de pánico?</div>
          <div style={{width: 24, height: 24, position: 'relative'}}>
          <div>
      <AiOutlinePlus />
    </div>
          </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 1, background: '#E8E8E8'}} />
        <div style={{alignSelf: 'stretch', height: 118, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿Cómo funciona exactamente el dispositivo de PBOO?</div>
            <div style={{width: 24, height: 24, position: 'relative'}}>
            <div>
      <AiOutlinePlus />
    </div>
            </div>
          </div>
          <div style={{alignSelf: 'stretch', color: 'rgba(26, 25, 30, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>
El dispositivo de PBOO es un sistema de seguridad portátil diseñado para brindar ayuda inmediata en situaciones de emergencia. Funciona de la siguiente manera:<br/>

Botón de Pánico: El dispositivo cuenta con un botón de pánico físico que puede ser activado fácilmente por el usuario en caso de emergencia. 
</div>
        </div>
        <div style={{alignSelf: 'stretch', height: 1, background: '#E8E8E8'}} />
        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿Cómo se garantiza la privacidad y seguridad de los usuarios de PBOO?</div>
          <div style={{width: 24, height: 24, position: 'relative'}}>
          <div>
      <AiOutlinePlus />
    </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{alignSelf: 'stretch', height: 405, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 64, display: 'flex'}}>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 50, height: 50, background: '#E9FBFF', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <div style={{width: 15, height: 15, position: 'relative'}}>
          <div>
      <IoChevronDown />
    </div>
          </div>
        </div>
        <div style={{color: '#1A191E', fontSize: 28, fontFamily: 'Arial', fontWeight: 'bold', lineHeight: 2, wordWrap: 'break-word'}}>Cuentas</div>
      </div>
      <div style={{alignSelf: 'stretch', height: 291, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>
          ¿Qué tipo de cuentas ofrece PBOO??</div>
          <div style={{width: 24, height: 24, position: 'relative'}}>
          <div>
      <AiOutlinePlus />
    </div>
          </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 1, background: '#E8E8E8'}} />
        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿Cómo puedo registrarme para obtener una cuenta en PBOO?</div>
          <div style={{width: 24, height: 24, position: 'relative'}}>
          <div>
      <AiOutlinePlus />
    </div>
          </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 1, background: '#E8E8E8'}} />
        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿Cuáles son los requisitos para crear una cuenta?</div>
          <div style={{width: 24, height: 24, position: 'relative'}}>
          <div>
      <AiOutlinePlus />
    </div>
          </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 1, background: '#E8E8E8'}} />
        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿Cómo puedo acceder a mi cuenta desde diferentes dispositivos?</div>
          <div style={{width: 24, height: 24, position: 'relative'}}>
          <div>
      <AiOutlinePlus />
    </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{alignSelf: 'stretch', height: 405, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 64, display: 'flex'}}>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 50, height: 50, background: '#E9FBFF', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <div style={{width: 15, height: 15, position: 'relative'}}>
          <div>
      <IoChevronDown />
    </div>
          </div>
        </div>
        <div style={{color: '#1A191E', fontSize: 28, fontFamily: 'Arial', fontWeight: 'bold', lineHeight: 2, wordWrap: 'break-word'}}>Detalles</div>
      </div>
      <div style={{alignSelf: 'stretch', height: 291, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿Hay algún contrato de permanencia o compromiso a largo plazo?</div>
          <div style={{width: 24, height: 24, position: 'relative'}}>
          <div>
      <AiOutlinePlus />
    </div>
          </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 1, background: '#E8E8E8'}} />
        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿Cómo se realiza el proceso de instalación del dispositivo PBOO?
</div>
          <div style={{width: 24, height: 24, position: 'relative'}}>
          <div>
      <AiOutlinePlus />
    </div>
          </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 1, background: '#E8E8E8'}} />
        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿Cuántos contactos de emergencia puedo agregar a mi cuenta?</div>
          <div style={{width: 24, height: 24, position: 'relative'}}>
          <div>
      <AiOutlinePlus />
    </div>
          </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 1, background: '#E8E8E8'}} />
        <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', color: '#1A191E', fontSize: 20, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>¿Puedo cancelar mi suscripción en cualquier momento?</div>
          <div style={{width: 24, height: 24, position: 'relative'}}>
          <div>
      <AiOutlinePlus />
    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>
<br/>
<div
        style={{
          width: "100%",
          height: "100%",
          paddingBottom: 1,
          background:
            "linear-gradient(90deg, #EFF2F1 0%, rgba(73.87, 179.11, 202.22, 0.41) 51%, #E2E4E5 100%)",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 1,
          display: "inline-flex",
        }}
      >
        <div style={{ width: 16, height: 1, background: "#E8E8E8" }} />
        <div
          style={{
            width: 1400,
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 80,
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 300,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#302F2F",
                fontSize: 40,
                fontFamily: "Arial",
                fontWeight: "Bold",
                lineHeight: 1,
                paddingLeft: 60,
                paddingTop: 50,

                wordWrap: "break-word",
              }}
            >
              PBOO
            </div>
            <div
              style={{
                flex: "1 1 0",
                height: 25,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 48,
                display: "flex",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 18,
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: "500",
                    lineHeight: 1.5,
                    paddingTop: 50,
                    wordWrap: "break-word",
                  }}
                >
                  ¿Quienes somos?
                  <br />
                  Misión
                  <br />
                  Visión
                  <br />
                  Avances
                </div>
              </div>

              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 18,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 1.5,
                    paddingTop: 50,
                    wordWrap: "break-word",
                  }}
                >
                  Conoce el blog
                  <br />
                  Nuestros días
                  <br />
                  Opiniones
                  <br />
                  Usabilidad
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 18,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 1.5,
                    paddingTop: 50,
                    wordWrap: "break-word",
                  }}
                >
                  Aplicación Móvil
                  <br />
                  Conocerla
                  <br />
                  Instalarla
                  <br />
                  Compartir
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 18,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 1.5,
                    paddingTop: 50,
                    wordWrap: "break-word",
                  }}
                >
                  Nuestras redes
                  <br />
                  Facebook
                  <br />
                  Instagram
                  <br />
                  Twitter
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: 39,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16,
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 100,
                background: "#E8E8E8",
              }}
            />
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "space-between",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div>
                <span
                  style={{
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  © Made by{" "}
                </span>
                <span
                  style={{
                    color: "#4AB3CA",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  UTZMG
                </span>
                <span
                  style={{
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  - Powered by{" "}
                </span>
                <span
                  style={{
                    color: "#4AB3CA",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  PBOO
                </span>
              </div>
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  Guadalajara
                </div>
                <div
                  style={{
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  Jalisco
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
    );
  };
  
  export default Soporte;