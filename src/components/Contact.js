import React, { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";

import { Link } from "react-router-dom";

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
  const [headerContact, setHeaderContact] = useState("header_Contact");
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
      <div className={borderContact}>
        <Link to="/" className={headerContact} id="Logo_contact">
          Anatomist Films
        </Link>
      </div>
      <HamburgerMenu />
      <div className="contact_wrapper">
        <div className="contact_info_container">
          <div className="contact_info">
            <h3>Our Team</h3>
            <div className="team_members">
              <h4>
                Maitland <div className="test"></div>
              </h4>
              <ul className="info">
                <li>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <span> (720)-555-0000</span>
                </li>
                <li>
                  <span>
                    <GrMail />
                  </span>
                  <span> DanielSharkey@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="team_members">
              <h4>
                Sarah <div className="test"></div>
              </h4>
              <ul className="info">
                <li>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <span> (720)-555-0000</span>
                </li>
                <li>
                  <span>
                    <GrMail />
                  </span>
                  <span> DanielSharkey@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="team_members">
              <h4>
                Daniel<div className="test"></div>
              </h4>
              <ul className="info">
                <li>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <span> (720)-555-0000</span>
                </li>
                <li>
                  <span>
                    <GrMail />
                  </span>
                  <span> DanielSharkey@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="topImgContainer">
          <img src={mts} alt="mountains" className="topImg" />
        </div>
        <footer>
          <div className="container">
            <div className="sec aboutus">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et</p>
              <div className="icons">
                <ul>
                  <li>
                    <FaLinkedinIn className="social_btns" />
                  </li>
                  <li>
                    <FaVimeoV className="social_btns" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="sec quickLinks">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  {" "}
                  <Link to="/maitland" className="links">
                    Maitland Lottimer
                  </Link>
                </li>
                <li>
                  <Link to="/sarah" className="links">
                    Sarah Megysey
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/daniel" className="links">
                    Daniel Sharkey
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sec contact">
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <span> 8400 S Upham way, Littleton, CO</span>
                </li>
                <li>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <span> (720)-555-0000</span>
                </li>
                <li>
                  <span>
                    <GrMail />
                  </span>
                  <span>
                    <a href="mailto:someone@yoursite.com">Email Us</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="copyright">© all rights reserved Anatomist Films</div>
      </div>
    </>
  );
};

export default Contact;
