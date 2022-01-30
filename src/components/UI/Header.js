import React from "react";
import classes from "./Header.module.css";

const Header = ({
  title = "TITLE",
  subtitle = "SECTION",
  className = "default",
}) => {
  return (
    <header className={`${classes.header} ${classes[className]}`}>
      <span className={classes.subheading}>#{subtitle}</span>
      <h2 className={classes.heading}>{title}</h2>
    </header>
  );
};

export default Header;
