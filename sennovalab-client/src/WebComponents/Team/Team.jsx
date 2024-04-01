import React from "react";
import "./Team.scss";
import { motion } from "framer-motion";
import { image } from "../../assets";

export const Team = () => {
  return (
    <div className="team">
      <div class="circle-top"></div>
      <div class="circle-bottom"></div>
      <header>
        <motion.div
          class="header-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        >
          <h1>
            Conoce un equipo de expertos e innovadores que te ayudarán a llevar
            tu empresa al siguiente nivel.
          </h1>
        </motion.div>
      </header>

      <section class="team-section">
        <div class="team-container">
          <div class="team-card">
            <div class="team-card-header">
              <img src={image.dinamizador_sennova} alt="Alejandro" />
            </div>
            <div class="team-card-content">
              <h3>Hades Felipe Salazar</h3>
              <hr />
              <p>Dinamizador SENNOVA</p>
              <p>
                <strong>
                  <em>
                    <a href="mailto:" />
                  </em>
                </strong>
              </p>

              <div class="team-card-social">
                <a
                  href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-5b8b1a1b4/"
                  target="_blank"
                >
                  <img
                    src={image.linkedin}
                    alt="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/alejandrogomez_10/"
                  target="_blank"
                >
                  <img
                    src={image.cvlac}
                    alt="instagram"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="team-card">
            <div class="team-card-header">
              <img src={image.lider_grindda} alt="Alejandro" />
            </div>
            <div class="team-card-content">
              <h3>Adriana Rodriguez</h3>
              <hr />
              <p>Líder Grupo de Investigación GRINDDA</p>
              <p>
                <strong>
                  <em>
                    <a href="mailto:" />
                  </em>
                </strong>
              </p>

              <div class="team-card-social">
                <a
                  href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-5b8b1a1b4/"
                  target="_blank"
                >
                  <img
                    src={image.linkedin}
                    alt="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/alejandrogomez_10/"
                  target="_blank"
                >
                  <img
                    src={image.cvlac}
                    alt="instagram"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="team-container">
          <div class="team-card">
            <div class="team-card-header">
              <img src={image.lider} alt="Alejandro" />
            </div>
            <div class="team-card-content">
              <h3>Diana Marcela Ramirez</h3>
              <hr />
              <p>Responsable de Gestión Técnica</p>
              <p>
                <strong>
                  <em>
                    <a href="mailto:" />
                  </em>
                </strong>
              </p>

              <div class="team-card-social">
                <a
                  href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-5b8b1a1b4/"
                  target="_blank"
                >
                  <img
                    src={image.linkedin}
                    alt="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/alejandrogomez_10/"
                  target="_blank"
                >
                  <img
                    src={image.cvlac}
                    alt="instagram"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="team-card">
            <div class="team-card-header">
              <img src={image.responsable_servicios} alt="Alejandro" />
            </div>
            <div class="team-card-content">
              <h3>Carlos Sebastian Gómez</h3>
              <hr />
              <p>Responsable de Servicios Tecnológicos</p>
              <p>
                <strong>
                  <em>
                    <a href="mailto:" />
                  </em>
                </strong>
              </p>

              <div class="team-card-social">
                <a
                  href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-5b8b1a1b4/"
                  target="_blank"
                >
                  <img
                    src={image.linkedin}
                    alt="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/alejandrogomez_10/"
                  target="_blank"
                >
                  <img
                    src={image.cvlac}
                    alt="instagram"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="team-card">
            <div class="team-card-header">
              <img src={image.calidad} alt="Alejandro" />
            </div>
            <div class="team-card-content">
              <h3>Maria Viviana Giraldo</h3>
              <hr />
              <p>Responsable del Sistema de Gestión</p>
              <p>
                <strong>
                  <em>
                    <a href="mailto:" />
                  </em>
                </strong>
              </p>

              <div class="team-card-social">
                <a
                  href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-5b8b1a1b4/"
                  target="_blank"
                >
                  <img
                    src={image.linkedin}
                    alt="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/alejandrogomez_10/"
                  target="_blank"
                >
                  <img
                    src={image.cvlac}
                    alt="instagram"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="team-card1">
            <div class="team-card-header">
              <img src={image.linea_construccion} alt="Alejandro" />
            </div>
            <div class="team-card-content">
              <h3>Andrea del Pilar Alvarez</h3>
              <p>Profesional línea Construcción</p>
              <p>
                <strong>
                  <em>
                    <a href="mailto:" />
                  </em>
                </strong>
              </p>

              <div class="team-card-social">
                <a
                  href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-5b8b1a1b4/"
                  target="_blank"
                >
                  <img
                    src={image.linkedin}
                    alt="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/alejandrogomez_10/"
                  target="_blank"
                >
                  <img
                    src={image.cvlac}
                    alt="instagram"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="team-card1">
            <div class="team-card-header">
              <img src={image.linea_industria} alt="Alejandro" />
            </div>
            <div class="team-card-content">
              <h3>Luis Alberto Hernandez</h3>
              <p>Profesional Línea Industria</p>
              <p>
                <strong>
                  <em>
                    <a href="mailto:" />
                  </em>
                </strong>
              </p>

              <div class="team-card-social">
                <a
                  href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-5b8b1a1b4/"
                  target="_blank"
                >
                  <img
                    src={image.linkedin}
                    alt="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/alejandrogomez_10/"
                  target="_blank"
                >
                  <img
                    src={image.cvlac}
                    alt="instagram"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="team-card1">
            <div class="team-card-header">
              <img src={image.linea_software} alt="Alejandro" />
            </div>
            <div class="team-card-content">
              <h3>Yaneth Mejía</h3>
              <p>Profesional Línea Desarrollo de Software</p>
              <p>
                <strong>
                  <em>
                    <a href="mailto:" />
                  </em>
                </strong>
              </p>

              <div class="team-card-social">
                <a
                  href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-5b8b1a1b4/"
                  target="_blank"
                >
                  <img
                    src={image.linkedin}
                    alt="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/alejandrogomez_10/"
                  target="_blank"
                >
                  <img
                    src={image.cvlac}
                    alt="instagram"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="team-card2">
            <div class="team-card-header">
              <img src={image.apoyo_construccion} alt="Alejandro" />
            </div>
            <div class="team-card-content">
              <h3>Matilde Moreno</h3>
              <p>Técnico Línea Construcción</p>
              <p>
                <strong>
                  <em>
                    <a href="mailto:" />
                  </em>
                </strong>
              </p>

              <div class="team-card-social">
                <a
                  href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-5b8b1a1b4/"
                  target="_blank"
                >
                  <img
                    src={image.linkedin}
                    alt="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/alejandrogomez_10/"
                  target="_blank"
                >
                  <img
                    src={image.cvlac}
                    alt="instagram"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="team-card2">
            <div class="team-card-header">
              <img src={image.apoyo_industria} alt="Alejandro" />
            </div>
            <div class="team-card-content">
              <h3>Diosman Felipe Llanos</h3>
              <p>Técnico Línea de Industria</p>
              <p>
                <strong>
                  <em>
                    <a href="mailto:" />
                  </em>
                </strong>
              </p>

              <div class="team-card-social">
                <a
                  href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-5b8b1a1b4/"
                  target="_blank"
                >
                  <img
                    src={image.linkedin}
                    alt="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/alejandrogomez_10/"
                  target="_blank"
                >
                  <img
                    src={image.cvlac}
                    alt="instagram"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="team-card2">
            <div class="team-card-header">
              <img src={image.apoyo_software} alt="Alejandro" />
            </div>
            <div class="team-card-content">
              <h3>Luz Giovanna Garcia</h3>
              <p>Técnico Línea Desarrollo de Software</p>
              <p>
                <strong>
                  <em>
                    <a href="mailto:" />
                  </em>
                </strong>
              </p>

              <div class="team-card-social">
                <a
                  href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-5b8b1a1b4/"
                  target="_blank"
                >
                  <img
                    src={image.linkedin}
                    alt="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/alejandrogomez_10/"
                  target="_blank"
                >
                  <img
                    src={image.cvlac}
                    alt="instagram"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
