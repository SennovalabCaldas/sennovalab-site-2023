import React from "react";
import { motion } from "framer-motion";
import { image } from "../../../assets";

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05 },
    staggeredDirection: -1,
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const Links = () => {
  const items = ["Homepage", "Servicios", "Líneas", "Equipo", "Contacto"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          {item}
        </motion.a>
      ))}
      <div
        style={{
          bottom: "15px",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src={image.logo2}
          alt="logo2"
          style={{
            width: "100px",
            height: "70px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </motion.div>
  );
};
