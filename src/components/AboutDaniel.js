import React from "react";

import hig from "../images/hig.jpeg";
import "../styles/directorInfo.scss";

import { FaLinkedinIn, FaVimeo, FaVimeoV } from "react-icons/fa";

const AboutDaniel = () => {
  return (
    <div className="bio_info">
      <img src={hig} alt="head-shot" className="head_shot" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="icon">
        <ul>
          <li>
            <FaLinkedinIn className="social_btn" />
          </li>
          <li>
            <FaVimeoV className="social_btn" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutDaniel;
