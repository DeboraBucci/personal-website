import React from "react";
import pigGame from "../../imgs/projects/pig-game-project.png";
import googleHomepage from "../../imgs/projects/google-homepage-project.png";
import tributePage from "../../imgs/projects/tribute-page-project.png";
import surveyForm from "../../imgs/projects/survey-form-project.png";
import technicalDocumentation from "../../imgs/projects/technical-documentation-project.png";
import productLanding from "../../imgs/projects/product-landing-project.png";

import classes from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      title: "Tribute Page",
      link: "tribute-page",
      image: tributePage,
      key: "project--01",
    },
    {
      title: "Product Landing Page",
      link: "product-landing-page",
      image: productLanding,
      key: "project--02",
    },
    {
      title: "Pig Game",
      link: "pig-game",
      image: pigGame,
      key: "project--03",
    },
    {
      title: "Google's Homepage",
      link: "google-homepage",
      image: googleHomepage,
      key: "project--04",
    },
    {
      title: "Technical Documentation Page",
      link: "technical-documentation-page",
      image: technicalDocumentation,
      key: "project--05",
    },
    {
      title: "Survey Form",
      link: "survey-form",
      image: surveyForm,
      key: "project--06",
    },
  ];

  const changeElementsColor = (arr, color) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.color = color;
    }
  };

  const selectSpanTitle = (e) => {
    return e.target
      .closest(".project__container")
      .querySelectorAll(".span-title");
  };

  const showColorHandler = (e) => {
    changeElementsColor(selectSpanTitle(e), "#ff7300");
  };

  const hideColorHandler = (e) => {
    changeElementsColor(selectSpanTitle(e), "transparent");
  };

  return (
    <main className={classes.main}>
      {projects.map(({ title, link, image, key }) => {
        return (
          <div
            key={key}
            className={`project__container ${classes.project}`}
            onMouseEnter={showColorHandler}
            onMouseLeave={hideColorHandler}
          >
            <a
              href={`https://deborabucci.github.io/${link}/`}
              target={"_blank"}
              rel="noopener"
            >
              <div className={classes["img-container"]}>
                <img className={classes.img} src={image} />
              </div>

              <h3 className={classes.title}>
                <span className="span-title">&lt;</span>
                {title}
                <span className="span-title">/&gt;</span>
              </h3>
            </a>
          </div>
        );
      })}
    </main>
  );
};

export default Projects;
