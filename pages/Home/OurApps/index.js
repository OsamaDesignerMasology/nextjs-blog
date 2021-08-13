/* eslint-disable @next/next/no-img-element */
import React from "react";
import Fade from "react-reveal/Fade";
import Link from "next/link";

import { Images } from "../../../src/theme";
import "bootstrap/dist/css/bootstrap.min.css";

const OurApps = () => {
  return (
    <div className="bg">
      <Fade left  duration={1000}>
        <div className="container-main">
          <div className="row pt-5">
            <div className="col-lg-12 text-start">
              <h2 className="color-white fw-700 mt-3">
                Our Apps: That we have developed
              </h2>
              <p className="color-white app-para">
                The advanced era is all about beautifully created mobile apps,
                so we have developed our applications to contribute to the
                digital world. Our developers have a strong vision that led them
                to create amazing online platforms to generate easiness in
                diverse areas. We have created plenty of mobile applications
                that are known for their high quality and satisfactory outcomes.
              </p>
            </div>
          </div>
          <div className="apps-area app-own">
            <div className="row flex-app">
              <div className="col-lg-3 col-12 p-0 apps-Image-area">
                <div className="ms-3">
                  <div className="bg-black">
                    <h6 className="text-start color-white pt-3 pb-2 ps-2 pr-2">
                      Marketon
                    </h6>
                    <div className="container-apps">
                      <img
                        alt="apps"
                        src="/images/ourapps/marketon.png"
                        className="image appimge"
                      />
                      {/* <div className="overlay">
                    <div className="text">Download</div>
                    <div className="d-flex w-100 hover-content">
                      <a className="ms-2" href="#">
                        <img
                          alt="Apple"
                          className="w-100"
                          src="/images/apple.png"
                        />
                      </a>
                      <a className="ms-2" href="#">
                        <img
                          alt="Google Play"
                          className="w-100"
                          src="/images/gplay.png"
                        />
                      </a>
                    </div>
                  </div> */}
                    </div>
                  </div>
                  <p className="color-white text-start fs-14 apps-p">
                    Marketon Application offers you amazing discount vouchers &
                    free deals for a lifestyle experience especially at
                    Restaurants, salons.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-12 p-0 apps-Image-area">
                <div className="ms-3 ">
                  <div className="bg-black">
                    <h6 className="text-start color-white pt-3 pb-2 ps-2 pr-2">
                      Store 24x7
                    </h6>
                    <div className="container-apps">
                      <img
                        alt="apps"
                        src="/images/ourapps/store24x7.png"
                        className="image appimge"
                      />
                      <div className="overlay">
                        <div className="text">Download</div>
                        <div className="d-flex w-100 hover-content justify-center">
                          {/* <a className="ms-2" href="#">
                        <img
                          alt="Apple"
                          className="w-100"
                          src="/images/apple.png"
                        />
                      </a> */}
                          <Link href="https://play.google.com/store/apps/details?id=com.store24x7.masology">
                            <a className="ms-2">
                              <img
                                alt="Google Play"
                                className="w-100"
                                src="/images/gplay.png"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="color-white text-start fs-14 apps-p">
                    An all-in-one E-commerce platform for your business needs.
                    Sell, run, and scale your online store at the tip of your
                    fingers.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-12 p-0 apps-Image-area">
                <div className="ms-3 ">
                  <div className="bg-black">
                    <h6 className="text-start color-white pt-3 pb-2 ps-2 pr-2">
                      Timelogger
                    </h6>
                    <div className="container-apps">
                      <img
                        alt="apps"
                        src="/images/ourapps/timelogger.png"
                        className="image appimge"
                      />
                      <div className="overlay">
                        <div className="text">Download</div>
                        <div className="d-flex w-100 hover-content justify-center">
                          {/* <a className="ms-2" href="#">
                        <img
                          alt="Apple"
                          className="w-100"
                          src="/images/apple.png"
                        />
                      </a> */}
                          <Link href="https://play.google.com/store/apps/details?id=com.time_logger">
                            <a className="ms-2">
                              <img
                                alt="Google Play"
                                className="w-100"
                                src="/images/gplay.png"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="color-white text-start fs-14 apps-p">
                    The simplest time tracker to help you get things done. There
                    are several reasons to love timelogger such as time
                    tracking.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-12 p-0 apps-Image-area">
                <div className="ms-3 ">
                  <div className="bg-black">
                    <h6 className="text-start color-white pt-3 pb-2 ps-2 pr-2">
                      Red Zone
                    </h6>
                    <div className="container-apps">
                      <img
                        alt="apps"
                        src="/images/ourapps/redzone.png"
                        className="image appimge"
                      />
                      {/* <div className="overlay">
                    <div className="text">Download</div>
                    <div className="d-flex w-100 hover-content">
                      <a className="ms-2" href="#">
                        <img
                          alt="Apple"
                          className="w-100"
                          src="/images/apple.png"
                        />
                      </a>
                      <a className="ms-2" href="#">
                        <img
                          alt="Google Play"
                          className="w-100"
                          src="/images/gplay.png"
                        />
                      </a>
                    </div>
                  </div> */}
                    </div>
                  </div>
                  <p className="color-white text-start fs-14 apps-p">
                    Red zone makes your life easy in danger location tracking
                    world by making it easy to keep your friends and family
                    protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default OurApps;
