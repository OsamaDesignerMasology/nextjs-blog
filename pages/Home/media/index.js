/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

import moment from "moment";

const Media = (props) => {
  const { mediaPost } = props;

  return (
    <div className="bg">
      <Fade left duration={1000}>
        <div className="container-main">
          <div className="row">
            <div className="col-lg-8 text-start"></div>
            <div className="col-lg-4 mt-100">
              {/* <div className="input-group mb-3">
              <input
                type="text"
                className="form-control media-input"
                placeholder="Subscribe Here"
                aria-label="Subscribe Here"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append media-area">
                <button
                  className="btn btn-outline-secondary media-btn"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div> */}
              {/* <input className="media-input" type="text" />
            <button className="media-btn">SUBSCRIBE</button> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-start">
              <h2 className="color-white">Media Coverage</h2>
              <p className="color-white media-para">
                Objectual system limited is known for the first-class quality
                and satisfactory outcomes. Numerous businesses are striving hard
                to maximize their productivity through creating excellent mobile
                applications but we already succeed. Here is a look at our media
                insights:
              </p>
            </div>
          </div>
          <div className="service-area">
            <div className="row">
              {mediaPost?.map(function (item, key) {
                let mediaDate = moment(item.date, "YYYY/MM/DD").format("LLLL");
                return (
                  <div key={key} className="col-lg-4 mt-3">
                    <div className="bg-black pb-3 media-section">
                      <img
                        alt="service"
                        className="Image-media"
                        src={item.featured_image_url}
                      />
                      <div className="row mt-2">
                        <div className="col-lg-5 col-5">
                          {/* <p className="ps-2 pr-2 m-0 color-red fs-10">
                          <img
                            alt="youtube"
                            style={{ width: "20px" }}
                            src="/images/youtube.png"
                          />
                          &nbsp; @OBJECTUAL
                        </p> */}
                        </div>
                        <div className="col-lg-7 col-7 text-end">
                          <p className="ps-2 pr-2 m-0 color-white fs-10">
                            <img alt="clcck" src="/images/clock.png" />{" "}
                            {mediaDate}
                          </p>
                        </div>
                      </div>
                      <Link href={item.link}>
                        <h3 className="p-2 pb-0 text-start color-blue mb-1 fs-18 media-head">
                          {item.title.rendered}
                        </h3>
                      </Link>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.content.rendered,
                        }}
                        className="color-white pb-2 mb-0 blog-p"
                      />
                      {/* <p className="p-2 text-start fs-10 color-white">
                  URL Link: &nbsp;
                  <a
                    className="color-blue"
                    href="https://www.youtube.com/watch?v=eTyI-M50Hu4"
                  >
                    https://www.youtube.com/watch?v=eTyI-M50Hu4
                  </a>
                </p> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Media;
