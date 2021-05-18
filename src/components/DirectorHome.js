import React, { useState } from "react";
import "../styles/sidebar.scss";
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink,
} from "react-router-dom";

import cats from "../images/cat.jpg";
import cats3 from "../images/cats3.jpg";
import tests from "../images/tests.gif";

import MakingOf50 from "../images/maitland/MakingOf50.jpg";
import Joes3b from "../images/sarah/Joes3b.jpg";
import stillDan from "../images/mainHome.jpg";

const Sidebar = () => {
  const [imageChanger, setImageChanger] = useState(`${tests}`);

  function changeImage(image) {
    setImageChanger(image);
  }

  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  // function growShrinkLogo() {
  //   let Logo = document.getElementById("Logo");
  //   if (Logo.style.fontSize !== null) {
  //     if (
  //       document.body.scrollTop > 5 ||
  //       document.documentElement.scrollTop > 5
  //     ) {
  //       Logo.style.fontSize = "25px";
  //     } else {
  //       Logo.style.fontSize = "30px";
  //     }
  //   }
  // }

  // window.onscroll = function () {
  //   growShrinkLogo();
  // };

  return (
    <>
      <div className="logos_container">
        <Link to="/" className="logos" id="Logo">
          Anatomist Films
        </Link>
      </div>
      <div className="wrapper">
        <div
          className="image_area"
          id="image_container"
          style={{
            display: "flex",
            backgroundImage: `url(${imageChanger})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            margin: "3rem 5rem",
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
                <Link to="/" className="menu__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="menu__link">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link to="/about" className="menu__link">
                  About
                </Link>
              </li> */}
              <li>
                <NavLink
                  to="/directors"
                  className="menu__link"
                  activeClassName="home"
                  activeStyle={{ color: "#96bfe6" }}
                >
                  Directors
                </NavLink>
              </li>
            </ul>
          </nav>
          <main className="content">
            <ul className="content_links">
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/maitland"
                  className="menu_link_dir"
                  onMouseEnter={(e) => changeImage(`${MakingOf50}`)}
                >
                  Maitland Lottimer
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/sarah"
                  className="menu_link_dir"
                  onMouseEnter={(e) => changeImage(`${Joes3b}`)}
                >
                  Sarah Megysey
                </Link>
              </li>
              <li>
                <Link
                  to="/daniel"
                  className="menu_link_dir"
                  onMouseEnter={(e) => changeImage(`${stillDan}`)}
                >
                  Daniel Sharkey
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
