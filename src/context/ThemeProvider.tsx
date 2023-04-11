import { useState } from "react";
import ThemeContext, { ThemeContextType } from "./theme-context";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [newTheme, setNewTheme] = useState(localStorage.getItem("theme"));

  const toggleThemeHandler = () => {
    const currTheme = localStorage.getItem("theme");
    const newTheme = currTheme === "light" ? "dark" : "light";

    setNewTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const themeCtx: ThemeContextType = {
    theme: newTheme || "",
    toggleTheme: toggleThemeHandler,
  };

  return (
    <ThemeContext.Provider value={themeCtx}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
