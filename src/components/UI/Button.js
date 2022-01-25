import React from "react";
import "./Button.css";

const Button = ({ children, classes = "default" }) => {
  return <button className={`btn--component ${classes}`}>{children}</button>;
};

export default Button;
