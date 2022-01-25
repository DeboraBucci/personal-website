import React, { Fragment } from "react";
import Courses from "./Courses";
import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio";

const Sections = () => {
  return (
    <Fragment>
      <Hero />
      <Courses />
      <Portfolio />
    </Fragment>
  );
};

export default Sections;
