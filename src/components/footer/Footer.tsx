import React, { useContext } from "react";

import Link from "../UI/Link";
import LanguageContext from "../../context/language-context";

import { footer } from "../../database/languages-text.ts";
import icons8 from "../../assets/icons8.svg";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const info = footer[language];

  return (
    <footer className="footer">
      <p className="footer__text">
        {info.otherText[0]} <i className="fas fa-heart footer__icon--heart" />
        {info.otherText[1]}
        <Link href="https://create-react-app.dev/" className="footer__link">
          React <i className="fab fa-react footer__icon--react" />
        </Link>
      </p>
      <p className="footer__icons8">
        {info.icons8}
        <a
          href="https://icons8.com/"
          target="_blank"
          rel="nonopener noreferrer"
        >
          <span>Icons8</span> <img src={icons8} alt="icons8" />
        </a>
        .
      </p>
      <p className="footer__text">
        &copy; {info.otherText[2]} 2022 - 2023 | Débora Bucci
      </p>
    </footer>
  );
};

export default Footer;
