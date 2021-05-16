import React from "react";

import still from "../images/Agg Doc Still (1).jpg";
import { Link } from "react-router-dom";

import "../styles/home.scss";

const Home = () => {
  return (
    <>
      <section className="showcase">
        <header>
          <h2 className="logo_home">Anatomist Films</h2>
          <div className="toggle">menu</div>
        </header>
        <img src={still} alt="video" />
        <div className="overlay"></div>
        <div className="text">
          <h2>Anatomist Films</h2>
          <p>something about your company</p>

          <Link to="/directors">
            <button className="btn_home">Explore</button>
          </Link>
        </div>
        <ul className="social">
          <li>LinkedIn</li>
          <li>LinkedIn</li>
        </ul>
      </section>
      <div className="menu"></div>
    </>
  );
};

export default Home;
