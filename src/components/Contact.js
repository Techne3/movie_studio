import React from "react";
import HamburgerMenu from "./HamburgerMenu";

import { Link } from "react-router-dom";
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
      <div className="contact_wrapper">
        <div className="team_info_container">
          <h1>Our Team</h1>
        </div>
        <div className="image_container">image</div>
        <div className="contact_footer">footer</div>
      </div>
    </>
  );
};

export default Contact;
