import React from "react";

export function NavLink({ children, to, navigate, setIsNavOpen }) {
  return (
    <div className="header__content__nav__entry ">
      <input
        type="radio"
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        name="header__content__nav__entry"
        id={children}
        title={children}
        className="header__content__nav__entry__input"
        checked={window.location.pathname === to}
        readOnly
        onClick={() => {
          navigate(to);
          if (window.innerWidth < 1000) {
            setIsNavOpen(false);
          }
        }}
      />
      <div className="header__content__nav__entry__content">{children}</div>
    </div>
  );
}
