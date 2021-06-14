import React from "react";
import HamburgerMenu from "./HamburgerMenu";

import { Link } from "react-router-dom";

import sarahCover from "../images/sarah/SarahCover.jpg";
import maitlandCover from "../images/maitland/MaitlandCover.jpg";
import danCover from "../images/dan/DanCover.jpg";

import "../styles/filmmakers.scss";
const obj_film = {
  info: [
    {
      names: "MAITLAND LOTTIMER",
      links: "/maitland",
      img: `${maitlandCover}`,
    },
    {
      names: "SARAH MEGYSEY",
      links: "/sarah",
      img: `${sarahCover}`,
    },
    {
      names: "DANIEL SHARKEY",
      links: "/daniel",
      img: `${danCover}`,
    },
  ],
};

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
        <p className="filmmakers_title">FILMMAKERS</p>
      </div>
      <HamburgerMenu />

      <div className="filmmakers_wrapper">
        {obj_film.info.map((directors) => (
          <Link className="links" to={directors.links}>
            <div className="filmmakers_container radio-btns" role="radiogroup">
              <div className="filmmakers_images_wrap">
                <div
                  className="filmmakers_image"
                  style={{
                    backgroundImage: `url(${directors.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div className="img_overlay">{directors.names}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Filmmakers;
