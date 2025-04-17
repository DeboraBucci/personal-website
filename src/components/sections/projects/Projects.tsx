import { useContext } from "react";

import Header from "../../UI/Header";
import Link from "../../UI/Link";
import ProjectCard from "./ProjectCard";

import LanguageContext from "../../../context/language-context";
import styled from "styled-components";
import { projects } from "../../../database/projects";
import { projects as prjs } from "../../../database/languages-text";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const options = prjs.opts[language];

  return (
    <section className="section-projects" id="projects">
      <Header section="projects" className="projects-heading" />

      {/* <ProjectNavbar data-aos="fade-up">
        <li className="selected">All</li>

        <li>Web</li>

        <li>Mobile</li>

        <li>Other</li>
      </ProjectNavbar> */}

      <ProjectList className="section-projects__list" data-aos="fade-up">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={`project ${project.title}`}
              project={project}
              language={language}
            />
          );
        })}
      </ProjectList>

      <div
        className="u-margin-top-medium section-projects__cta"
        data-aos="fade-up"
      >
        <Link href="https://github.com/DeboraBucci?tab=repositories">
          <button className="btn btn--orange section-projects--btn">
            {options.btn.all}
            <i className="fas fa-angle-right section-projects__cta--icon" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;

const ProjectList = styled.ul`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 120rem;

  @media (max-width: 880px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ProjectNavbar = styled.li`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 0 2rem;
  margin: 3rem 0 2rem 0;
  border-radius: 1.2rem;
  font-size: 1.6rem;
  color: white;
  background-color: #2b2b2b;

  li {
    cursor: pointer;
    height: 100%;
    padding: 1rem 2rem;
    transition: all 0.2s;

    &.selected {
      background-color: #d83cff;
    }
  }

  li:not(.selected):hover {
    color: #d83cff;
  }
`;
