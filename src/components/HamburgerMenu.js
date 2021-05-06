import React from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  return (
    <>
      <div className="wrapper">
        <input
          type="checkbox"
          id="menuToggler"
          className="input-toggler"
          value="1"
          autofocus="true"
        />
        <label
          for="menuToggler"
          id="menuTogglerLabel"
          className="menu-toggler"
          role="button"
          aria-pressed="false"
          aria-expanded="false"
          aria-label="Navigation button"
        >
          <span className="menu-toggler__line"></span>
          <span className="menu-toggler__line"></span>
          <span className="menu-toggler__line"></span>
        </label>
        <nav
          id="sidebar"
          className="sidebar"
          role="navigation"
          aria-labelledby="menuTogglerLabel"
          aria-hidden="true"
        >
          <ul
            id="menubar"
            className="menu"
            role="menubar"
            aria-orientation="vertical"
          >
            <li>
              <Link to="/contact" className="menu__link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu__link">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="menu__link">
                Directors
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
