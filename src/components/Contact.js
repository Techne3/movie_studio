import React from "react";
import HamburgerMenu from "./HamburgerMenu";

import { Link } from "react-router-dom";

import { FaLinkedinIn, FaVimeo, FaVimeoV } from "react-icons/fa";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <>
      <div className="logos">
        <Link to="/" className="logos">
          LOGO
        </Link>
      </div>
      <HamburgerMenu />
      <footer>
        <div className="container">
          <div className="sec aboutus">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              repellendus veritatis exercitationem sapiente ipsam delectus error
              quas dolor nisi ex rem tempore, temporibus veniam ipsa illo fuga,
              eos non minus.
            </p>
          </div>
          <ul className="sci">
            <li>
              <FaLinkedinIn className="social_btn" />
            </li>
            <li>
              <FaVimeoV className="social_btn" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Contact;
