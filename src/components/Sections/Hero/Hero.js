import React from "react";
import Typing from "../../Typing/Typing";
import Introduction from "./Introduction";
import Button from "../../Button/Button";
import "./Hero.css";
import "../../../general-styles.css";

const Hero = () => {
  return (
    <section id={"home"} className={"flex column centered "}>
      <div className="introduction-box">
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
      <div className="actions flex centered">
        <Button classes="cv-btn">
          Download CV <i className="fas fa-file-download"></i>
        </Button>
        <Button>
          Contact Me <i className="fas fa-angle-down"></i>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
