import React from "react";

const Icon = ({ children, icon, className }) => {
  return <i className={`fas fa-${icon} ${className} `}>{children}</i>;
};

export default Icon;
