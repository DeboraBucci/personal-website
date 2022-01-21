import React from "react";
import "./Hero.css";
import "../../general-styles.css";

const Hero = () => {
  return (
    <section className={"flex h-centered v-centered "}>
      <div>
        <p className={" flex h-centered g-10px"}>HELLO !</p>
        <h1 className={"title relative"}>
          <span className="absolute">I'm</span>
          <div
            className={"underline--magical flex v-centered"}
            style={{ width: "320px" }}
          >
            <div>Débora Bucci</div>
          </div>
        </h1>
        <div className={"profession flex h-centered g-10px"}>
          a Web Developer
        </div>
      </div>
    </section>
  );
};

export default Hero;
