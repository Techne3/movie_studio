import React from "react";
import HamburgerMenu from "./HamburgerMenu";

import { Link } from "react-router-dom";

import sarahCover from "../images/sarah/SarahCover.jpg";
import maitlandCover from "../images/maitland/MaitlandCover.jpg";
import danCover from "../images/dan/DanCover.jpg";

import "../styles/filmmakers.scss";

const Filmmakers = () => {
  return (
    <>
      <div className="logos_container">
        <Link
          to="/"
          className="logos brand"
          id="Logo"
          style={{ fontSize: "30px", letterSpacing: "2px" }}
        >
          Autonomist Films
        </Link>
      </div>
      <HamburgerMenu />

      <div className="filmmakers_wrapper">
        <div className="filmmakers_container">
          <div className="filmmakers_images_wrap">
            <div
              className="filmmakers_image"
              style={{
                backgroundImage: `url(${sarahCover})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filmmakers;
