import React from "react";
import "./BackTo.scss";
import { image } from "../../assets";
import { Link } from "react-router-dom";

export const BackTo = () => {
  return (
    <div className="back-button">
      <Link to="/">
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
      </Link>
    </div>
  );
};
