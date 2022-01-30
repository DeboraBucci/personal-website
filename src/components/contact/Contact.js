import React from "react";
import Link from "../UI/Link";
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
          <Link
            className={classes.link}
            href="https://www.linkedin.com/in/d%C3%A9bora-bucci-13a07a212/"
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </Link>
        </li>
        <li className={classes["link-box"]}>
          <Link className={classes.link} href="https://github.com/DeboraBucci">
            <i className="fab fa-github-alt"></i>
            GitHub
          </Link>
        </li>
        <li className={classes["link-box"]}>
          <Link className={classes.link} href="mailto:dbucci@protonmail.com">
            <i className="fas fa-at"></i>
            send me an e-mail
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
