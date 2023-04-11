import { useContext } from "react";

import LanguageContext from "../../../context/language-context";
import { others } from "../../../database/data";
import { about } from "../../../database/languages-text";

const Others = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="others u-center-text">
      <h3 className="heading-tertiary u-margin-bottom-medium ">
        {about.titles.others[language]}
      </h3>

      <ul className="others__list">
        {others.map(({ text, icon }) => (
          <li className="others__item" key={Math.random().toString()}>
            <div className="others__item--img-container">
              <img
                alt={`${icon} icon`}
                src={icon}
                style={{ width: "50px", height: "50px" }}
                className="others__item--img"
              />
            </div>
            <span className="others__item--text">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Others;
