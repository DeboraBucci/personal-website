import { Fragment } from "react";
import About from "./about/About";
import Certifications from "./certifications/Certifications";
import Contact from "./contact/Contact";
import Courses from "./courses/Courses";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";

const Sections = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Certifications />
      <Courses />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default Sections;
