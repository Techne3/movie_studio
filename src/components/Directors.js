import React, { useState, useEffect } from "react";
import "../styles/directorInfo.scss";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

import dan from "../data/dataDan";
import maitland from "../data/dataMaitland";
import sarah from "../data/dataSarah";
import AboutSarah from "./AboutSarah";
import AboutMaitland from "./AboutMaitland";
import AboutDaniel from "./AboutDaniel";

const Directors = () => {
  const [videoPlayer, setVideoPlayer] = useState(null);
  const [videoCredit, setVideoCredit] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);

  const changeVideo = (video) => {
    setVideoPlayer(video);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeCredits = (credits) => {
    setVideoCredit(credits);
  };

  const changeTitle = (title) => {
    setVideoTitle(title);
  };

  ///

  // window.onscroll = function () {
  //   growShrinkLogo();
  // };

  // function growShrinkLogo() {
  //   var Logo = document.getElementById("Logo");
  //   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
  //     Logo.style.fontSize = "25px";
  //   } else {
  //     Logo.style.fontSize = "35px";
  //   }
  // }

  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  return (
    <>
      <div className="logo_bar">
        <div className="directors_name_container">
          <p>Directors </p>

          <p className="dir_name">
            {" "}
            {activeItem === "daniel"
              ? "Daniel"
              : activeItem === "maitland"
              ? "Maitland"
              : "Sarah"}
          </p>
        </div>
        <Link to="/" className="logos" id="Logo">
          LOGO
        </Link>
      </div>
      <HamburgerMenu />
      {videoPlayer && (
        <>
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
          <div className="credit_wrapper">
            <h3>{videoTitle}</h3>
            <p>{videoCredit}</p>
          </div>
        </>
      )}
      <div className="director_wrapper">
        {activeItem === "daniel"
          ? dan.info.map((x) => (
              <>
                <div
                  className="post"
                  onClick={() => {
                    changeVideo(x.description);
                    changeCredits(x.credits);
                    changeTitle(x.name);
                  }}
                >
                  <div className="video_name">
                    <h2>{x.name}</h2>
                  </div>

                  <img src={x.image} alt="video" />
                  <div className="post-s">
                    <h4>{x.director}</h4>
                    <div className="post-info"></div>
                    {/* <h2>{x.name}</h2> */}
                    {/* <div className="post-info">
                      <h3>hello</h3>
                    </div> */}
                  </div>
                </div>
              </>
            ))
          : activeItem === "maitland"
          ? maitland.info.map((x) => (
              <>
                <div
                  className="post"
                  onClick={() => {
                    changeVideo(x.description);
                    changeCredits(x.credits);
                    changeTitle(x.name);
                  }}
                >
                  <div className="video_name">
                    <h2>{x.name}</h2>
                  </div>

                  <img src={x.image} alt="video" />
                  <div className="post-s">
                    <h4>{x.director}</h4>
                    <div className="post-info"></div>
                    {/* <h2>{x.name}</h2> */}
                    {/* <div className="post-info">
                  <h3>hello</h3>
                </div> */}
                  </div>
                </div>
              </>
            ))
          : sarah.info.map((x) => (
              <>
                <div
                  className="post"
                  onClick={() => {
                    changeVideo(x.description);
                    changeCredits(x.credits);
                    changeTitle(x.name);
                  }}
                >
                  <div className="video_name">
                    <h2>{x.name}</h2>
                  </div>

                  <img src={x.image} alt="video" />
                  <div className="post-s">
                    <h4>{x.director}</h4>
                    <div className="post-info"></div>
                    {/* <h2>{x.name}</h2> */}
                    {/* <div className="post-info">
                  <h3>hello</h3>
                </div> */}
                  </div>
                </div>
              </>
            ))}
      </div>

      <div className="bio_container">
        <h1>
          About{" "}
          {activeItem === "daniel"
            ? "Daniel"
            : activeItem === "maitland"
            ? "Maitland"
            : "Sarah"}
        </h1>{" "}
        <div className="bio_info">
          {activeItem === "sarah" ? (
            <AboutSarah />
          ) : activeItem === "maitland" ? (
            <AboutMaitland />
          ) : (
            <AboutDaniel />
          )}
        </div>
      </div>
    </>
  );
};

export default Directors;
