import React from "react";
import pigGame from "../../imgs/projects/pig-game-project.png";
import googleHomepage from "../../imgs/projects/google-homepage-project.png";
import tributePage from "../../imgs/projects/tribute-page-project.png";
import surveyForm from "../../imgs/projects/survey-form-project.png";
import technicalDocumentation from "../../imgs/projects/technical-documentation-project.png";
import productLanding from "../../imgs/projects/product-landing-project.png";

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

  const selectChildrenOfClosestEl = (e, closest, children) => {
    return e.target.closest(closest).querySelectorAll(children);
  };

  const changeElementsColor = (arr, color) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.color = color;
    }
  };

  const selectSpanTitle = (e) => {
    return selectChildrenOfClosestEl(e, ".project__container", ".span-title");
  };

  const showColorHandler = (e) => {
    changeElementsColor(selectSpanTitle(e), "#ff7300");
  };

  const hideColorHandler = (e) => {
    changeElementsColor(selectSpanTitle(e), "transparent");
  };

  return (
    <main className="projects__container flex centered wrap">
      {projects.map(({ title, link, image, key }) => {
        return (
          <div
            key={key}
            className="project__container overflow-hdn"
            onMouseEnter={showColorHandler}
            onMouseLeave={hideColorHandler}
          >
            <a
              href={`https://deborabucci.github.io/${link}/`}
              target={"_blank"}
              rel="noopener"
            >
              <div className="overflow-hdn">
                <img className="project__img" src={image} />
              </div>

              <h3 className="project__title flex v-centered c-white">
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
