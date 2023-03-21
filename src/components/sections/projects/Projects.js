import React, { useContext } from "react";

import Header from "../../UI/Header";
import Link from "../../UI/Link";
import Project from "./Project";

import LanguageContext from "../../../context/language-context";
import { projects } from "../../../database/languages-text";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const options = projects.opts[language];

  return (
    <section className="section-projects" id="projects">
      <Header section="projects" className="projects-heading" />

      <div className="section-projects__projects ">
        {projects.arr.map((project) => {
          return (
            <Project
              key={`project ${project.num}`}
              project={project}
              opts={options}
              language={language}
            />
          );
        })}
      </div>

      <div className="u-margin-top-medium section-projects__cta">
        <Link href="https://github.com/DeboraBucci?tab=repositories">
          <button className="btn btn--orange section-projects__cta--btn">
            {options.btn.all}
            <i className="fas fa-angle-right section-projects__cta--icon" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
