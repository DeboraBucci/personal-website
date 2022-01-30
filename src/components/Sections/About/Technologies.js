import React, { useState } from "react";
import { technologies } from "../../../Data";
import classes from "./Technologies.module.css";

const Technologies = () => {
  const [isHovered, setIsHovered] = useState(false);

  const filterOn = () => {
    setIsHovered(true);
  };

  const filterOff = () => {
    setIsHovered(false);
  };

  return (
    <ul
      onMouseLeave={filterOff}
      onPointerLeave={filterOff}
      className={classes["icons-list"]}
    >
      {technologies.map(({ text, icon }) => (
        <li
          onMouseEnter={filterOn}
          onMouseLeave={filterOff}
          onPointerLeave={filterOff}
          className={`${classes["list-el"]}`}
          key={Math.random().toString()}
        >
          <div
            onMouseLeave={filterOff}
            className={`${classes["icon-box"]}  ${
              isHovered ? classes["filter-on"] : ""
            }`}
          >
            <img
              alt={`${icon} icon`}
              src={icon}
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default Technologies;
