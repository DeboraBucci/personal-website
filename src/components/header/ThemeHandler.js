import { useContext } from "react";
import ThemeContext from "../../context/theme-context";

const ThemeHandler = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const changeThemeHandler = () => toggleTheme();

  return (
    <button className="logo__options--btn" onClick={changeThemeHandler}>
      <i className="fa-solid fa-circle-half-stroke"></i>
    </button>
  );
};
export default ThemeHandler;
