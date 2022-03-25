import React from "react";
import Link from "../UI/Link";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Created with <i className="fas fa-heart footer__icon--heart" /> and{" "}
        <Link href="https://create-react-app.dev/" className="footer__link">
          React <i className="fab fa-react footer__icon--react" />
        </Link>
      </p>
      <p className="footer__text">&copy; Copyright 2022 | Débora Bucci</p>
    </footer>
  );
};

export default Footer;
