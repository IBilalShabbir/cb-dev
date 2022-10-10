import React, { useEffect, useLayoutEffect, useState } from "react";
import { X, Menu } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import Nav from "./Nav";

export default function Header() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  function navOpenClose() {
    if (window.innerWidth < 1100) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  }
  useLayoutEffect(() => {
    navOpenClose();
    window.addEventListener("resize", navOpenClose);
    window.addEventListener("scroll", navOpenClose);
  }, []);

  const changeBackgrond = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  useEffect(() => {
    changeBackgrond();
  }, []);

  window.addEventListener("scroll", changeBackgrond);
  return (
    <div className="header header">
      <div className="header__content">
        <Link
          to="/"
          onClick={() => {
            document.getElementById("Home").checked = true;
          }}
          className="header__content__logo"
        >
          Crazy Beings
        </Link>
        {isNavOpen ? (
          <OutsideClickHandler
            onOutsideClick={() => {
              if (window.innerWidth < 1000) {
                setIsNavOpen(false);
              }
            }}
          >
            <Nav navigate={navigate} setIsNavOpen={setIsNavOpen} />
          </OutsideClickHandler>
        ) : null}
        <div className="header__content__button">
          <Link
            to="/talk"
            onClick={() => {
              document
                .getElementsByName("header__content__nav__entry")
                .forEach((item) => {
                  item.checked = false;
                });
            }}
            className="header__content__button__primary"
          >
            LET'S TALK
            <div className="header__content__button__primary__svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-edit-2"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
            </div>
          </Link>
          <button
            className="header__content__button__secondary"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
            title="Menu"
          >
            {isNavOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
