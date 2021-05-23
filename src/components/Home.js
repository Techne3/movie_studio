import React from "react";

import still from "../images/mainHome.jpg";
import { Link } from "react-router-dom";

import "../styles/home.scss";
import HamburgerMenu from "./HamburgerMenu";

import { FaLinkedinIn, FaVimeo, FaVimeoV } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <HamburgerMenu />
      <section className="showcase">
        <header>
          <h2 className="brand_logo">Anatomist Films</h2>
          {/* <div className="toggle">menu</div> */}
        </header>
        <img src={still} alt="video" />
        <div className="overlay"></div>
        <div className="text">
          <h2 className="brand">Anatomist Films</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error a
            ratione quod cupiditate aperiam ea mollitia animi ad reiciendis!
            Iure.
          </p>

          <Link to="/directors">
            <button className="btn_home">Film Makers</button>
          </Link>
        </div>
        {/* <div className="social_links_home">
          <ul className="social">
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaVimeoV />
            </li>
          </ul>
        </div> */}
      </section>
      <div className="menu"></div>
    </>
  );
};

export default Home;
