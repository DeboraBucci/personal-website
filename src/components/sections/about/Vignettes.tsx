import React, { useContext } from "react";

import LanguageContext from "../../../context/language-context.js";
import { about } from "../../../database/languages-text.js";

const Vignettes = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="vignettes u-margin-bottom-medium">
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
