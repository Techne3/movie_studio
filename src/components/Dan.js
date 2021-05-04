import React, { useState, useEffect } from "react";
import data from "../data/dataDan";
import "../styles/danInfo.scss";
import MenuBar from "./MenuBar";

import { Card } from "semantic-ui-react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Dan = () => {
  const [videoPlayer, setVideoPlayer] = useState(null);

  const changeVideo = (video) => setVideoPlayer(video);

  // useEffect(() => {
  //   changeVideo();
  // }, [videoPlayer]);

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

      <div className="dan_wrapper">
        {data.info.map((x) => (
          <>
            <div className="dan_info_container">
              <div>
                <div className="card_container"></div>
                <button onClick={() => changeVideo(x.description)}>Play</button>
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
      {videoPlayer && (
        <div className="VideoPlayerWrapper">
          <p>{videoPlayer}</p>
          <iframe
            title="casts"
            src={videoPlayer}
            style={{
              // position: "absolute",
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
      )}
    </>
  );
};

export default Dan;
