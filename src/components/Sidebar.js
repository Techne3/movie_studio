import React from "react";
import "../styles/sidebar.scss";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Sidebar = () => {
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
              <Link to="/Dan" className="menu__link">
                Dan
              </Link>
            </li>
            <li>
              <Link to="/Dan" className="menu__link">
                Dan
              </Link>
            </li>
            <li>
              <Link to="/Dan" className="menu__link">
                Dan
              </Link>
            </li>
            <li>
              <Link to="/Dan" className="menu__link">
                Dan
              </Link>
            </li>
            {/* <li className="menu__item" role"none"><a className="menu__link" href="#" role="menuitem" tabindex="-1">Home</a></li>
        <li className="menu__item" role"none"><a className="menu__link" href="#" role="menuitem" tabindex="-1">Blog</a></li>
        <li className="menu__item" role"none"><a className="menu__link" href="#" role="menuitem" tabindex="-1">Portfolio</a></li>
        <li className="menu__item" role"none"><a className="menu__link" href="#" role="menuitem" tabindex="-1">About</a></li>
        <li className="menu__item" role"none"><a className="menu__link" href="#" role="menuitem" tabindex="-1">Contact</a></li> */}
          </ul>
        </nav>
        <main className="content">
          <ul>
            <li>person1</li>
            <li>person1</li>
            <li>person1</li>
            <li>person1</li>
          </ul>
        </main>
      </div>
    </>
  );
};

export default Sidebar;
