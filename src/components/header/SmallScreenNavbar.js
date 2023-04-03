const SmallScreenNavbar = ({
  isWindowSmall,
  isNavbarOpened,
  setIsNavbarOpened,
  linkClickHandler,
  linksList,
}) => {
  const headerHandler = () =>
    isWindowSmall && setIsNavbarOpened((prev) => !prev);

  const btn = (
    <div
      className={`header__nav--bars ${
        isNavbarOpened ? "header__nav--hidden" : "header__nav--hidden"
      }`}
      onClick={headerHandler}
    >
      <i
        className={`fa-solid ${!isNavbarOpened ? "fa-bars" : "fa-xmark"} `}
      ></i>
    </div>
  );

  const tinyNavbar = (
    <nav className="header__sidebar-wrapper">
      {btn}
      {isWindowSmall && !isNavbarOpened && (
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
      )}
    </nav>
  );

  return tinyNavbar;
};
export default SmallScreenNavbar;
