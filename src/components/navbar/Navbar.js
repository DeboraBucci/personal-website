import React, { useState } from "react";
import { linksList } from "../../Data";

const Navbar = () => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  const handleNavState = () =>
    isNavbarOpened ? setIsNavbarOpened(false) : setIsNavbarOpened(true);

  return (
    <div className="navigation-wrapper">
      <i
        onClick={handleNavState}
        className={`fa-solid fa-bars navigation__bars ${
          isNavbarOpened ? "hidden" : ""
        }`}
      ></i>
      <nav
        className={`navigation ${isNavbarOpened ? "overlay" : ""}`}
        onClick={handleNavState}
      >
        <i
          onClick={handleNavState}
          className={`fa-solid fa-xmark navigation__bars ${
            isNavbarOpened ? "" : "hidden"
          }`}
        ></i>
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
    </div>
  );
};

export default Navbar;
