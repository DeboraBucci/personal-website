import React, { Fragment } from "react";
import { traits } from "../../../Data";
import Header from "../../UI/Header";
import classes from "./About.module.css";

const About = () => {
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
      </main>
    </Fragment>
  );
};

export default About;
