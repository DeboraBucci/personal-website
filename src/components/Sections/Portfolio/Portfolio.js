import React, { Fragment } from "react";
import Projects from "./Projects";
import Header from "../../UI/Header";
import Button from "../../UI/Button";
import classes from "./Portfolio.module.css";
import Link from "../../UI/Link";
import Icon from "../../UI/Icon";

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
        <Link href="https://github.com/DeboraBucci?tab=repositories">
          <Button className={classes["all-projects-btn"]}>
            See all my projects
            <Icon icon={"fas fa-angle-right"} />
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Portfolio;
