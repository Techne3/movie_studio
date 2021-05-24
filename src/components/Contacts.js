import React, { useEffect } from "react";

import mts from "../images/mts.jpg";
import "../styles/newContact.scss";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Contacts() {
  //   const skewImage = () => {
  //     let skewed = document.querySelector(".skewed");
  //     window.addEventListener("scroll", function () {
  //       let value = -10 + window.scrollY / 60;
  //       skewed.style.transform = "skewY(" + value + "deg)";
  //     });
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", skewImage);
  //   }, []);

  return (
    <>
      <HamburgerMenu />
      <div className="header_cont">
        <h1>Autonomist Films</h1>
      </div>
      <div className="skew_contact">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          corrupti dolorem consectetur veritatis ab voluptate beatae doloribus
          esse exercitationem! Voluptates.
        </p>

        <footer>
          <div className="container">
            <div className="sec contact">
              <h2>Contact</h2>
              <ul className="info">
                <li>
                  <span>{/* <FaMapMarkerAlt /> */}</span>
                  <span> 8400 S Upham way, Littleton</span>
                </li>
                <li>
                  <span>{/* <FaPhoneAlt /> */}</span>
                  <span> (720)-555-0000</span>
                </li>
                <li>
                  <span>{/* <GrMail /> */}</span>
                  <span>
                    <a href="mailto:someone@yoursite.com">Email Us</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">© all rights reserved Anatomist Films</div>
        </footer>
      </div>
    </>
  );
}

export default Contacts;
