import React from "react";
import styles from "./Header.module.css";

const Header = ({ title = "TITLE", subtitle = "SECTION" }) => {
  return (
    <header className={styles.header}>
      <span className={styles.subheading}>#{subtitle}</span>
      <h2 className={styles.heading}>{title}</h2>
    </header>
  );
};

export default Header;
