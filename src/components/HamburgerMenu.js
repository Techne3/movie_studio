import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HamburgerMenu = () => {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

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
            {activeItem === "dan" ||
            activeItem === "david" ||
            activeItem === "chris" ? (
              <li>
                <NavLink
                  to={`${activeItem}`}
                  className="menu__link"
                  activeClassName="dan"
                  activeStyle={{ color: "gold" }}
                >
                  {activeItem}
                </NavLink>
              </li>
            ) : null}
            <li>
              <NavLink to="/contact" className="menu__link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="menu__link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="menu__link">
                Directors
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
