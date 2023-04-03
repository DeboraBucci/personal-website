import { useContext, useEffect, useState } from "react";
import LanguageContext from "../../context/language-context";

const LanguageHandler = ({ headerShrinked }) => {
  const [areLangOptsVisible, setAreLangOptsVisible] = useState(false);
  const { language, changeLang } = useContext(LanguageContext);

  // CLICKS OUTSIDE LANGUAGE OPTIONS
  useEffect(() => {
    const clickOutsideLanguageOptions = (e) =>
      !e.target.closest(".language-btn__wrapper") &&
      closeLanguagesOptsHandler();

    window.addEventListener("click", clickOutsideLanguageOptions);
    return () =>
      window.removeEventListener("click", clickOutsideLanguageOptions);
  }, [headerShrinked]);

  const chosenLangHandler = (e) => {
    const selectedLanguage = e.target.textContent;

    if (selectedLanguage !== language) {
      changeLang(selectedLanguage);
      closeLanguagesOptsHandler();
    }
  };

  const closeLanguagesOptsHandler = () => setAreLangOptsVisible(false);
  const toggleLanguagesOptHandler = () =>
    setAreLangOptsVisible((prev) => !prev);

  return (
    <div className="language-btn__wrapper">
      <button
        className="language-btn logo__options--btn"
        onClick={toggleLanguagesOptHandler}
      >
        <i className="fa-solid fa-language"></i>
      </button>
      <div
        className={`language-btn__opts ${
          areLangOptsVisible ? "language-btn__opts--visible" : ""
        }`}
      >
        {["english", "spanish"].map((el) => (
          <button
            className={el === language ? "language-btn__opts--selected" : ""}
            key={el}
            onClick={chosenLangHandler}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageHandler;
