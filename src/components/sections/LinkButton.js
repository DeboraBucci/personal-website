import React from "react";

const LinkButton = ({
  href = "#",
  text = "Button",
  icon = "",
  classes = "",
}) => {
  return (
    <div className="btn-container">
      <a href={href} className={classes} target="_blank" rel="noopener">
        {text}
        {icon}
      </a>
    </div>
  );
};

export default LinkButton;
