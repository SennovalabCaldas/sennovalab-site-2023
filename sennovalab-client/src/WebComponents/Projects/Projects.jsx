import { motion } from "framer-motion";
import React from "react";
import { image } from "../../assets";
import "./Projects.scss";

export const Projects = () => {
  return (
    <div
      style={{
        margin: "auto",
        paddingTop: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        width: "80%",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.5, y: -100, x: -100 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          justifyContent: "center",
          color: "gray",
          marginTop: "20px",
        }}
      >
        NUESTRAS LINEAS
      </motion.h1>
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          color: "white",
        }}
        initial={{ opacity: 0, scale: 0.5, y: -100, x: -100 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "30%",
            backgroundColor: "#58cbff",
            color: "black",
            padding: "20px",
          }}
        >
          <h1>Linea de Desarrollo de software</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
            width: "60%",
            color: "black",
            padding: "20px",
          }}
        >
          <div>
            <div className="card-service">
              <div className="card-body">
                <div className="card-title">
                  <h3>Asesoría y Consultoría en formulación de proyectos</h3>
                </div>
                <div className="card-service__image">
                  <img
                    src="https://www.entrepreneur.com/article/350386"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="card-footer">
                  <p>Pregunta por el servicio</p>
                  <button className="btn btn-primary">
                    <img src={image.call} alt="" width="25px" height="25px" />
                  </button>
                  <button className="btn btn-primary">
                    <img
                      src={image.whatsapp}
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </button>
                  <button className="btn btn-primary">
                    <img src={image.mail} alt="" width="25px" height="25px" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-service">
              <div className="card-body">
                <div className="card-title">
                  <h3>Asesoría y consultoría en gestión de proyecto I+D+i</h3>
                </div>
                <div className="card-service__image">
                  <img
                    src="https://www.entrepreneur.com/article/350386"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="card-footer">
                  <p>Pregunta por el servicio</p>
                  <button className="btn btn-primary">
                    <img src={image.call} alt="" width="25px" height="25px" />
                  </button>
                  <button className="btn btn-primary">
                    <img
                      src={image.whatsapp}
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </button>
                  <button className="btn btn-primary">
                    <img src={image.mail} alt="" width="25px" height="25px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          color: "white",
        }}
        initial={{ opacity: 0, scale: 0.5, y: -100, x: -100 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 1.4,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "60%",
            color: "black",
            padding: "20px",
          }}
        >
          <div>
            <div className="card-service">
              <div className="card-body">
                <div className="card-title">
                  <h3>Asistencias técnicas en productos de I+D+i</h3>
                </div>
                <div className="card-service__image">
                  <img
                    src="https://www.entrepreneur.com/article/350386"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="card-footer">
                  <p>Pregunta por el servicio</p>
                  <button className="btn btn-primary">
                    <img src={image.call} alt="" width="25px" height="25px" />
                  </button>
                  <button className="btn btn-primary">
                    <img
                      src={image.whatsapp}
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </button>
                  <button className="btn btn-primary">
                    <img src={image.mail} alt="" width="25px" height="25px" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-service">
              <div className="card-body">
                <div className="card-title">
                  <h3>Producción en I+D+i</h3>
                </div>
                <div className="card-service__image">
                  <img
                    src="https://www.entrepreneur.com/article/350386"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="card-footer">
                  <p>Pregunta por el servicio</p>
                  <button className="btn btn-primary">
                    <img src={image.call} alt="" width="25px" height="25px" />
                  </button>
                  <button className="btn btn-primary">
                    <img
                      src={image.whatsapp}
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </button>
                  <button className="btn btn-primary">
                    <img src={image.mail} alt="" width="25px" height="25px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "30%",
            backgroundColor: "rgb(255 99 19 / 88%)",
            color: "black",
            padding: "20px",
          }}
        >
          <h1>Linea de Industria</h1>
        </div>
      </motion.div>
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          color: "white",
        }}
        initial={{ opacity: 0, scale: 0.5, y: -100, x: -100 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 2.3,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "30%",
            backgroundColor: "rgb(10 35 153 / 88%)",
            color: "white",
            padding: "20px",
          }}
        >
          <h1>Linea de Desarrollo de software</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
            width: "60%",
            color: "black",
            padding: "20px",
          }}
        >
          <div>
            <div className="card-service">
              <div className="card-body">
                <div className="card-title">
                  <h3>Asistencias técnicas en productos de I+D+i</h3>
                </div>
                <div className="card-service__image">
                  <img
                    src="https://www.entrepreneur.com/article/350386"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="card-footer">
                  <p>Pregunta por el servicio</p>
                  <button className="btn btn-primary">
                    <img src={image.call} alt="" width="25px" height="25px" />
                  </button>
                  <button className="btn btn-primary">
                    <img
                      src={image.whatsapp}
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </button>
                  <button className="btn btn-primary">
                    <img src={image.mail} alt="" width="25px" height="25px" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-service">
              <div className="card-body">
                <div className="card-title">
                  <h3>Producción en I+D+i</h3>
                </div>
                <div className="card-service__image">
                  <img
                    src="https://www.entrepreneur.com/article/350386"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="card-footer">
                  <p>Pregunta por el servicio</p>
                  <button className="btn btn-primary">
                    <img src={image.call} alt="" width="25px" height="25px" />
                  </button>
                  <button className="btn btn-primary">
                    <img
                      src={image.whatsapp}
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </button>
                  <button className="btn btn-primary">
                    <img src={image.mail} alt="" width="25px" height="25px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
