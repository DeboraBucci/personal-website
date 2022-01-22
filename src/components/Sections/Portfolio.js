import React from "react";
import Projects from "./Projects";
import Header from "../Header/Header";
import LinkButton from "../LinkButton/LinkButton";
import "./Portfolio.css";
import "../../general-styles.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Header title="Here are my projects" subtitle="projects" />
      <Projects />
      <LinkButton
        href="https://github.com/DeboraBucci?tab=repositories"
        text="See all my projects"
        icon={<i className="fas fa-angle-right"></i>}
        classes="all-projects-btn flex centered g-10px c-white"
      />
    </section>
  );
};

export default Portfolio;
