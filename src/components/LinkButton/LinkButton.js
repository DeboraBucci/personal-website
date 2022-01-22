import React from "react";
import "./LinkButton.css";

const LinkButton = ({
  href = "#",
  text = "Button",
  icon = "",
  classes = "default",
}) => {
  return (
    <a href={href} target="_blank" rel="noopener">
      <button className={classes}>
        {text}
        {icon}
      </button>
    </a>
  );
};

export default LinkButton;
