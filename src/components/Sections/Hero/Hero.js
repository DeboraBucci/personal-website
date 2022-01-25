import React from "react";
import Introduction from "./Introduction";
import Button from "../../Button/Button";
import classes from "./Hero.module.css";
import "../../../general-styles.css";

const Hero = () => {
  return (
    <section id={"home"} className={"flex column centered "}>
      <Introduction />
      <div className={classes.actions}>
        <Button classes="cv-btn">
          Download CV
          <i className="fas fa-file-download"></i>
        </Button>
        <Button>
          Contact Me
          <i className="fas fa-angle-down"></i>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
