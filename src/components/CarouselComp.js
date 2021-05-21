import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../styles/carousel.scss";

import { Link } from "react-router-dom";

import cats from "../images/cat.jpg";
import cats3 from "../images/cats3.jpg";

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
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 40,
  },
};
// const colors = ["red", "green", "blue", "orange"];

const obj = {
  info: [
    {
      _id: 0,
      names: "dan",
      links: "/daniel",
      img: `${cats}`,
    },
    {
      names: "sarah",
      links: "/sarah",
      img: `${cats3}`,
    },
    {
      names: "maitland",
      links: "/maitland",
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

  // console.log(Object.keys(obj.info.names));
  let names = obj.info.map((x, index) => x.links)[index];
  console.log(names);
  return (
    <div className="names_container">
      <div className="btn_container">
        <Link
          to={`${names}`}
          className={active ? "active" : "inactive"}
          onMouseEnter={() => onClick()}
        >
          {obj.info.map((x, index) => x.names)[index]}
        </Link>
      </div>
    </div>
  );
};
const CarouselComp = ({ deviceType, renderButtonGroupOutside }) => {
  return (
    <>
      <div className="logos_container">
        <Link to="/" className="logos" id="Logo">
          Anatomist Films
        </Link>
      </div>
      <div className="my-own-custom-container">
        <Carousel
          // partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          showDots={true}
          dotListClass="custom-dot-list-style"
          customDot={<CustomDot />}
          renderDotsOutside={renderButtonGroupOutside}
        >
          {obj.info.map((images) => {
            return (
              <>
                <div
                  style={{
                    backgroundImage: `url(${images.img})`,
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "flexEnd",
                    alignItems: "flexEnd",
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
