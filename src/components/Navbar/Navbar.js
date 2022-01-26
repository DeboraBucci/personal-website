import React from "react";
import classes from "./Navbar.module.css";
import Icon from "../UI/Icon";
import { linksList } from "../../Data";

const Navbar = () => {
  return (
    <nav className={`${classes.navbar} flex centered`}>
      <ul className={`${classes.list} flex`}>
        {linksList.map(({ text, icon, href, key }) => (
          <li className="pointer link-container" key={key}>
            <a className={`${classes.link} flex h-centered hover`} href={href}>
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
