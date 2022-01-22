import React from "react";
import Typing from "./Typing";
import "./Hero.css";
import "../../general-styles.css";

const Hero = () => {
  return (
    <section id={"home"} className={"flex h-centered v-centered "}>
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
          <span>a</span>
          <span className={"typing inline-blk"}>
            <Typing
              words={[
                "Frontend Developer",
                "Forever Student",
                "Devote Christian",
                "Cat Mom",
              ]}
              cursorType={"|"}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
