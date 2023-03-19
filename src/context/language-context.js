import { createContext } from "react";

const LanguageContext = createContext({
  language: "",
  changeLang: (lang) => {},
});

export default LanguageContext;
