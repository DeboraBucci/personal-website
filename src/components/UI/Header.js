import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <header className="heading">
      <span className="heading__subtitle">#{subtitle}</span>
      <h2 className="heading-secondary">{title}</h2>
    </header>
  );
};

export default Header;
