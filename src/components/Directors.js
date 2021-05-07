import React, { useState, useEffect } from "react";
import "../styles/directorInfo.scss";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

import dan from "../data/dataDan";
import david from "../data/dataDavid";
import jon from "../data/dataJon";

const Directors = () => {
  const [videoPlayer, setVideoPlayer] = useState(null);

  const changeVideo = (video) => {
    setVideoPlayer(video);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  ///

  window.onscroll = function () {
    growShrinkLogo();
  };

  function growShrinkLogo() {
    var Logo = document.getElementById("Logo");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      Logo.style.fontSize = "25px";
    } else {
      Logo.style.fontSize = "35px";
    }
  }

  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  return (
    <>
      <div className="logo_bar">
        <div className="directors_name_container">
          <p>Directors </p>
          <p className="dir_name">Dan</p>
        </div>
        <Link to="/" className="logos" id="Logo">
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
      <div className="director_wrapper">
        {activeItem === "dan"
          ? dan.info.map((x) => (
              <>
                <div
                  className="post"
                  onClick={() => changeVideo(x.description)}
                >
                  <div className="video_name">
                    <h2>Name of video</h2>
                  </div>
                  <img src={x.image} alt="video" />
                  <div className="post-s">
                    <h2>{x.name}</h2>
                    <div className="post-info">
                      <h3>hello</h3>
                    </div>
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
                  <div className="post-info">
                    <p>hello</p>
                  </div>
                </div>
              </>
            ))}
      </div>
    </>
  );
};

export default Directors;
