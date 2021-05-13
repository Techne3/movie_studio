import React from "react";

import still from "../images/Agg Doc Still (1).jpg";
import { Link } from "react-router-dom";

import "../styles/home.scss";

// function growShrinkLogo() {
//   let Logo = document.getElementById("logo");
//   if (Logo.style !== null) {
//     if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//       Logo.style.fontSize = "25px";
//       Logo.style.backgroundColor = "transparent !important";
//     } else {
//       Logo.style.fontSize = "30px";
//       Logo.style.backgroundColor = "red !important";
//     }
//   }
// }

// window.onscroll = function () {
//   growShrinkLogo();
// };

const Home = () => {
  return (
    <>
      <div className="title_container">
        <h3>Anatomist Films</h3>
      </div>
      <div className="btn_container">
        <Link to="/directors" className="btn_home">
          something
        </Link>
      </div>

      <div className="home_wrapper">
        <img src={still} alt="dancing" className="image_container" />
      </div>
    </>
  );
};

export default Home;
