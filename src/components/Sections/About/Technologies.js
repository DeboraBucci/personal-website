import React, { useState } from "react";
import { technologies } from "../../../Data";
import classes from "./Technologies.module.css";

const Technologies = () => {
  const [isOver, setIsOver] = useState(false);

  const filterOn = () => {
    setIsOver(true);
  };

  const filterOff = () => {
    setIsOver(false);
  };
  return (
    <ul className={classes["icons-container"]}>
      {technologies.map(({ text, icon }) => (
        <li
          className={classes["list-el"]}
          key={Math.random().toString()}
          onMouseEnter={filterOn}
          onMouseLeave={filterOff}
        >
          <div
            className={isOver ? classes["filter-on"] : classes["filter-off"]}
          >
            <img src={icon} style={{ width: "50px", height: "50px" }} />
          </div>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default Technologies;
