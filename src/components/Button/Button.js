import React from "react";
import "./Button.css";

const Button = ({ text = "Button", icon = "", classes = "default" }) => {
  return (
    <button className={classes}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
