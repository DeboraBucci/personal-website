import { languages } from "../../../database/data";
import LevelDisplay from "../../UI/LevelDisplay";

const Languages = () => {
  return (
    <div className="languages" data-aos="fade-up">
      <ul className="languages__list">
        {languages.map(({ title, level, language, img }, i) => (
          <li
            className={`languages__item languages__item--${i + 1}`}
            key={language}
          >
            <div className="languages__item--flag">
              <img src={img} alt={language} />
              <span>{language}</span>
            </div>
            <div className="languages__item--level">
              <p>{title}</p>
              <LevelDisplay level={level} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Languages;
