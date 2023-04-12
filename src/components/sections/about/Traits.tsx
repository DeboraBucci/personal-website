import { useContext } from "react";

import LanguageContext from "../../../context/language-context";
import { about, traits } from "../../../database/languages-text";

const Traits = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="traits" data-aos="fade-up">
      <h3 className="heading-tertiary u-margin-bottom-medium">
        {about.titles.traits[language]}
      </h3>
      <ul className="traits__list">
        {traits.map(({ title, content, icon }, i) => (
          <li className="traits__card" key={Math.random()}>
            <i
              className={`${icon} traits__card--icon traits__card--icon-${
                i + 1
              }`}
            ></i>
            <h3 className="traits__card--title ">{title[language]}</h3>
            <span className="traits__card--text"> — {content[language]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Traits;
