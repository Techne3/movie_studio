import React from "react";
import data from "../data/dataDan";
import "../styles/danInfo.scss";
import MenuBar from "./MenuBar";

const Dan = () => {
  return (
    <>
      <MenuBar />
      {/* <div className="dan_wrapper">
        {data.products.map((x) => (
          <>
            <div className="dan_info_container">
              <div className="dan_info_card">
                <h1>{x.category}</h1>
                <iframe
                  title="cats"
                  src={x.description}
                  width="300"
                  height="500"
                  frameborder="0"
                  allow="autoplay; fullscreen; "
                  allowfullscreen
                ></iframe>
                <p>
                  <a href="https://vimeo.com/341212112">Cat_Walk</a> from{" "}
                  <a href="https://vimeo.com/user7961950">vimalanandan.s</a> on{" "}
                </p>
              </div>
            </div>
          </>
        ))}
      </div> */}
    </>
  );
};

export default Dan;
