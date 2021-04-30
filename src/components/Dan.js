import React from "react";
import data from "../data/dataDan";
import "../styles/danInfo.scss";
import MenuBar from "./MenuBar";

import { Card } from "semantic-ui-react";

const Dan = () => {
  return (
    <>
      <MenuBar />
      <div className="dan_wrapper">
        {data.products.map((x) => (
          <>
            <div className="dan_info_container">
              <div>
                <div className="card_container">
                  <iframe
                    title="casts"
                    src="https://player.vimeo.com/video/529412108?color=ec6445&title=0&byline=0&portrait=0&background=0"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    }}
                    frameborder="0"
                    allow="autoplay; fullscreen;"
                    allowfullscreen
                  ></iframe>
                </div>
                <p className="">
                  Angel came to Big Cat Rescue as a young kitten with a broken
                  leg. She underwent surgery to fix the break, and then was
                  rehabilitated for a second chance out in the wild. She
                  didn&#039;t hesitate leaving the crate on her way to freedom.
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Dan;
