import React, { useState } from "react";
import "../styles/sidebar.scss";
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink,
} from "react-router-dom";

import cats from "../images/cat.jpg";
import cats2 from "../images/cat2.jpg";
import cats3 from "../images/cats3.jpg";
import test from "../images/test.gif";
import tests from "../images/tests.gif";

const Sidebar = () => {
  const [imageChanger, setImageChanger] = useState(`${tests}`);

  function changeImage(image) {
    setImageChanger(image);
  }

  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  return (
    <>
      <div className="wrapper">
        <div
          className="image_area"
          style={{
            display: "flex",
            backgroundImage: `url(${imageChanger})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            margin: "4rem 4rem",
          }}
        >
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
                <NavLink
                  to="/"
                  className="menu__link"
                  activeClassName="home"
                  activeStyle={{ color: "gold" }}
                >
                  Directors
                </NavLink>
              </li>
            </ul>
          </nav>
          <main className="content">
            <div className="logos">
              <Link to="/" className="logos">
                LOGO
              </Link>
            </div>
            <ul>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dan"
                  className="menu_link"
                  onMouseEnter={(e) => changeImage(`${cats}`)}
                >
                  Dan
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/david"
                  className="menu_link"
                  onMouseEnter={(e) => changeImage(`${cats3}`)}
                >
                  David
                </Link>
              </li>
              <li>
                <Link to="/dan" className="menu_link">
                  Dan
                </Link>
              </li>
            </ul>
          </main>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
