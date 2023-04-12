import { NavLink } from "../../database/data-types";

type NavbarProps = {
  linksList: NavLink[];
  language: string;
  isNavbarOpened: boolean;
  linkClickHandler: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  linksList,
  language,
  isNavbarOpened,
  linkClickHandler,
}) => (
  <nav
    className={`header__nav ${isNavbarOpened ? `header__nav--overlay` : ""}`}
  >
    <ul className="header__nav--list" data-aos="fade-left">
      {linksList.map(({ text, icon, href, key }) => {
        return (
          <li
            className="header__nav--item"
            key={key}
            onClick={linkClickHandler}
          >
            <a className="header__nav--link" href={href}>
              <i className={`${icon} header__nav--icon`} />
              <span className="header__nav--span">
                {(text as { [key: string]: string })[language]}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Navbar;
