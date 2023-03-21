import React, { useContext } from "react";

import LanguageContext from "../../../context/language-context";
import { programmingLanguages } from "../../../database/data";
import { about } from "../../../database/languages-text";

const ProgrammingLanguages = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="languages u-center-text ">
      <h3 className="heading-tertiary u-margin-bottom-big ">
        {about.titles.languages[language]}
      </h3>

      <ul className="languages__list">
        {programmingLanguages.map(({ text, icon }) => (
          <li className="languages__item" key={Math.random().toString()}>
            <div className="languages__item--img-container">
              <img
                alt={`${icon} icon`}
                src={icon}
                style={{ width: "50px", height: "50px" }}
                className="languages__item--img"
              />
            </div>
            <span className="languages__item--text">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgrammingLanguages;
