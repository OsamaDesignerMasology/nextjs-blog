/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";

const OverlaySlider = (props) => {
  const { images, onClickClose, activeImageIndex } = props;
  const [activeIndex, setActiveIndex] = useState(activeImageIndex);
  const [zoomLevel, setZoomLevel] = useState(1);

  const zoomIn = () => {
    setZoomLevel(zoomLevel >= 2 ? 2 : zoomLevel + 0.1);
  };

  const zoomOut = () => {
    setZoomLevel(zoomLevel <= 1 ? 1 : zoomLevel - 0.1);
  };

  return (
    <div className="overlay-slider">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          className="ms-5"
          onClick={() =>
            setActiveIndex(
              activeIndex === 0 ? images.length - 1 : activeIndex - 1
            )
          }
        >
          <img
            alt="about"
            src="/images/arrow-left.png"
            className="arrow-control"
          />
        </span>
        <span
          style={{
            height: "100vh",
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          <img
            alt="Slider"
            src={images[activeIndex].imageUrl}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transform: `scale(${zoomLevel})`,
            }}
          />
        </span>
        <span
          className="msr-4"
          onClick={() =>
            setActiveIndex(
              images.length === activeIndex + 1 ? 0 : activeIndex + 1
            )
          }
        >
          <img
            alt="about"
            src="/images/arrow-right.png"
            className="arrow-control"
          />
        </span>
      </div>
      <span className="overlay-action">
        <span onClick={() => onClickClose(false)} className="p-1">
          <img alt="about" src="/images/close.png" className="action-img" />
        </span>

        <span className="p-1">
          <img
            alt="about"
            onClick={zoomIn}
            src="/images/zoom-in.png"
            className="action-img"
          />
        </span>
        <span onClick={zoomOut} className="p-1">
          <img alt="about" src="/images/zoom-out.png" className="action-img" />
        </span>
      </span>
    </div>
  );
};

export default OverlaySlider;
