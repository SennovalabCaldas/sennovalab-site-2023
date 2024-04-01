import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./Homepage.scss";
import { image } from "../../assets";

export const Homepage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        top: "70px",
        position: "relative",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AwesomeSlider
        animation="cubeAnimation"
        bullets={false}
        className="slider"
        animationDuration={600}
      >
        <div
          style={{
            background: `url(${image.slide4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "1200px",
              height: "400px",
            }}
          >
            <div
              style={{
                background: "rgb(0 0 0 / 58%)",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                padding: "0 20px",
              }}
            >
              <h1 className="slider__title">SENNOVALAB</h1>
              <p className="slider__description">
                es el ambiente de Servicios Tecnológicos en I+D+i del Centro de
                Procesos Industriales y Cosntrucción del SENA Regional Caldas.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            background: `url(${image.slide6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "1200px",
              height: "400px",
            }}
          >
            <div
              style={{
                background: "rgb(0 0 0 / 58%)",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                padding: "0 20px",
              }}
            >
              <h1
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  borderBottom: "2px solid white",
                }}
              >
                DESCUBRE NUESTRO LABORATORIO
              </h1>
              <p className="slider__description">
                Donde la imaginación se encuentra con la tecnología.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            background: `url(${image.slide5})`,
            backgroundSize: "contain",

            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "1200px",
              height: "400px",
            }}
          >
            <div
              style={{
                background: "rgb(0 0 0 / 58%)",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                padding: "0 20px",
              }}
            >
              <h1
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  borderBottom: "2px solid white",
                }}
              >
                TRABAJAMOS EN EQUIPO
              </h1>
              <p className="slider__description">
                Para lograr los mejores resultados. Implementando las mejores
                tecnologías.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            background: `url(${image.slide8})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: "100%",
            margin: "auto",
          }}
        >
          <div
            style={{
              width: "1200px",
              height: "400px",
            }}
          >
            <div
              style={{
                background: "rgb(0 0 0 / 58%)",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                padding: "0 20px",
              }}
            >
              <h1
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  borderBottom: "2px solid white",
                }}
              >
                CONOCE NUESTROS CLIENTES
              </h1>
              <p className="slider__description">
                A lo largo de nuestra trayectoria hemos tenido la oportunidad de
                trabajar con empresas de diferentes sectores.
              </p>
            </div>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};
