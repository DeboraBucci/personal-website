import React, { useContext, useEffect, useState } from "react";

import ThemeContext from "../../context/theme-context";
import LanguageContext from "../../context/language-context";

import logo from "../../assets/logo.webp";
import { linksList } from "../../database/languages-text";

const Navbar = () => {
  const [areLangOptsVisible, setAreLangOptsVisible] = useState(false);
  const [isHeaderShrinked, setIsHeaderShrinked] = useState(false);
  const [isNavbarOpened, setisNavbarOpened] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const themeCtx = useContext(ThemeContext);
  const languageCtx = useContext(LanguageContext);

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

  useEffect(() => {
    const clicks = (e) => {
      if (!e.target.closest(".language-btn__wrapper")) {
        closeLanguagesOptsHandler();
      }
    };

    window.addEventListener("click", clicks);
    return () => window.removeEventListener("click", clicks);
  }, [isHeaderShrinked]);

  const headerHandler = () => {
    if (isWindowSmaller1000) setisNavbarOpened((prev) => !prev);
  };

  const linkClickHandler = () => {
    if (isNavbarOpened) setisNavbarOpened(false);
  };

  const changeThemeHandler = () => {
    themeCtx.toggleTheme();
  };

  const chosenLangHandler = (e) => {
    if (e.target.textContent === languageCtx.language) {
    } else {
      languageCtx.changeLang(e.target.textContent);
      closeLanguagesOptsHandler();
    }
  };

  const toggleLanguagesOptHandler = () =>
    setAreLangOptsVisible((prev) => !prev);
  const closeLanguagesOptsHandler = () => setAreLangOptsVisible(false);

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
          <button
            className="header__logo-wrapper--btn"
            onClick={changeThemeHandler}
          >
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
          <div className="language-btn__wrapper">
            <button
              className="header__logo-wrapper--btn language-btn"
              onClick={toggleLanguagesOptHandler}
            >
              <i className="fa-solid fa-language"></i>
            </button>
            <div
              className={`language-btn__opts ${
                areLangOptsVisible ? "language-btn__opts--visible" : ""
              }`}
            >
              {["english", "spanish"].map((el) => (
                <button
                  className={
                    el === languageCtx.language
                      ? "language-btn__opts--selected"
                      : ""
                  }
                  key={el}
                  onClick={chosenLangHandler}
                >
                  {el}
                </button>
              ))}
            </div>
          </div>
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
            {linksList.map(({ icon, href, key }) => (
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
                <span className="header__nav--span">
                  {text[languageCtx.language]}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
