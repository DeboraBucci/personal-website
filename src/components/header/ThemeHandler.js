import { useContext, useState, useRef } from "react";
import ThemeContext from "../../context/theme-context";

const ThemeHandler = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const timeoutRef = useRef(null);

  const { toggleTheme } = useContext(ThemeContext);

  const changeThemeHandler = () => {
    setIsMessageVisible(true);
    toggleTheme();

    timeoutRef.current = setTimeout(() => setIsMessageVisible(false), 3000);
  };

  return (
    <div className="theme-btn__wrapper">
      <button
        className="theme-btn logo__options--btn"
        onClick={changeThemeHandler}
      >
        <i className="fa-solid fa-circle-half-stroke"></i>
      </button>

      <span
        className={`theme-btn__msg ${
          isMessageVisible ? "theme-btn__msg--visible" : ""
        }`}
      >
        theme changed!
      </span>
    </div>
  );
};
export default ThemeHandler;
