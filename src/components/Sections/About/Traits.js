import React from "react";
import { traits } from "../../../Data";
import classes from "./Traits.module.css";

const Traits = () => {
  return (
    <ul className={classes.list}>
      {traits.map(({ title, content, i }) => (
        <li className={classes["traits-box"]} key={Math.random()}>
          <div className={classes["triangle-parent"]}>
            <span className={classes["traits-heading"]}>{title}</span>
          </div>
          <span className={classes["traits-text"]}> — {content}</span>
        </li>
      ))}
    </ul>
  );
};

export default Traits;
