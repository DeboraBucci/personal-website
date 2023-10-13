import { useContext } from "react";

import LanguageContext from "../../../context/language-context";

interface TechnologiesProps {
  title: {[key: string]: string},
  technologiesList: { icon: any; text: string }[],
  className: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ title, technologiesList, className }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className={`u-center-text ${className}`} data-aos="fade-up">
      <h3 className="heading-tertiary u-margin-bottom-big ">
        {title[language]}
      </h3>

      <ul className="technologies__list">
        {technologiesList.map(({ text, icon }) => (
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
