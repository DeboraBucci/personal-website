import React, { Fragment, useState } from "react";
import { technologies, traits } from "../../../Data";
import Header from "../../UI/Header";
import classes from "./About.module.css";
import Technologies from "./Technologies";
import Traits from "./Traits";

const About = () => {
  return (
    <Fragment>
      <Header title="Get to know me more" subtitle="about me" />
      <main className={classes["info-container"]}>
        <div className={classes.box}>
          <p>
            I'm a 22 years-old web-developer who lives in Argentina, in the city
            of Rosario. Ever since I started to design and code websites in
            March of 2021, I absolutely fell in love with it.
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
