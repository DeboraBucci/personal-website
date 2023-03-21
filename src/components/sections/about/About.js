import React from "react";

import Heading from "../../UI/Header";
import Vignettes from "./Vignettes";
import Traits from "./Traits";
import Technologies from "./Technologies";
import ProgrammingLanguages from "./ProgrammingLanguages";

const About = () => {
  return (
    <section className="section-about" id="about">
      <Heading section="about" className="portfolio-heading" />
      <Vignettes />
      <Traits />
      <div className="thin-line thin-line--small"></div>
      <ProgrammingLanguages />
      <div className="thin-line thin-line--small"></div>
      <Technologies />
    </section>
  );
};

export default About;
