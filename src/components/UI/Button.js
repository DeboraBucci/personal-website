import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, className = "default" }) => {
  return (
    <button
      className={`${classes["btn--component"]} ${
        className === "default" ? classes.default : className
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
