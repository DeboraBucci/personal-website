import React, { Fragment } from "react";
import About from "./about/About";
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
    </Fragment>
  );
};

export default Sections;
