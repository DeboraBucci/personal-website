import React, { useContext } from "react";

import Link from "../UI/Link";
import LanguageContext from "../../context/language-context";

import { footer } from "../../database/languages-text";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <p className="footer__text">
        {footer[language][0]} <i className="fas fa-heart footer__icon--heart" />
        {footer[language][1]}
        <Link href="https://create-react-app.dev/" className="footer__link">
          React <i className="fab fa-react footer__icon--react" />
        </Link>
      </p>
      <p className="footer__text">
        &copy; {footer[language][2]} 2022 - 2023 | Débora Bucci
      </p>
    </footer>
  );
};

export default Footer;
