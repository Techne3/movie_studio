import React from "react";

import "../styles/dans_style.scss";

const Dans = () => {
  return (
    <main>
      <section className="cards">
        <div className="card">
          <div className="card_image-container">
            <iframe
              title="cats"
              src="https://player.vimeo.com/video/529412108?color=ec6445&title=0&byline=0&portrait=0"
              width="640"
              height="440"
              frameborder="0"
              allow="autoplay; fullscreen;"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card_content">
            <p className="card_title text--medium">Title or something</p>
            <div className="card_info">
              <p className="text--medium">Card info section</p>
            </div>
            <p className="card_action">cards action</p>
          </div>
        </div>
        <div className="card">
          <div className="card_image-container">
            <iframe
              title="cats"
              src="https://player.vimeo.com/video/529412108?color=ec6445&title=0&byline=0&portrait=0"
              width="640"
              height="440"
              frameborder="0"
              allow="autoplay; fullscreen;"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card_content">
            <p className="card_title text--medium">Title or something</p>
            <div className="card_info">
              <p className="text--medium">Card info section</p>
            </div>
            <p className="card_action">cards action</p>
          </div>
        </div>
        <div className="card">
          <div className="card_image-container">
            <iframe
              title="cats"
              src="https://player.vimeo.com/video/529412108?color=ec6445&title=0&byline=0&portrait=0"
              width="640"
              height="440"
              frameborder="0"
              allow="autoplay; fullscreen;"
              allowfullscreen
            ></iframe>
          </div>
          <div className="card_content">
            <p className="card_title text--medium">Title or something</p>
            <div className="card_info">
              <p className="text--medium">Card info section</p>
            </div>
            <p className="card_action">cards action</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dans;
