import React, { Fragment } from "react";
import Projects from "./Projects";
import Header from "../../UI/Header";
import Button from "../../UI/Button";
import classes from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <Fragment>
      <Header
        title="Here are my projects"
        subtitle="projects"
        className={"portfolio-heading"}
      />
      <Projects />
      <div className={classes.actions}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/DeboraBucci?tab=repositories"
        >
          <Button classes={classes["all-projects-btn"]}>
            See all my projects
            <i className="fas fa-angle-right"></i>
          </Button>
        </a>
      </div>
    </Fragment>
  );
};

export default Portfolio;
