import React from "react";
import { traits } from "../../../Data";
import classes from "./Traits.module.css";

const Traits = () => {
  return (
    <ul className={classes.list}>
      {traits.map(({ title, content }) => (
        <li className={classes.box} key={Math.random()}>
          <div className={classes["title-box"]}>
            <span className={classes.title}>{title}</span>
          </div>
          <span className={classes.text}> — {content}</span>
        </li>
      ))}
    </ul>
  );
};

export default Traits;
