import { createContext } from "react";

export type LanguageContextProps = {
  language: string;
  changeLang: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextProps>({
  language: "",
  changeLang: (_) => {},
});

export default LanguageContext;
