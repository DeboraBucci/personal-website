import React from "react";
import Introduction from "./Introduction";
import Button from "../../UI/Button";
import classes from "./Hero.module.css";
import "../../../general-styles.css";

const Hero = () => {
  return (
    <div className={classes.content}>
      <Introduction />
      <div className={classes.actions}>
        <Button classes={classes["cv-btn"]}>
          Download CV
          <i className="fas fa-file-download"></i>
        </Button>
        <Button>
          Contact Me
          <i className="fas fa-angle-down"></i>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
