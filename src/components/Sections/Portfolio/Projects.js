import React from "react";
import classes from "./Projects.module.css";
import { projects } from "../../../Data";

const Projects = () => {
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
