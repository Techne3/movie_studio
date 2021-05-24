import React, { useState, useEffect } from "react";
import "../styles/directorInfo.scss";
import "../styles/modal.scss";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import Modal from "./Modal";

import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";

import dan from "../data/dataDan";
import maitland from "../data/dataMaitland";
import sarah from "../data/dataSarah";
import AboutSarah from "./AboutSarah";
import AboutMaitland from "./AboutMaitland";
import AboutDaniel from "./AboutDaniel";

const Directors = () => {
  // const [videoPlayer, setVideoPlayer] = useState(null);
  // const [videoCredit, setVideoCredit] = useState(null);
  // const [videoTitle, setVideoTitle] = useState(null);

  const [isOpen, setOpen] = useState(false);

  const [videoInfo, setVideoInfo] = useState([
    {
      video: null,
      credits: null,
      title: null,
    },
  ]);

  const changeVideo = (video, credits, title) => {
    setVideoInfo(video, credits, title);

    // window.scrollTo({ top: 0, behavior: "smooth" });
    setIsModalOpened(true);
  };

  useEffect(
    (videoInfo) => {
      if (videoInfo !== undefined) {
        changeVideo();
      }
    },
    [videoInfo.video, videoInfo.credits, videoInfo.title]
  );

  ///
  const [header, setHeader] = useState("header");
  const [border, setBorder] = useState("boarder_shadow");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 5) {
      setHeader("header");
      setBorder("border_shadow");
    } else if (window.scrollY > 5) {
      setHeader("header2");
      setBorder("no_border_shadow");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <div className={isOpen ? "modal" : "header_wrapper"}>
        <div className={border} id="header_wrapper">
          <div className="directors_name_container">
            <p>Director </p>

            <p className="dir_name">
              {" "}
              {activeItem === "daniel"
                ? "Daniel Sharkey"
                : activeItem === "maitland"
                ? "Maitland Lottimer"
                : "Sarah Megysey"}
            </p>
          </div>
          <Link to="/" className={header} id="logo">
            Anatomist Films
          </Link>
        </div>
        <HamburgerMenu />
        {videoInfo.video && (
          <>
            {/* <div
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
                src={videoInfo.video}
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
              <h3>{videoInfo.title}</h3>
              <p>{videoInfo.credits}</p>
            </div> */}
          </>
        )}
        <div className="director_wrapper">
          {activeItem === "daniel"
            ? dan.info.map((x) => (
                <>
                  <div
                    className="post"
                    onClick={() =>
                      changeVideo({
                        video: x.description,
                        credits: x.credits,
                        title: x.name,
                      })
                    }
                    style={{
                      backgroundImage: `url(${x.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="video_name">
                      <h2>{x.name}</h2>
                    </div>

                    {/* <img src={x.image} alt="video" /> */}
                    <div className="post-s">
                      <h4>{x.director}</h4>
                      <div className="post-info"></div>
                    </div>
                  </div>
                </>
              ))
            : activeItem === "maitland"
            ? maitland.info.map((x) => (
                <>
                  <div
                    className="post"
                    onClick={() =>
                      changeVideo({
                        video: x.description,
                        credits: x.credits,
                        title: x.name,
                      })
                    }
                    style={{
                      backgroundImage: `url(${x.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="video_name">
                      <h2>{x.name}</h2>
                    </div>

                    {/* <img src={x.image} alt="video" /> */}
                    <div className="post-s">
                      <h4>{x.director}</h4>
                      <div className="post-info"></div>
                    </div>
                  </div>
                </>
              ))
            : sarah.info.map((x) => (
                <>
                  <div
                    className="post"
                    onClick={() =>
                      changeVideo({
                        video: x.description,
                        credits: x.credits,
                        title: x.name,
                      })
                    }
                    style={{
                      backgroundImage: `url(${x.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="video_name">
                      <h2>{x.name}</h2>
                    </div>

                    {/* <img src={x.image} alt="video" /> */}
                    <div className="post-s">
                      <h4>{x.director}</h4>
                      <div className="post-info"></div>
                    </div>
                  </div>
                </>
              ))}
        </div>

        <div className="bio_container">
          <h3>
            About{" "}
            {activeItem === "daniel"
              ? "Daniel"
              : activeItem === "maitland"
              ? "Maitland"
              : "Sarah"}
          </h3>{" "}
          <div>
            {activeItem === "sarah" ? (
              <AboutSarah />
            ) : activeItem === "maitland" ? (
              <AboutMaitland />
            ) : (
              <AboutDaniel />
            )}
          </div>
        </div>

        <>
          {isModalOpened && (
            <Modal
              duration={500}
              onClose={() => setIsModalOpened(false)}
              showCloseBtn
              credits={videoInfo.credits}
              title={videoInfo.title}
            >
              <iframe
                title="casts"
                src={videoInfo.video}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                frameborder="0"
                allow="autoplay; fullscreen;"
                allowfullscreen
              ></iframe>
            </Modal>
          )}
        </>
      </div>
    </>
  );
};

export default Directors;
