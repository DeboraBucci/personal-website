import { useState } from "react";
import ThemeContext from "./theme-context";

const ThemeProvider = (props) => {
  const [newTheme, setNewTheme] = useState(localStorage.getItem("theme"));

  const toggleThemeHandler = () => {
    const currTheme = localStorage.getItem("theme");
    const newTheme = currTheme === "light" ? "dark" : "light";

    setNewTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const themeCtx = {
    theme: newTheme,
    toggleTheme: toggleThemeHandler,
  };

  return (
    <ThemeContext.Provider value={themeCtx}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
