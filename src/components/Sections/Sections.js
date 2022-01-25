import React, { Fragment } from "react";
import Courses from "./Courses";
import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio";

const Sections = () => {
  const sections = [
    {
      content: <Hero />,
      id: "home",
    },
    {
      content: <Courses />,
      id: "certifications",
    },
    {
      content: <Portfolio />,
      id: "portfolio",
    },
  ];

  return (
    <Fragment>
      {sections.map(({ content, id }) => (
        <section key={id} id={id}>
          {content}
        </section>
      ))}
    </Fragment>
  );
};

export default Sections;
