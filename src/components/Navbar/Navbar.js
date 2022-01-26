import React from "react";
import "./Navbar.css";
import "../../general-styles.css";
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
    <nav className="navbar flex h-centered v-centered">
      <ul className="list flex">
        {linksList.map(({ text, icon, href, key }) => (
          <li className="pointer link-container" key={key}>
            <a className="link flex h-centered g-10px hover" href={href}>
              <Icon icon={icon} />
              <span>{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
