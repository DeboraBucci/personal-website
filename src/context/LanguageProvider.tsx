import { useState } from "react";
import LanguageContext, { LanguageContextProps } from "./language-context";

type LanguageProviderProps = {
  children: React.ReactNode;
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currLang, setCurrLang] = useState(localStorage.getItem("language"));

  const changeLangHandler = (newLang: string) => {
    localStorage.setItem("language", newLang);
    setCurrLang(newLang);
  };

  const langCtx: LanguageContextProps = {
    language: currLang || "english",
    changeLang: changeLangHandler,
  };

  return (
    <LanguageContext.Provider value={langCtx}>
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;
