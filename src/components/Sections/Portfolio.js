import React from "react";
import Projects from "./Projects";
import Header from "../Header/Header";
import Button from "../Button/Button";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Header title="Here are my projects" subtitle="projects" />
      <Projects />
      <a
        target="_blank"
        rel="noopener"
        href="https://github.com/DeboraBucci?tab=repositories"
      >
        <Button>
          See all my projects
          <i className="fas fa-angle-right"></i>
        </Button>
      </a>
    </section>
  );
};

export default Portfolio;
