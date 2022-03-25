import React from "react";
import Header from "../../UI/Header";
import Button from "../../UI/Button";

import Link from "../../UI/Link";
import { projects } from "../../../Data";
import Project from "./Project";

const Portfolio = () => {
  return (
    <section className="section-portfolio" id="portfolio">
      <Header
        title="Here are my projects"
        subtitle="projects"
        className={"portfolio-heading"}
      />

      <div className="section-portfolio__projects ">
        {projects.map(({ title, link, num, info }) => {
          return <Project title={title} link={link} num={num} info={info} />;
        })}
      </div>

      <div className="u-margin-top-medium section-portfolio__cta">
        <Link href="https://github.com/DeboraBucci?tab=repositories">
          <Button className="section-portfolio__cta--btn">
            See all my projects
            <i className="section-portfolio__cta--icon fas fa-angle-right" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
