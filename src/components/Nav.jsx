import React from "react";
import { NavLink } from "./NavLink";

export default function Nav({ navigate, setIsNavOpen }) {
  return (
    <div className="header__content__nav">
      <NavLink setIsNavOpen={setIsNavOpen} to="/" navigate={navigate}>
        Cases
      </NavLink>
      <NavLink setIsNavOpen={setIsNavOpen} to="/services" navigate={navigate}>
        Services
      </NavLink>
      <NavLink setIsNavOpen={setIsNavOpen} to="/process" navigate={navigate}>
        Process
      </NavLink>
      <NavLink setIsNavOpen={setIsNavOpen} to="/about" navigate={navigate}>
        About
      </NavLink>
      <NavLink setIsNavOpen={setIsNavOpen} to="/careers" navigate={navigate}>
        Careers
      </NavLink>
      <NavLink setIsNavOpen={setIsNavOpen} to="/contact" navigate={navigate}>
        Contact
      </NavLink>
      <NavLink setIsNavOpen={setIsNavOpen} to="/news" navigate={navigate}>
        News
      </NavLink>
    </div>
  );
}
