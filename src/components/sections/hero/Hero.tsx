import React, { useContext } from "react";
import Typing from "../../UI/Typing";

import LanguageContext from "../../../context/language-context";
import { hero } from "../../../database/languages-text.ts";

const Hero = () => {
  const { language } = useContext(LanguageContext);

  const { greeting, firstPart, prep, typing } = hero[language];

  return (
    <section className="hero" id="home">
      <div className="hero__text">
        <p className="hero__text--greeting">{greeting}</p>

        <h1 className="heading-primary">
          <span className="heading-primary__first-part">{firstPart}</span>
          <span className="heading-primary__second-part underline-magical">
            Débora Bucci
          </span>
        </h1>

        <p className="hero__text--professions">
          <span>{prep}</span>
          <span className="hero__text--professions-typing">
            <Typing words={typing} cursorType={"|"} />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
