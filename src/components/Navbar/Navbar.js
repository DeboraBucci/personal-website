import React from "react";
import classes from "./Navbar.module.css";
import { linksList } from "../../Data";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes["navbar-list"]}>
        {linksList.map(({ text, icon, href, key }) => (
          <li className={classes["link-container"]} key={key}>
            <a className={`${classes.link} ${classes.hover}`} href={href}>
              <i className={icon} />
              <span className={classes.span}>{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
