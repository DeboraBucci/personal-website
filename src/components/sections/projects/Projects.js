import React from "react";
import Header from "../../UI/Header";

import Link from "../../UI/Link";
import { projects } from "../../../data";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="section-projects" id="projects">
      <Header
        title="Here are my projects"
        subtitle="projects"
        className={"projects-heading"}
      />

      <div className="section-projects__projects ">
        {projects.map(({ title, link, num, info, extraInfo }) => {
          return (
            <Project
              key={`project ${num}`}
              title={title}
              link={link}
              num={num}
              info={info}
              extraInfo={extraInfo}
            />
          );
        })}
      </div>

      <div className="u-margin-top-medium section-projects__cta">
        <Link href="https://github.com/DeboraBucci?tab=repositories">
          <button className="btn btn--orange section-projects__cta--btn">
            See all my projects
            <i className="fas fa-angle-right section-projects__cta--icon" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
