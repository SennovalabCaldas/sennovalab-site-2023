import React from "react";
import "./Induccion.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { image } from "../../assets";
import { motion } from "framer-motion";

export const Induccion = () => {
  return (
    <div className="induccion">
      <AwesomeSlider
        bullets={false}
        className="slider"
        animation="cubeAnimation"
        style={{
          width: "90vw",
          height: "100vh",
          margin: "auto",
          marginBottom: "5vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="slide"
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100vh",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image1}
              alt="slide 1"
              style={{
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                margin: "auto",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image2}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image3}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image4}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image5}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image6}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image7}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image8}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image9}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image10}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image11}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image12}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image13}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image14}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image15}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image16}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "85%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <img
              src={image.image17}
              alt="slide 1"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div
              className="slide__overlay"
              style={{
                height: "15%",
                width: "60%",
                objectFit: "cover",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "0 0 ",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    borderBottom: "1px solid white",
                  }}
                >
                  INDUCCIÓN Y REINDUCCIÓN
                </h3>
                <p
                  style={{
                    paddingTop: "5px",
                    fontSize: "0.5rem",
                    color: "white",
                  }}
                >
                  SENNOVALAB @2023
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Ultimo slide de agradecimientos */}
        <div
          className="slide"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              margin: "auto",
            }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                color: "black",
                fontSize: "3rem",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "white" }}>GRACIAS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{
                color: "black",
                fontSize: "1rem",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "white" }}>SENNOVALAB @2023</span>
            </motion.p>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 20, 0], scale: [1, 1.2, 1] }}
              transition={{
                delay: 1.5,
                duration: 2,
                yoyo: Infinity,
                ease: "easeInOut",
              }}
              src={image.logo}
              alt="logo"
              style={{
                height: "150px",
                width: "150px",
                objectFit: "cover",
                borderRadius: "10%",
              }}
            ></motion.img>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};
