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
            {activeItem === "daniel" ||
            activeItem === "sarah" ||
            activeItem === "maitland" ? (
              <li>
                <NavLink
                  to={`${activeItem}`}
                  className="menu__link"
                  activeClassName="daniel"
                  activeStyle={{ color: "gold" }}
                >
                  {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}
                </NavLink>
              </li>
            ) : null}
            <li>
              <NavLink
                exact
                to="/"
                className="menu__link"
                activeStyle={{ color: "gold" }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="menu__link"
                activeStyle={{ color: "gold" }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="menu__link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/directors" className="menu__link">
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
