import { useContext } from "react";

import LanguageContext from "../../context/language-context";
import { sectionHeadings } from "../../database/languages-text";

type HeaderProps = {
  section: string;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ section }) => {
  const { language } = useContext(LanguageContext);
  const { title, subtitle } = sectionHeadings[section][language];

  return (
    <header className="heading">
      <span className="heading__subtitle">#{subtitle}</span>
      <h2 className="heading-secondary">{title}</h2>
    </header>
  );
};

export default Header;
