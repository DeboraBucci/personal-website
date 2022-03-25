import React from "react";

import SecondaryHeading from "../../UI/Header";
import Vignettes from "./Vignettes";
import Traits from "./Traits";
import Technologies from "./Technologies";

const About = () => {
  return (
    <section className="section-about" id="about">
      <SecondaryHeading
        title="Get to know me more"
        subtitle="about me"
        className={"portfolio-heading"}
      />
      <Vignettes />
      <Traits />
      <Technologies />
    </section>
  );
};

export default About;