import React from "react";
import { Timeline, sortEventList } from "@progress/kendo-react-layout";
import "@progress/kendo-theme-default/dist/all.css";
import { motion } from "framer-motion";
import { events } from "./events";
import { Modal } from "antd";
import { useState } from "react";
import { image } from "../../assets";

const sortedEvents = sortEventList(events);

export const Services = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onActionClick = (e) => {
    const dataItem = e.dataItem;
    setSelectedEvent(dataItem);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <motion.div
        style={{ display: "flex", justifyContent: "center" }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        initial={{
          opacity: 0,
          transition: {
            duration: 5,
          },
        }}
        transition={{ duration: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="app-wrapper"
      >
        <motion.h1
          animate={{
            opacity: 1,
            transition: {
              duration: 5,
            },
          }}
        >
          Conoce
        </motion.h1>
      </motion.div>
      <motion.div
        style={{ display: "flex", justifyContent: "center" }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        initial={{
          opacity: 0,
          transition: {
            duration: 5,
          },
        }}
        transition={{ duration: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="app-wrapper"
      >
        <h1>NUESTRA HISTORIA</h1>
      </motion.div>
      <motion.div
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        initial={{
          opacity: 0,
          transition: {
            duration: 1,
          },
        }}
        transition={{ duration: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="app-wrapper"
      >
        <Timeline
          events={sortedEvents}
          alterMode={true}
          collapsibleEvents={true}
          onActionClick={onActionClick}
          className="timeline-wrapper"
        />
      </motion.div>
      <Modal
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
        width={800}
        centered
      >
        <motion.div
          animate={{
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}
          initial={{
            opacity: 0,
            transition: {
              duration: 1,
            },
          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          exit={{ opacity: 0 }}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px",
            flexDirection: "row",
          }}
        >
          <img src={image.logo} alt="SENNOVALAB" style={{ width: "270px" }} />
          <motion.div
            animate={{
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
            initial={{
              opacity: 0,
              transition: {
                duration: 1,
              },
            }}
            transition={{
              duration: 1,
              delay: 1,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            exit={{ opacity: 0 }}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
              flexDirection: "column",
            }}
          >
            <h2>SENNOVALAB </h2>
            <p>
              es el ambiente de Servicios Tecnológicos en I+D+i del Centro de
              Procesos Industriales y Cosntrucción del SENA Regional Caldas.
            </p>
            <p>
              Hace parte del Sistema de Investigación, Desarrollo Tecnológico e
              Innovación - SENNOVA del SENA.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",

                margin: "20px",
                flexDirection: "column",
              }}
            >
              <p>
                <small>
                  <strong>
                    Linea programática Fortalecimiento de la oferta de Servicios
                    Tecnológicos para las empresas.
                  </strong>
                </small>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Modal>
    </>
  );
};
