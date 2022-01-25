import React from "react";
import Typing from "../../Typing/Typing";
import Introduction from "./Introduction";
import "./Hero.css";
import "../../../general-styles.css";

const Hero = () => {
  return (
    <section id={"home"} className={"flex column centered "}>
      <div>
        <Introduction fullName="Débora Bucci" />
        <div className={"profession flex h-centered g-10px"}>
          <span>a</span>
          <span className={"typing inline-blk"}>
            <Typing
              words={[
                "Frontend Developer",
                "Web Designer",
                "Forever Student",
                "Devote Christian",
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
