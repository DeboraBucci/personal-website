import React from "react";
import classes from "./Navbar.module.css";
import Icon from "../UI/Icon";
import { linksList } from "../../Data";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes["navbar-list"]}>
        {linksList.map(({ text, icon, href, key }) => (
          <li className={classes["link-container"]} key={key}>
            <a className={`${classes.link} ${classes.hover}`} href={href}>
              <Icon icon={icon} />
              <span className={classes.span}>{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
