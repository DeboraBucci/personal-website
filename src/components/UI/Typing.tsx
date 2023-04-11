import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

type TypingProps = {
  words: string[];
  cursorType: string;
};

const Typing: React.FC<TypingProps> = ({ words, cursorType }) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 1500);
  }, []);

  return (
    <>
      {isPageLoaded && (
        <Typewriter
          words={words}
          loop={false}
          cursor
          cursorStyle={cursorType}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      )}
    </>
  );
};

export default Typing;
