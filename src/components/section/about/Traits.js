import React from "react";
import { traits } from "../../../Data";

const Traits = () => {
  return (
    <div className="traits u-margin-bottom-big ">
      <h3 className="heading-tertiary u-margin-bottom-medium">
        Some of my traits
      </h3>
      <ul className="traits__list">
        {traits.map(({ title, content }) => (
          <li className="traits__card" key={Math.random()}>
            <h3 className="traits__card--title u-margin-bottom-small">
              {title}
            </h3>
            <span className="traits__card--text"> — {content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Traits;
