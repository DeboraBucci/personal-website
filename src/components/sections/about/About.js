import React from "react";

import Heading from "../../UI/Header";
import Vignettes from "./Vignettes";
import Traits from "./Traits";
import Others from "./Others";

import ProgrammingLanguages from "./Technologies";
import Languages from "./Languages";

const About = () => {
  return (
    <section className="section-about" id="about">
      <Heading section="about" className="portfolio-heading" />
      <Vignettes />
      <Traits />
      <div className="thin-line thin-line--small"></div>
      <ProgrammingLanguages />
      <div className="thin-line thin-line--small"></div>
      <Others />
      <div className="thin-line thin-line--small"></div>
      <Languages />
    </section>
  );
};

export default About;
