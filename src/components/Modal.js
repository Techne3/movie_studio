import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../styles/modal.scss";

import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({
  title,
  children,
  onClose,
  duration = 300,
  showCloseBtn,
  credits,
  producer,
  director,
  written,
  cinematography,
  edited,
  staring,
  music,
  audio,
  animation,
  other,
}) => {
  const modal = useRef();
  const modalBg = useRef();
  const modalContent = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    modal.current.classList.add("disable-click");
    modalBg.current.style.transitionDuration = duration + "ms";
    modalContent.current.style.transitionDuration = duration + "ms";

    setTimeout(() => {
      modalBg.current.style.opacity = 1;
      modalContent.current.style.opacity = 1;
      modalContent.current.style.top = 0;
    }, 20);

    setTimeout(() => {
      modal.current.classList.remove("disable-click");
    }, duration + 20);

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [duration]);

  const modalCloseHandler = (e) => {
    e.preventDefault();

    modal.current.classList.add("disable-click");
    modalBg.current.style.opacity = 0;
    modalContent.current.style.opacity = 0;
    modalContent.current.style.top = "-100px";

    setTimeout(() => {
      modal.current.classList.remove("disable-click");
      onClose();
    }, duration);
  };

  return (
    <div className="modal" ref={modal}>
      <div
        className="modal__bg"
        onClick={(e) => modalCloseHandler(e)}
        ref={modalBg}
      ></div>
      <div className="modal__inner" ref={modalContent}>
        <div className="modal__head">
          {showCloseBtn && (
            <AiOutlineClose
              className="showClose"
              onClick={(e) => modalCloseHandler(e)}
            />
          )}
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__foot">
          <h3>{title}</h3>

          <span></span>
          {producer && (
            <p>
              <span>Producer: </span> {producer}
            </p>
          )}
          {director && (
            <p>
              <span>Director: </span>
              {director}
            </p>
          )}
          {written && (
            <p>
              <span>Written By: </span>
              {written}
            </p>
          )}
          {cinematography && (
            <p>
              <span>Cinematography: </span>
              {cinematography}
            </p>
          )}
          {edited && (
            <p>
              <span>Edited: </span>
              {edited}
            </p>
          )}
          {staring && (
            <p>
              <span>Staring: </span>
              {staring}
            </p>
          )}
          {music && (
            <p>
              <span>Music: </span>
              {music}
            </p>
          )}
          {audio && (
            <p>
              <span>Audio: </span>
              {audio}
            </p>
          )}
          {animation && (
            <p>
              <span>Animation: </span>
              {animation}
            </p>
          )}
          {other && (
            <p>
              <span>Other: </span>
              {other}
            </p>
          )}

          {/* <button onClick={(e) => modalCloseHandler(e)}>Close</button> */}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
  showCloseBtn: PropTypes.bool,
};

export default Modal;
