import React from "react";
import { image } from "../../assets";
import "./Experience.scss";

export const Experience = () => {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        padding: "20px",
        marginLeft: "10px",
        paddingLeft: "10px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
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
              <img src={image.whatsapp} alt="" width="25px" height="25px" />
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
              <img src={image.whatsapp} alt="" width="25px" height="25px" />
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
              <img src={image.whatsapp} alt="" width="25px" height="25px" />
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
              <img src={image.whatsapp} alt="" width="25px" height="25px" />
            </button>
            <button className="btn btn-primary">
              <img src={image.mail} alt="" width="25px" height="25px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
