import { createContext } from "react";

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "",
  toggleTheme: () => {},
});

export default ThemeContext;
