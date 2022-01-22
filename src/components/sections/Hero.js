import React from "react";
import Typing from "./Typing";
import Introduction from "./Introduction";
import "./Hero.css";
import "../../general-styles.css";

const Hero = () => {
  return (
    <section id={"home"} className={"flex h-centered v-centered "}>
      <div>
        <Introduction fullName="Débora Bucci" />
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
