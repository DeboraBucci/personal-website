import React from "react";

const Header = ({ title = "TITLE", subtitle = "SECTION" }) => {
  return (
    <header>
      <span className="sub-heading">#{subtitle}</span>
      <h2 className="heading">{title}</h2>
    </header>
  );
};

export default Header;
