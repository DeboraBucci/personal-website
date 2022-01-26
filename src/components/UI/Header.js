import React from "react";
import classes from "./Header.module.css";

const Header = ({ title = "TITLE", subtitle = "SECTION" }) => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <span className={classes.subheading}>#{subtitle}</span>
        <h2 className={classes.heading}>{title}</h2>
      </div>
    </header>
  );
};

export default Header;
