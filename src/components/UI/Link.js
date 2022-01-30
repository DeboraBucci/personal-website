import React from "react";

const Link = ({ href = "#", children, className }) => {
  return (
    <a
      href={href}
      className={className}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Link;
