import React from "react";
import { technologies } from "../../../Data";
import classes from "./Technologies.module.css";

const Technologies = () => {
  return (
    <ul className={classes["icons-list"]}>
      {technologies.map(({ text, icon }) => (
        <li className={classes["list-el"]} key={Math.random().toString()}>
          <div className={classes["icon-box"]}>
            <img src={icon} style={{ width: "50px", height: "50px" }} />
          </div>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default Technologies;
