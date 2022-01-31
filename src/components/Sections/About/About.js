import React, { Fragment, useState } from "react";
import { technologies, traits } from "../../../Data";
import Header from "../../UI/Header";
import classes from "./About.module.css";
import Technologies from "./Technologies";
import Traits from "./Traits";

const About = () => {
  // CALCULATE CURRENT AGE //
  const birthYear = new Date(1999, 10, 14);
  const currentYear = new Date();
  const currentAge = Math.floor(
    (currentYear.getTime() - birthYear.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
  // -----------------------------------//

  return (
    <Fragment>
      <Header
        title="Get to know me more"
        subtitle="about me"
        className={"portfolio-heading"}
      />
      <main className={classes["info-container"]}>
        <div className={classes.box}>
          <p>
            I'm a {currentAge} years-old Frontend Developer living in the city
            of Rosario, Argentina. I've been in love with coding and web
            development since March of 2021.
          </p>
        </div>

        <div className={classes.box}>
          <h3 className={classes["list-title"]}>
            <span className={classes.text}>SOME OF MY TRAITS</span>
          </h3>
          <Traits />
        </div>

        <div className={classes.box}>
          <h3 className={classes["list-title"]}>
            <span className={classes.text}>Technologies I Use</span>
          </h3>
          <Technologies />
        </div>
        <div className={classes["last-line"]}></div>
      </main>
    </Fragment>
  );
};

export default About;
