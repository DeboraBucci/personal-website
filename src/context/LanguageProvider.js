import { useState } from "react";
import LanguageContext from "./language-context";

const LanguageProvider = (props) => {
  const [currLang, setCurrLang] = useState(localStorage.getItem("language"));

  const changeLangHandler = (newLang) => {
    localStorage.setItem("language", newLang);
    setCurrLang(newLang);
  };

  const langCtx = {
    language: currLang || "english",
    changeLang: changeLangHandler,
  };

  return (
    <LanguageContext.Provider value={langCtx}>
      {props.children}
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;
