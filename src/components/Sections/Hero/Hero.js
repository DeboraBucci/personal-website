import React from "react";
import Typing from "../../UI/Typing";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__text">
        <p className="hero__text--greeting">Hello!</p>

        <h1 className="heading-primary">
          <span className="heading-primary__first-part">I'm</span>
          <span className="heading-primary__second-part underline--magical">
            Débora Bucci
          </span>
        </h1>

        <p className="hero__text--professions">
          <span>a</span>
          <span className="hero__text--professions-typing">
            <Typing
              words={["Frontend Developer", "Web Designer", "Forever Student"]}
              cursorType={"|"}
            />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
