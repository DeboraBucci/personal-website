import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Typing = ({ words, cursorType }) => {
  return (
    <Typewriter
      words={words}
      loop={false}
      cursor
      cursorStyle={cursorType}
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  );
};

export default Typing;
