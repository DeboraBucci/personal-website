import React, { useEffect, useState } from "react";

import { linksList } from "../../data";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const [isHeaderShrinked, setIsHeaderShrinked] = useState(false);
  const [isNavbarOpened, setisNavbarOpened] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const isWindowSmaller1000 = windowSize < 1000;

  // WINDOW WIDTH
  useEffect(() => {
    if (isWindowSmaller1000) setisNavbarOpened(false);

    const handleWindowResize = () => setWindowSize(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowSize, isWindowSmaller1000]);

  // WINDOW SCROLL
  useEffect(() => {
    const windowScrollHandler = () =>
      setIsHeaderShrinked(window.scrollY > 0 ? true : false);

    window.addEventListener("scroll", windowScrollHandler);
    return () => window.removeEventListener("scroll", windowScrollHandler);
  }, [isHeaderShrinked]);

  const headerHandler = () => {
    if (isWindowSmaller1000) setisNavbarOpened((prev) => !prev);
  };

  const linkClickHandler = () => {
    if (isNavbarOpened) setisNavbarOpened(false);
  };

  return (
    <header
      className={`header ${
        isHeaderShrinked && !isWindowSmaller1000 ? "header--shrinked" : ""
      } ${isNavbarOpened ? "header--opened-nav" : ""}`}
    >
      <div className="header__logo-wrapper">
        <div className="header__logo">
          <a
            href="https://github.com/DeboraBucci"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="header__logo-wrapper--options">
          <button>
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
          <button>
            <i className="fa-solid fa-language"></i>
          </button>
        </div>
      </div>

      {isWindowSmaller1000 && !isNavbarOpened ? (
        <div className="header__sidebar-wrapper">
          <i
            onClick={headerHandler}
            className={`fa-solid fa-bars header__nav--bars ${
              isNavbarOpened ? "header__nav--hidden" : ""
            }`}
          ></i>
          <ul
            className={`header__icon-list ${
              !isNavbarOpened ? "header__icon-list--overlay" : ""
            }`}
          >
            {linksList.map(({ text, icon, href, key }) => (
              <li key={key} onClick={linkClickHandler}>
                <a href={href}>
                  <i className={`${icon} header__nav--icon`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <i
          onClick={headerHandler}
          className={`fa-solid fa-xmark header__nav--bars ${
            isNavbarOpened ? "" : "header__nav--hidden"
          }`}
        ></i>
      )}

      <nav
        className={`header__nav ${
          isNavbarOpened ? "header__nav--overlay" : ""
        }`}
      >
        <ul className="header__nav--list">
          {linksList.map(({ text, icon, href, key }) => (
            <li
              className="header__nav--item"
              key={key}
              onClick={linkClickHandler}
            >
              <a className="header__nav--link" href={href}>
                <i className={`${icon} header__nav--icon`} />
                <span className="header__nav--span">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
