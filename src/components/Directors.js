import React, { useState, useEffect } from "react";
import "../styles/danInfo.scss";
import cats from "../images/cat.jpg";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

import dan from "../data/dataDan";
import david from "../data/dataDavid";
import jon from "../data/dataJon";

const Dan = () => {
  const [videoPlayer, setVideoPlayer] = useState(null);

  const changeVideo = (video) => {
    setVideoPlayer(video);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  return (
    <>
      <div className="logos">
        <Link to="/" className="logos">
          LOGO
        </Link>
      </div>
      <HamburgerMenu />
      {videoPlayer && (
        <div
          className="videoPlayerWrapper"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "4rem",
          }}
        >
          <iframe
            title="casts"
            src={videoPlayer}
            style={{
              // position: "absolute",
              // top: "0",
              // left: "0",
              width: "90%",
              height: "100%",
            }}
            frameborder="0"
            allow="autoplay; fullscreen;"
            allowfullscreen
          ></iframe>
        </div>
      )}
      <div className="dan_wrapper">
        {activeItem === "dan"
          ? dan.info.map((x) => (
              <>
                <div
                  className="post"
                  onClick={() => changeVideo(x.description)}
                >
                  <img src={x.image} alt="video" />
                  <div className="post-s">
                    <h2>{x.name}</h2>
                  </div>
                </div>
              </>
            ))
          : activeItem === "david"
          ? david.info.map((x) => (
              <>
                <div
                  className="post"
                  onClick={() => changeVideo(x.description)}
                >
                  <img src={x.image} alt="video" />
                  <div className="post-s">
                    <h2>{x.name}</h2>
                  </div>
                </div>
              </>
            ))
          : jon.info.map((x) => (
              <>
                <div
                  className="post"
                  onClick={() => changeVideo(x.description)}
                >
                  <img src={x.image} alt="video" />
                  <div className="post-s">
                    <h2>{x.name}</h2>
                  </div>
                </div>
              </>
            ))}
      </div>
    </>
  );
};

export default Dan;
