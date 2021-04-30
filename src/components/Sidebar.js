import React, { useState } from "react";
import "../styles/sidebar.scss";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import cats from "../images/cat.jpg";
import cats2 from "../images/cat2.jpg";
import cats3 from "../images/cats3.jpg";

const Sidebar = () => {
  const [imageChanger, setImageChanger] = useState(`${cats2}`);

  function changeImage(image) {
    setImageChanger(image);
  }

  return (
    <>
      <div
        className="wrapper"
        style={{
          backgroundImage: `url(${imageChanger})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="image_area">
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
                <Link to="/something" className="menu__link">
                  something
                </Link>
              </li>
              {/* <li>
              <Link to="/Dan" className="menu__link">
                Dan
              </Link>
            </li> */}
            </ul>
          </nav>

          <main className="content">
            <div className="logo">
              <h3>LOGO</h3>
            </div>
            <ul>
              <li>
                <Link
                  to="/dan"
                  className="menu__link"
                  onMouseEnter={(e) => changeImage(`${cats}`)}
                >
                  Dan
                </Link>
              </li>
              <li>
                <Link
                  to="/dan"
                  className="menu__link"
                  onMouseEnter={(e) => changeImage(`${cats3}`)}
                >
                  Dan
                </Link>
              </li>
              <li>
                <Link to="/dan" className="menu__link">
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
