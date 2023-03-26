import logo from "../../assets/logo.webp";

const Logo = () => (
  <div className="header__logo">
    <a
      href="https://github.com/DeboraBucci"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={logo} alt="logo" />
    </a>
  </div>
);

export default Logo;
