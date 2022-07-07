import React, { useEffect, useState } from "react";
import { linksList } from "../../Data";

const Navbar = () => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const navbarHandler = (bool) => windowSize < 1000 && bool;
  const openNavbarHandler = () =>
    navbarHandler(!isNavbarOpened) && setIsNavbarOpened(true);
  const closeNavbarHandler = () =>
    navbarHandler(isNavbarOpened) && setIsNavbarOpened(false);

  useEffect(() => {
    if (window.innerWidth > 1000) setIsNavbarOpened(false);

    const handleWindowResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowSize]);

  return (
    <div className="navigation-wrapper">
      {windowSize < 1000 && (
        <i
          onClick={openNavbarHandler}
          className={`fa-solid fa-bars navigation__bars ${
            isNavbarOpened ? "hidden" : ""
          }`}
        ></i>
      )}

      <nav
        className={`navigation ${isNavbarOpened ? "overlay" : ""}`}
        onClick={closeNavbarHandler}
      >
        {windowSize < 1000 && (
          <i
            onClick={closeNavbarHandler}
            className={`fa-solid fa-xmark navigation__bars ${
              isNavbarOpened ? "" : "hidden"
            }`}
          ></i>
        )}

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
