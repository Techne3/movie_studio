import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/carousel.scss";
import "../styles/sidebar.scss";

import { Link, NavLink } from "react-router-dom";

import sarahCover from "../images/sarah/SarahCover.jpg";
import maitlandCover from "../images/maitland/MaitlandCover.jpg";
import danCover from "../images/dan/DanCover.jpg";

import HamburgerMenu from "./HamburgerMenu";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 1,
    paritialVisibilityGutter: 40,
  },
};
// const colors = ["red", "green", "blue", "orange"];

const obj = {
  info: [
    {
      names: "Maitland Lottimer",
      links: "/maitland",
      img: `${maitlandCover}`,
    },
    {
      names: "Sarah Megysey",
      links: "/sarah",
      img: `${sarahCover}`,
    },
    {
      names: "Daniel Sharkey",
      links: "/daniel",
      img: `${danCover}`,
    },
  ],
};
// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  // console.log(Object.entries(colors.info).color[index], "here is the info");

  let names = obj.info.map((x, index) => x.links)[index];

  console.log(deviceType, "LOOK HERE FOR DEVICE");
  return (
    <div className="names_container">
      <div className="btn_container">
        <Link
          to={`${names}`}
          className={active ? "active_car" : "inactive_car"}
          onMouseEnter={() => onClick()}
        >
          {obj.info.map((x, index) => x.names)[index]}
        </Link>
      </div>
    </div>
  );
};
const CarouselComp = ({ deviceType, renderButtonGroupOutside }, props) => {
  return (
    <>
      <div className="logos_container">
        <Link
          to="/"
          className="logos brand"
          id="Logo"
          style={{ fontSize: "30px" }}
        >
          Anatomist Films
        </Link>
      </div>
      <HamburgerMenu />

      <div className="my-own-custom-container">
        <Carousel
          // partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
          removeArrowOnDeviceType={["desktop", "mobile", "tablet"]}
          showDots={true}
          dotListClass="custom-dot-list-style"
          customDot={<CustomDot />}
          renderDotsOutside={renderButtonGroupOutside}
          infinite={true}
          autoPlay={
            deviceType !== "desktop" || deviceType !== "tablet" ? false : true
          }
          // autoPlay={["mobile"]}
          // autoPlaySpeed={3000}
          // transitionDuration={4000}
          // customTransition="all 1"
        >
          {obj.info.map((images) => {
            return (
              <>
                <div
                  style={{
                    backgroundImage: `url(${images.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  hello
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
export default CarouselComp;
