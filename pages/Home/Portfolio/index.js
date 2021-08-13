/* eslint-disable @next/next/no-img-element */
import React from "react";
import Fade from "react-reveal/Fade";

import "bootstrap/dist/css/bootstrap.min.css";
import { Images } from "../../../src/theme";

const Portfolio = (props) => {
  const { images, onClickImage } = props;
  return (
    <div className="bg">
      <Fade left duration={1000}>
        <div className="container-main">
          <div className="row pt-5">
            <div className="col-lg-12 text-start">
              <h2 className="color-white mt-4">Our Portfolio</h2>
              <p className="color-white portfolio-para">
                We take pride in the fact that we have a cluster of happy client
                especially recurring ones as well. OSL makes sure to satisfy our
                customers on the next level so that if they do not have anything
                else to work with us, refer us to their friends.
              </p>
            </div>
          </div>
          <div className="portfolio-area">
            <div className="row flex-inherit">
              {images?.map((item, key) => {
                return (
                  <div
                    onClick={() => onClickImage(key)}
                    key={key}
                    className="portfolio-Image-area mt-1"
                  >
                    <img alt="portfolio" src={item.imageUrl} />
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

export default Portfolio;
