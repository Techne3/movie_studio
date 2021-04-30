import React from "react";
import data from "../data/dataDan";
import "../styles/danInfo.scss";
import MenuBar from "./MenuBar";

import { Card } from "semantic-ui-react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Dan = () => {
  return (
    <>
      <div className="wrapper">
        <div className="image_area">
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
        </div>
      </div>
      {/* <MenuBar /> */}
      <div className="dan_wrapper">
        {data.products.map((x) => (
          <>
            <div className="dan_info_container">
              <div>
                <div className="card_container">
                  <iframe
                    title="casts"
                    src="https://player.vimeo.com/video/529412108?color=ec6445&title=0&byline=0&portrait=0&background=0"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    }}
                    frameborder="0"
                    allow="autoplay; fullscreen;"
                    allowfullscreen
                  ></iframe>
                </div>
                <p className="">
                  Angel came to Big Cat Rescue as a young kitten with a broken
                  leg. She underwent surgery to fix the break, and then was
                  rehabilitated for a second chance out in the wild. She
                  didn&#039;t hesitate leaving the crate on her way to freedom.
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Dan;
