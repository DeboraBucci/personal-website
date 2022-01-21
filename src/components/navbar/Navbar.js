import React from "react";
import "./Navbar.css";
import "../../general-styles.css";

const Navbar = () => {
  //// CONTENT ////
  const linksList = [
    { text: "Home", icon: "home", href: "#", key: "l1" },
    { text: "Certifications", icon: "address-card", href: "#", key: "l2" },
    { text: "Portfolio", icon: "briefcase", href: "#", key: "l3" },
    { text: "Contact", icon: "address-book", href: "#", key: "l4" },
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
              <i className={`fas fa-${icon} inline-blk `}></i>
              <a href={href}>{text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
