import React from "react";
import classes from "./Projects.module.css";
import { projects } from "../../../Data";

const Projects = () => {
  return (
    <div className={classes.projects}>
      {projects.map(({ title, link, num, info }) => {
        return (
          <div className={classes.card} key={`project-${num}`}>
            <div
              className={`${classes["card__side"]} ${classes["card__side--front"]}`}
            >
              <div
                className={`${classes["card__picture"]} ${
                  classes[`card__picture-${num}`]
                }`}
              >
                &nbsp;
              </div>
              <h3 className={classes["card__heading"]}>{title}</h3>

              <div className={classes["card__details"]}>
                <ul className={classes["card__details-list"]}>
                  {info.map((item) => (
                    <li>
                      <span className={classes["item__first-part"]}>
                        {item.title}:
                      </span>
                      <span className={classes["item__second-part"]}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className={`${classes["card__side"]} ${
                classes["card__side--back"]
              } ${classes[`card__side--back-${num}`]}`}
            >
              <div className="card__cta">
                <div className="card__price-box">
                  <h3>
                    <span className="card__heading-span card__heading-span--2">
                      {title}
                    </span>
                  </h3>
                </div>
                <a
                  href={`https://deborabucci.github.io/${link}/`}
                  target={"_blank"}
                  rel="noopener"
                  className="btn btn--white"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
