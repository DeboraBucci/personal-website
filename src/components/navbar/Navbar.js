import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  //// CONTENT ////
  const linksList = [
    { text: "Home", icon: "home", href: "#", key: "l1" },
    { text: "About", icon: "address-card", href: "#", key: "l2" },
    { text: "Portfolio", icon: "briefcase", href: "#", key: "l3" },
    { text: "Contact", icon: "address-book", href: "#", key: "l4" },
  ];
  // -------------------------------------------------- //

  return (
    <nav className={styles.navbar}>
      <ul className={styles["list"]}>
        {linksList.map(({ text, icon, href, key }) => {
          return (
            <li className={styles["link"]} key={key}>
              <i className={`fas fa-${icon}`}></i>
              <a href={href}>{text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
