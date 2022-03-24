import React, { useState } from "react";
import { technologies } from "../../../Data";

const Technologies = () => {
  const [isHovered, setIsHovered] = useState(false);

  const filterOn = () => {
    setIsHovered(true);
  };

  const filterOff = () => {
    setIsHovered(false);
  };

  return (
    <div className="technologies u-center-text">
      <h3 className="heading-tertiary u-margin-bottom-medium ">
        Technologies I Use
      </h3>

      <ul className="technologies__list" onMouseLeave={filterOff}>
        {technologies.map(({ text, icon }) => (
          <li
            className={`technologies__item ${
              isHovered && "technologies__filter-on"
            }`}
            key={Math.random().toString()}
            onMouseEnter={filterOn}
            onMouseLeave={filterOff}
          >
            <div className="technologies__item--img" onMouseLeave={filterOff}>
              <img
                alt={`${icon} icon`}
                src={icon}
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <span className="technologies__item--text">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technologies;
