import React, { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";

import { Link } from "react-router-dom";
import band from "../images/band.jpg";

import {
  FaLinkedinIn,
  FaVimeo,
  FaVimeoV,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import mts from "../images/mts.jpg";
import "../styles/contact.scss";
import Home from "./Home";

const Contact = () => {
  const [headerContact, setHeaderContact] = useState("header_contact");
  const [borderContact, setBorderContact] = useState("boarder_shadow_Contact");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 5) {
      setHeaderContact("header_contact");
      setBorderContact("border_shadow_contact");
    } else if (window.scrollY > 5) {
      setHeaderContact("header2_contact");
      setBorderContact("no_border_shadow_contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <>
      {/* <div className={borderContact}>
        <Link to="/" className={headerContact} id="Logo_contact">
          Autonomist Films
        </Link>
      </div> */}
      <HamburgerMenu />
      <div className="contact_wrapper">
        <div className="logo_contact">
          <p>Contact</p>
          <h1>Autonomist Films</h1>
        </div>
        <div className="contact_info_container">
          <div className="contact_info">
            <h1>Autonomist Films Team</h1>
            <div className="data">
              <h4>Contact Us</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="topImgContainer">
          <div
            className="topImg"
            style={{
              backgroundImage: `url(${band})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              justifyContent: "center",
              alignItems: "center",
              height: "450px",
              width: "100%",
            }}
          ></div>
        </div>
        <footer>
          <div className="copyright">© copyright Brikolage Lab</div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
