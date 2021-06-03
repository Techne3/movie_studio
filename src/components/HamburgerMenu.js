import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HamburgerMenu = () => {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);
  const [isSelected, setIsSelected] = useState(false);

  const handleItemClick = (e) => {
    setIsSelected(!isSelected);
  };

  return (
    <>
      <div className="wrapper">
        <input
          type="checkbox"
          id="menuToggler"
          className="input-toggler"
          value="1"
          autofocus={true}
          onClick={() => handleItemClick()}
          checked={isSelected}
        />
        {pathname === "/" || pathname === "/contact" ? (
          <label
            for="menuToggler"
            id="menuTogglerLabel"
            className="menu-toggler"
            role="button"
            aria-pressed="false"
            aria-expanded="false"
            aria-label="Navigation button"
          >
            <span className="menu-toggler__line home_toggler"></span>
            <span className="menu-toggler__line home_toggler"></span>
            <span className="menu-toggler__line home_toggler"></span>
          </label>
        ) : pathname === "/directors" ? (
          <label
            for="menuToggler"
            id="menuTogglerLabel"
            className="menu-toggler"
            role="button"
            aria-pressed="false"
            aria-expanded="false"
            aria-label="Navigation button"
          >
            <span className="menu-toggler__line car_toggler "></span>
            <span className="menu-toggler__line car_toggler "></span>
            <span className="menu-toggler__line car_toggler "></span>
          </label>
        ) : (
          <label
            for="menuToggler"
            id="menuTogglerLabel"
            className="menu-toggler"
            role="button"
            aria-pressed="false"
            aria-expanded="false"
            aria-label="Navigation button"
          >
            <span className="menu-toggler__line  "></span>
            <span className="menu-toggler__line "></span>
            <span className="menu-toggler__line "></span>
          </label>
        )}
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
              <NavLink
                to="/contact"
                className="menu__link"
                activeStyle={{ color: "#ff331a" }}
                onClick={() => handleItemClick()}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/directors"
                className="menu__link"
                activeStyle={{ color: "#ff331a" }}
                onClick={() => handleItemClick()}
              >
                Filmmakers
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
