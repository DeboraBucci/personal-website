const Navbar = ({ links, language, isNavbarOpened, linkClickHandler }) => (
  <nav
    className={`header__nav ${isNavbarOpened ? `header__nav--overlay` : ""}`}
  >
    <ul className="header__nav--list">
      {links.map(({ text, icon, href, key }) => (
        <li className="header__nav--item" key={key} onClick={linkClickHandler}>
          <a className="header__nav--link" href={href}>
            <i className={`${icon} header__nav--icon`} />
            <span className="header__nav--span">{text[language]}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
