import React from "react";
import { image } from "../../assets";
import "./Contact.scss";

export const Contact = () => {
  const linkedinURL =
    "https://www.linkedin.com/in/sennovalab-manizales-46393629a/?originalSubdomain=co";
  const instagramURL =
    "https://www.instagram.com/sennovalab?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==";
  const whatsappNumber = "3167476049";
  const email = "sennovalab@sena.edu.co";

  const openLinkedIn = () => {
    window.open(linkedinURL, "_blank");
  };

  const openInstagram = () => {
    window.open(instagramURL, "_blank");
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hola, estoy interesado en conocer más acerca de sus servicios. ¿Puede proporcionarme más información?"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const openEmail = () => {
    const subject = encodeURIComponent("Interés en sus servicios");
    const body = encodeURIComponent(
      "Hola, me interesa un servicio de su página."
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
  };

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="contact-section">
        <h1
          style={{
            fontSize: "35px",
            fontWeight: "bold",
            marginBottom: "30px",
            marginTop: "30px",
          }}
        >
          NUESTROS CLIENTES
        </h1>
        <div id="grid-container">
          <div className="grid">
            <div className="row forward">
              <div className="box fill1"></div>
              <div className="box fill2 "></div>
              <div className="box fill3"></div>
              <div className="box fill4"></div>
              <div className="box fill5"></div>
              <div className="box fill6"></div>
              <div className="box fill7"></div>
              <div className="box fill8"></div>
              <div className="box fill9"></div>
              <div className="box fill10"></div>
              <div className="box fill11"></div>
              <div className="box fill12"></div>
              <div className="box fill13"></div>
              <div className="box fill14 in-viewport"></div>

              <div className="box fill1"></div>
              <div className="box fill2"></div>
              <div className="box fill3"></div>
              <div className="box fill4"></div>
              <div className="box fill5"></div>
              <div className="box fill6"></div>
              <div className="box fill7"></div>
              <div className="box fill8"></div>
              <div className="box fill9"></div>
              <div className="box fill10"></div>
              <div className="box fill11"></div>
              <div className="box fill12"></div>
              <div className="box fill13"></div>
              <div className="box fill14"></div>
            </div>
          </div>
        </div>
      </div>
      <div
      style={
        {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }
      }
      >
        <img
          src={image.contact}
          alt="logo2"
          style={{
            width: "80%",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={openLinkedIn}
            style={{
              border: "none",
              background: "none",
              padding: "0",
              margin: "3px",
            }}
          >
            <img
              src={image.linkedin}
              alt="linkedin"
              style={{
                width: "25px",
                height: "25px",
                margin: "3px",
                padding: "0",
              }}
            />
          </button>
          <button
            onClick={openInstagram}
            style={{
              border: "none",
              background: "none",
              padding: "0",
              margin: "3px",
            }}
          >
            <img
              src={image.ig}
              alt="instagram"
              style={{
                width: "25px",
                height: "25px",
                margin: "3px",
                padding: "0",
              }}
            />
          </button>
          <button
            onClick={openWhatsApp}
            style={{
              border: "none",
              background: "none",
              padding: "0",
              margin: "3px",
            }}
          >
            <img
              src={image.whatsapp}
              alt="whatsapp"
              style={{
                width: "25px",
                height: "25px",
                margin: "3px",
                padding: "0",
              }}
            />
          </button>
          <button
            onClick={openEmail}
            style={{
              border: "none",
              background: "none",
              padding: "0",
              margin: "3px",
            }}
          >
            <img
              src={image.mail}
              alt="mail"
              style={{
                width: "25px",
                height: "25px",
                margin: "3px",
                padding: "0",
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};
