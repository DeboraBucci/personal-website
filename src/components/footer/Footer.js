import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.info}>
        <p>
          Created with<i className={`fas fa-heart ${classes.heart}`}></i>and{" "}
          <a
            className={classes["link-container"]}
            href="https://create-react-app.dev/"
            target={"_blank"}
          >
            <span className={classes.hover}>
              React<i className={`fab fa-react ${classes.react}`}></i>
            </span>
          </a>
        </p>
      </div>
      <p>&copy; Copyright 2022 | Débora Bucci</p>
    </footer>
  );
};

export default Footer;
