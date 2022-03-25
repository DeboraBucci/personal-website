import React from "react";
import { linksList } from "../../Data";

const Navbar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {linksList.map(({ text, icon, href, key }) => (
          <li className="navigation__item" key={key}>
            <a className="navigation__link" href={href}>
              <i className={`${icon} navigation__icon`} />
              <span className="navigation__span">{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
