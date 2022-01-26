import React, { Fragment, useState } from "react";
import { technologies, traits } from "../../../Data";
import Header from "../../UI/Header";
import classes from "./About.module.css";

const About = () => {
  const [isOver, setIsOver] = useState(false);

  const enableGreyscale = (e) => {
    setIsOver(true);
  };

  const disableGreyscale = (e) => {
    setIsOver(false);
  };

  return (
    <Fragment>
      <Header title="Get to know me more" subtitle="about me" />
      <main className={classes.container}>
        <p>
          I'm a 21 years-old web-developer who lives in Argentina, in the city
          of Rosario. Ever since I started to design and code websites in March
          of 2021, I absolutely fell in love with it.
        </p>

        <ul className={classes.traits}>
          <h3>
            <span className={classes.text}>SOME OF MY TRAITS</span>
          </h3>
          {traits.map(({ title, content }) => (
            <li key={Math.random()}>
              <span className={classes["list-title"]}>{title}</span>
              <span> — {content}</span>
            </li>
          ))}
        </ul>

        <h3>
          <span className={classes.text}>Technologies</span>
        </h3>
        <ul>
          <h4>I'm Comfortable With:</h4>
          <div className={classes["icon-container"]}>
            {technologies.map((technology) => (
              <li
                key={Math.random().toString()}
                className={-isOver ? classes.grey : ""}
                onMouseEnter={enableGreyscale}
                onMouseLeave={disableGreyscale}
              >
                <img src={technology} style={{ width: "50px" }} />
              </li>
            ))}
          </div>
        </ul>
      </main>
    </Fragment>
  );
};

export default About;
