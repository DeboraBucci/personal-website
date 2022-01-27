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

        <ul className={classes.list}>
          <h3 className={classes.title}>
            <span className={classes.text}>SOME OF MY TRAITS</span>
          </h3>
          {traits.map(({ title, content }) => (
            <li key={Math.random()}>
              <span className={classes["list-title"]}>{title}</span>
              <span> — {content}</span>
            </li>
          ))}
        </ul>

        <ul className={classes.list}>
          <h3 className={classes.title}>
            <span className={classes.text}>Technologies I Use</span>
          </h3>
          <div className={classes["icon-container"]}>
            {technologies.map(({ text, icon }) => (
              <li
                key={Math.random().toString()}
                onMouseEnter={enableGreyscale}
                onMouseLeave={disableGreyscale}
              >
                <div className={isOver ? classes.grey : ""}>
                  <img src={icon} style={{ width: "50px" }} />
                </div>
                <span>{text}</span>
              </li>
            ))}
          </div>
        </ul>
      </main>
    </Fragment>
  );
};

export default About;
