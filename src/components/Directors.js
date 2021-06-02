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
  const [isOpen, setOpen] = useState(false);
  const [producer, setProducer] = useState("");
  const [director, setDirector] = useState("");
  const [written, setWritten] = useState("");
  const [cinematography, setCinematography] = useState("");
  const [edited, setEdited] = useState("");
  const [staring, setStaring] = useState("");
  const [music, setMusic] = useState("");
  const [audio, setAudio] = useState("");
  const [animation, setAnimation] = useState("");
  const [other, setOther] = useState("");

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
    let creditList = () => {
      if (videoInfo.credits) {
        videoInfo.credits.map((creds) => {
          setProducer(creds.produced);
          setDirector(creds.director);
          setWritten(creds.written);
          setCinematography(creds.cinematography);
          setEdited(creds.edited);
          setStaring(creds.staring);
          setMusic(creds.music);
          setAudio(creds.audio);
          setAnimation(creds.animation);
          setOther(creds.other);
        });
      }
    };
    creditList();
  }, [videoInfo.credits]);

  console.log(director, "hereerer");

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
        {videoInfo.video && <></>}
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
              title={videoInfo.title}
              credits={producer}
              producer={producer}
              director={director}
              written={written}
              cinematography={cinematography}
              edited={edited}
              staring={staring}
              music={music}
              audio={audio}
              animation={animation}
              other={other}
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
