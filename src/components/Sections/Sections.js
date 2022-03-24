import React, { Fragment } from "react";
import About from "./About/About";
import Courses from "./Courses/Courses";
import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio/Portfolio";

const Sections = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Courses />
      <Portfolio />
    </Fragment>
  );
};

export default Sections;
