import React from "react";
import { image } from "../../assets";
import { motion } from "framer-motion";
import "./Nabvar.scss";
import { Sidebar } from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

export const Nabvar = () => {
  return (
    <div className="navbar">
      <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={image.logo} alt="logo" />
        </motion.div>
        <div className="social">
         <Link to="/induccion">
            <strong>Procesos</strong>
          </Link>
          <Link to="/pqrsf">
            <strong>PQRSF</strong>
          </Link>
          <Link to="/login">
            <strong>Iniciar sesión</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};
