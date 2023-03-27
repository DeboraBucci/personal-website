const SmallScreenNavbar = ({
  isWindowSmall,
  isNavbarOpened,
  setIsNavbarOpened,
  linkClickHandler,
  linksList,
}) => {
  const headerHandler = () =>
    isWindowSmall && setIsNavbarOpened((prev) => !prev);

  const tinyNavbar = (
    <nav className="header__sidebar-wrapper">
      <i
        onClick={headerHandler}
        className={`fa-solid fa-bars header__nav--bars ${
          isNavbarOpened ? "header__nav--hidden" : ""
        }`}
      ></i>
      <ul
        className={`header__icon-list ${
          !isNavbarOpened ? "header__icon-list--overlay" : ""
        }`}
      >
        {linksList.map(({ icon, href, key }) => (
          <li key={key} onClick={linkClickHandler}>
            <a href={href}>
              <i className={`${icon} header__nav--icon`} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  const closeBtn = (
    <i
      onClick={headerHandler}
      className={`fa-solid fa-xmark header__nav--bars ${
        isNavbarOpened ? "" : "header__nav--hidden"
      }`}
    ></i>
  );

  return isWindowSmall && !isNavbarOpened ? tinyNavbar : closeBtn;
};
export default SmallScreenNavbar;
