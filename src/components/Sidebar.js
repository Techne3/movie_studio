import React, { useState } from "react";
import "../styles/sidebar.scss";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

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

  return (
    <>
      <div
        className="wrapper"
        // style={{
        //   backgroundImage: `url(${imageChanger})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   height: "100vh",
        // }}
      >
        <div
          className="image_area"
          style={{
            backgroundImage: `url(${imageChanger})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            margin: "2rem",
          }}
        >
          {/* <img src={imageChanger} alt="cat" id="slider" /> */}
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
          <main className="content">
            <div className="logo">
              <h3>LOGO</h3>
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
                  to="/dan"
                  className="menu_link"
                  onMouseEnter={(e) => changeImage(`${cats3}`)}
                >
                  Dan
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
