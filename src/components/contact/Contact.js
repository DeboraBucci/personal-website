import React from "react";
import Icon from "../UI/Icon";
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
            <Icon icon={"fab fa-linkedin"} />
            LinkedIn
          </Link>
        </li>
        <li className={classes["link-box"]}>
          <Link className={classes.link} href="https://github.com/DeboraBucci">
            <Icon icon={"fab fa-github-alt"} />
            GitHub
          </Link>
        </li>
        <li className={classes["link-box"]}>
          <Link className={classes.link} href="mailto:dbucci@protonmail.com">
            <Icon icon={"fas fa-at"} />
            send me an e-mail
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
