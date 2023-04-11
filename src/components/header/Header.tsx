import { useContext, useEffect, useState } from "react";

import LanguageContext from "../../context/language-context";

import { linksList } from "../../database/languages-text";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SmallScreenNavbar from "./SmallScreenNavbar";

const Header = () => {
  const [isHeaderShrinked, setIsHeaderShrinked] = useState(false);
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const languageCtx = useContext(LanguageContext);

  const isWindowSmall = windowWidth < 1000;

  const linkClickHandler = () => isNavbarOpened && setIsNavbarOpened(false);

  // DETECT WINDOW WIDTH
  useEffect(() => {
    if (isWindowSmall) setIsNavbarOpened(false);

    const handleWindowResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowWidth, isWindowSmall]);

  // DETECT HEADER SHRINKING
  useEffect(() => {
    const windowScrollHandler = () =>
      setIsHeaderShrinked(window.scrollY > 0 ? true : false);

    window.addEventListener("scroll", windowScrollHandler);
    return () => window.removeEventListener("scroll", windowScrollHandler);
  }, [isHeaderShrinked]);

  return (
    <header
      className={`header ${
        isHeaderShrinked && !isWindowSmall ? "header--shrinked" : ""
      } ${isNavbarOpened ? "header--opened-nav" : ""}`}
    >
      <Logo isHeaderShrinked={isHeaderShrinked} />

      {isWindowSmall && (
        <SmallScreenNavbar
          linksList={linksList}
          isNavbarOpened={isNavbarOpened}
          setIsNavbarOpened={setIsNavbarOpened}
          isWindowSmall={isWindowSmall}
          linkClickHandler={linkClickHandler}
        />
      )}

      <Navbar
        linksList={linksList}
        language={languageCtx.language}
        isNavbarOpened={isNavbarOpened}
        linkClickHandler={linkClickHandler}
      />
    </header>
  );
};
export default Header;
