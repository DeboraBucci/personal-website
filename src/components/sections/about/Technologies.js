import React from "react";
import { technologies } from "../../../Data";

const Technologies = () => {
  return (
    <div className="technologies u-center-text">
      <h3 className="heading-tertiary u-margin-bottom-medium ">
        Technologies I Use
      </h3>

      <ul className="technologies__list">
        {technologies.map(({ text, icon }) => (
          <li className="technologies__item" key={Math.random().toString()}>
            <div className="technologies__item--img-container">
              <img
                alt={`${icon} icon`}
                src={icon}
                style={{ width: "50px", height: "50px" }}
                className="technologies__item--img"
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
