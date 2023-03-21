import React, { useContext } from "react";

import LanguageContext from "../../../context/language-context";
import { technologies } from "../../../database/data";
import { about } from "../../../database/languages-text";

const Technologies = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="technologies u-center-text">
      <h3 className="heading-tertiary u-margin-bottom-medium ">
        {about.titles.technologies[language]}
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
