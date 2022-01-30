import React from "react";

const Icon = ({ children, icon, className }) => {
  return <i className={`${icon} ${className} `}>{children}</i>;
};

export default Icon;
