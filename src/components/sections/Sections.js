import React, { Fragment } from "react";
import About from "./about/About";
import Certifications from "./certifications/Certifications";
import Contact from "./contact/Contact";
import Courses from "./courses/Courses";
import Hero from "./hero/Hero";
import Portfolio from "./portfolio/Portfolio";

const Sections = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Courses />
      <Portfolio />
      <Contact />
      <Certifications />
    </Fragment>
  );
};

export default Sections;
