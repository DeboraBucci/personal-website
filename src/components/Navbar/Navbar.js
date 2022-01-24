import React from "react";
import "./Navbar.css";
import "../../general-styles.css";

const Navbar = () => {
  //// CONTENT ////
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
  // -------------------------------------------------- //

  return (
    <nav className="navbar flex h-centered v-centered">
      <ul className="list flex">
        {linksList.map(({ text, icon, href, key }) => {
          return (
            <li
              className="link flex h-centered c-white g-10px pointer"
              key={key}
            >
              <a href={href}>
                <i className={`fas fa-${icon} inline-blk `}></i>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
