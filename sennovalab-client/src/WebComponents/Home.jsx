import React from "react";
import "./Home.scss";
import { Nabvar } from "./Nabvar/Nabvar";
import { Homepage } from "./Homepage/Homepage";
import { Induccion } from "./Induccion/Induccion";
import { Team } from "./Team/Team";
import { Services } from "./Services/Services";
import { Projects } from "./Projects/Projects";
import { Experience } from "./Experience/Experience";
import { Contact } from "./Contact/Contact";
export const Home = () => {
  return (
    <div>
      <section id="Homepage">
        <Nabvar />
        <Homepage />
      </section>
      <section id="Servicios">
        <Services />
      </section>
      <section id="Experiencia">
        <Experience />
      </section>
      <section id="Lines">
        <Projects />
      </section>
      <section id="Team">
        <Team />
      </section>
      <section id="Contacto">
        <Contact />
      </section>
    </div>
  );
};
