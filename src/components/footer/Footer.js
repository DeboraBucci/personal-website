import React from "react";
import Icon from "../UI/Icon";
import Link from "../UI/Link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.info}>
        <p>
          Created with <Icon icon={`fas fa-heart ${classes.heart}`} /> and{" "}
          <Link
            className={classes["link-container"]}
            href="https://create-react-app.dev/"
          >
            <span className={classes.hover}>
              React
              <Icon icon={`fab fa-react ${classes.react}`} />
            </span>
          </Link>
        </p>
      </div>
      <p>&copy; Copyright 2022 | Débora Bucci</p>
    </footer>
  );
};

export default Footer;
