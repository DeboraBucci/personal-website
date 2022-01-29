import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p className={classes.subheading}>Let's talk!</p>
        <h2>Contact info</h2>
        <p>A penny for your thoughts!</p>
      </div>
      <ul className={classes.list}>
        <li className={classes["link-box"]}>
          <a
            className={classes.link}
            href="https://www.linkedin.com/in/d%C3%A9bora-bucci-13a07a212/"
            target={"_blank"}
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
        </li>
        <li className={classes["link-box"]}>
          <a
            className={classes.link}
            href="https://github.com/DeboraBucci"
            target={"_blank"}
          >
            <i className="fab fa-github-alt"></i>
            GitHub
          </a>
        </li>
        <li className={classes["link-box"]}>
          <a
            className={classes.link}
            href="mailto:dbucci@protonmail.com"
            target={"_blank"}
          >
            <i className="fas fa-at"></i>
            send me an e-mail
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
