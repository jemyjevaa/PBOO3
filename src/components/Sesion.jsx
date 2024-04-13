import React, { useState } from "react";
import logo from "../../src/assets/images/logo.png";
import { FaGoogle, FaFacebook, FaApple, FaTwitter } from "react-icons/fa";
import robotcor from "../../src/assets/images/robotcor.png";
import { OutdoorGrillOutlined } from "@material-ui/icons";



// Definición de un componente de React
const Sesion = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <img
        style={{
          position: "absolute",
          paddingTop: 33,
          top: "calc(2% + 3px)",
          left: 65,
          width: "3%",
          height: "auto",
        }}
        src={logo}
        alt="logo"
      />
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          style={{
            width: 1108.12,
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
          <div style={{ width: 554.62, opacity: 0.75 }}>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "rgba(0, 0, 0, 0.87)",
                fontSize: 18,
                fontFamily: "Arial",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Inicio
            </a>
            <a
              href="/servicios"
              style={{
                textDecoration: "none",
                color: "rgba(0, 0, 0, 0.87)",
                fontSize: 18,
                fontFamily: "Arial",
                fontWeight: "700",
                paddingLeft: 15,
                wordWrap: "break-word",
              }}
            >
              Servicios
            </a>
            <a
              href="/brigada"
              style={{
                textDecoration: "none",
                color: "rgba(0, 0, 0, 0.87)",
                fontSize: 18,
                fontFamily: "Arial",
                fontWeight: "700",
                paddingLeft: 15,
                wordWrap: "break-word",
              }}
            >
              Brigada
            </a>
            <a
              href="/contactos"
              style={{
                textDecoration: "none",
                color: "#002761",
                fontSize: 18,
                fontFamily: "Arial",
                fontWeight: "700",
                paddingLeft: 15,
                wordWrap: "break-word",
              }}
            >
              Contactos
            </a>
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
              >
                <div
                  style={{
                    width: 180,
                    height: 60,
                    textAlign: "center",
                    color: "black",
                    fontSize: 16,
                    fontFamily: "Arial",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    wordWrap: "break-word",
                  }}
                >
                  <a
                    href="/Formulario"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    crear cuenta
                  </a>
                </div>
                <div
                  style={{
                    width: 180,
                    height: 60,
                    textAlign: "center",
                    color: "#002761",
                    fontSize: 16,
                    fontFamily: "Arial",
                    fontWeight: "700",
                    lineHeight: 3,
                    textTransform: "uppercase",
                    wordWrap: "break-word",
                  }}
                >
                  <a
                    href="/Sesion"
                    style={{ textDecoration: "none", color: "#002761" }}
                  >
                    Iniciar sesión
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 214.88,
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

      <div
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: 650,
            paddingTop: 110,
            paddingBottom: 50,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            display: "flex",
          }}
        >
          <div
            style={{
              height: 524,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 3,
              display: "flex",
            }}
          >
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 1,
                display: "flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  color: "#27272E",
                  fontSize: 28,
                  fontFamily: "Arial",
                  fontWeight: "600",
                  lineHeight: 1,
                  wordWrap: "break-word",
                }}
              >
                Bienvenido de nuevo
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  color: "#27272E",
                  fontSize: 16,
                  fontFamily: "Arial",
                  fontWeight: "400",
                  lineHeight: 2,
                  wordWrap: "break-word",
                }}
              >
                Iniciar sesión
              </div>
            </div>
            <div
              style={{
                height: 216,
                paddingTop: 24,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 30,
                display: "flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  height: 71,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 71,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: 424,
                      height: 17,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 424,
                        color: "#425466",
                        fontSize: 14,
                        fontFamily: "Arial",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      E-mail o Número teléfonico
                    </div>
                  </div>
                  <div
                    style={{
                      height: 20,
                      paddingTop: 14,
                      paddingBottom: 16,
                      paddingLeft: 16,
                      paddingRight: 50,
                      background: "#EDF2F7",
                      borderRadius: 6,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 358,
                        alignSelf: "stretch",
                        paddingTop: 0.5,
                        paddingBottom: 0.5,
                        paddingRight: 1,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 10,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#7A828A",
                            fontSize: 15,
                            fontFamily: "Arial",
                            fontWeight: "500",
                            lineHeight: 15,
                            wordWrap: "break-word",
                          }}
                        >
                          Escribe tu email o número teléfonico
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  height: 91,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 91,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: 424,
                      height: 17,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 424,
                        color: "#425466",
                        fontSize: 14,
                        fontFamily: "Arial",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Contraseña
                    </div>
                  </div>
                  <div
                    style={{
                      height: 10,
                      paddingTop: 14,
                      paddingBottom: 16,
                      paddingLeft: 16,
                      paddingRight: 50,
                      background: "#EDF2F7",
                      borderRadius: 6,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 358,
                        alignSelf: "stretch",
                        paddingTop: 1,
                        paddingBottom: 1,
                        paddingRight: 1,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 10,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#7A828A",
                            fontSize: 15,
                            fontFamily: "Arial",
                            fontWeight: "500",
                            lineHeight: 15,
                            wordWrap: "break-word",
                          }}
                        >
                          Contraseña
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: 110,
                      height: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 424,
                        textAlign: "right",
                        color: "#777E90",
                        fontSize: 11,
                        fontFamily: "Arial",
                        fontWeight: "400",
                        lineHeight: 12,
                        wordWrap: "break-word",
                      }}
                    >
                      Olvide mi contraseña
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="Button"
              style={{
                width: 420,
                height: 40,
                background: isHovered ? "#002761" : "white",
                color: isHovered ? "white" : "black",
                borderRadius: 90,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginTop: 20,
                border: isHovered ? "none" : "1px solid #4E4E4E",
                cursor: "pointer",
                transition: "background 0.3s, color 0.3s",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="Label"
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "Arial",
                  fontWeight: "700",
                  lineHeight: 2.5,
                  wordWrap: "break-word",
                  padding: "5px 10px",
                }}
              >
                Iniciar sesión
              </div>
            </div>
            <div style={{ height: 94, position: "relative" }}>
              <div
                style={{
                  width: 424,
                  height: 25,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 24,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    flex: "1 1 0",
                    height: 0,
                    border: "1px #EDF2F7 solid",
                  }}
                ></div>
                <div
                  style={{
                    textAlign: "center",
                    color: "#718096",
                    fontSize: 12,
                    fontFamily: "Arial",
                    fontWeight: "500",
                    lineHeight: 18,
                    wordWrap: "break-word",
                  }}
                >
                  Iniciar con{" "}
                </div>
                <div
                  style={{
                    flex: "1 1 0",
                    height: 0,
                    border: "1px #EDF2F7 solid",
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: 424,
                  height: 52,
                  left: 0,
                  top: 42,
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 400,
                  display: "inline-flex",
                }}
              >
 <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 6,
                display: "inline-flex",
              }}
            >
              
                  <div style={{ width: 72, height: 52, position: "relative" }}>
                  <div>
                    <FaFacebook />
                  </div>
                   </div>
                  <div style={{ width: 72, height: 52, position: "relative" }}>
                  <div>
                    <FaGoogle />
                  </div>
                   </div>
                  <div style={{ width: 10, height: 52, position: "relative" }}>
                  <div>
                    <FaApple />
                  </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
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
                ¿No tienes cuenta?{" "}
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
                <a href="Formulario">Registrarse</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sesion;
