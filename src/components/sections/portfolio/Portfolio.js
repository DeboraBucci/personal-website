import React from "react";
import Header from "../../UI/Header";

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
          return (
            <Project
              key={`project ${num}`}
              title={title}
              link={link}
              num={num}
              info={info}
            />
          );
        })}
      </div>

      <div className="u-margin-top-medium section-portfolio__cta">
        <Link href="https://github.com/DeboraBucci?tab=repositories">
          <button className="btn btn--orange section-portfolio__cta--btn">
            See all my projects
            <i className="fas fa-angle-right section-portfolio__cta--icon" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
