import React from "react";
import { traits } from "../../../data";

const Traits = () => {
  return (
    <div className="traits">
      <h3 className="heading-tertiary u-margin-bottom-medium">
        Some of my traits
      </h3>
      <ul className="traits__list">
        {traits.map(({ title, content, icon }, i) => (
          <li className="traits__card" key={Math.random()}>
            <i
              className={`${icon} traits__card--icon traits__card--icon-${
                i + 1
              }`}
            ></i>
            <h3 className="traits__card--title ">{title}</h3>
            <span className="traits__card--text"> — {content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Traits;
