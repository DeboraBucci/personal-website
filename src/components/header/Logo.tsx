import LanguageHandler from "./LanguageHandler";
import ThemeHandler from "./ThemeHandler";

import logo from "../../assets/logo.webp";

interface LogoProps {
  isHeaderShrinked: boolean;
}

const Logo: React.FC<LogoProps> = ({ isHeaderShrinked }) => (
  <div className="logo__wrapper">
    <div className="logo">
      <a
        href="https://github.com/DeboraBucci"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} alt="logo" />
      </a>
    </div>

    <div className="logo__options">
      <ThemeHandler />
      <LanguageHandler headerShrinked={isHeaderShrinked} />
    </div>
  </div>
);

export default Logo;
