import React from "react";
import Icon from "../UI/Icon";
import Link from "../UI/Link";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Created with{" "}
        <Icon icon="fas fa-heart" className="footer__icon--heart" /> and{" "}
        <Link href="https://create-react-app.dev/" className="footer__link">
          React
          <Icon icon="fab fa-react" className="footer__icon--react" />
        </Link>
      </p>
      <p className="footer__text">&copy; Copyright 2022 | Débora Bucci</p>
    </footer>
  );
};

export default Footer;
