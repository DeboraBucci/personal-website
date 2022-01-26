import React from "react";
import classes from "./Navbar.module.css";
import Icon from "../UI/Icon";

const Navbar = () => {
  const linksList = [
    { text: "Home", icon: "home", href: "#home", key: "l1" },
    {
      text: "Certifications",
      icon: "award",
      href: "#certifications",
      key: "l2",
    },
    { text: "Portfolio", icon: "briefcase", href: "#portfolio", key: "l3" },
    { text: "Contact", icon: "paper-plane", href: "#contact", key: "l4" },
  ];

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
