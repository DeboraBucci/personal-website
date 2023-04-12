import { useContext } from "react";

import LanguageContext from "../../../context/language-context";
import { about } from "../../../database/languages-text";

const Vignettes = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="vignettes u-margin-bottom-medium" data-aos="fade-up">
      <div className="vignettes__line"></div>
      {about.vignettes[language].map((text, i) => (
        <p className={`vignettes--${i + 1}`} key={`vignette ${i + 1}`}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default Vignettes;
