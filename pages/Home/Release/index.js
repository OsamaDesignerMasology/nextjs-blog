/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import { Images } from "../../../src/theme";

import "bootstrap/dist/css/bootstrap.min.css";

const Release = () => {
  const data = [
    {
      id: 1,
      title: "Dale (Banking Application)",
      description:
        "Our Client Dale requested us to assist experienced developers to create a banking application...",
      image: "/images/re-dale.png",
      appicon: "/images/dale-app.png",
      date: "2010/Present",
      href: "/Dale",
    },
    {
      id: 2,
      title: "Brainwash (Free iOS Based Application)",
      description:
        "Brainwash is our USA-based client who asked us to create a responsive and smart application....",
      image: "/images/re-brainwash.png",
      appicon: "/images/brain-app.png",
      date: "2017/Present",
      href: "/Brainwash",
    },
    {
      id: 3,
      title: "Aimpoint",
      description:
        "Aimpoint is a third-party construction equipment supplier; they required a fully operational...",
      image: "/images/re-aimpoint.png",
      appicon: "/images/aimpoint-app.png",
      date: "2018/Present",
      href: "/Aimspoint",
    },

    {
      id: 4,
      title: "Easy1 (Salon App)",
      description:
        "Our important client Easy1 approached us for the application for their salon business...",
      image: "/images/re-easy1.png",
      appicon: "/images/easy1-app.png",
      date: "2019/Present",
      href: "/Easy1",
    },
    {
      id: 5,
      title: "Time Logger",
      description:
        "An objectual system limited is the hub of innovation in the IT sector. Our mission is to present...",
      image: "/images/re-timelogger.png",
      appicon: "/images/timelogger-app.png",
      date: "2016/Present",
      href: "/TimeLogger",
    },
  ];

  const [image, setImage] = useState(Images.release1);
  const [checkImage, setCheckImage] = useState(false);

  const handleImage = (image, id) => {
    setImage(image);
    setCheckImage(id);
  }; 
   
  return (
    <div className="bg">
      <Fade left  duration={1000}>
      <div className="container-main">
        <div className="row pt-3">
          <div className="col-lg-8 text-start mt-3">
            <h2 className="color-white mt-5 ">
              Our Products Release Timelines
            </h2>
            <p className="color-white release-para">
              Objectual system limited is the hub of high-quality work. We let
              you enhance your market share by creating engaging web & mobile
              applications with other amazing services. OSL is trusted and loved
              for the products.
            </p>
            <div
              className="timeline-area"
              id="fahad-ahmed" 
            >
              <div className="main-container">
                <section id="timeline" className="timeline-outer">
                  <div className="container" id="content">
                    <div className="row">
                      <div className="col s12 m12 l12">
                        <ul className="timeline">
                          {data?.map(function (item, key) {
                            return (
                              <li
                                key={key}
                                onClick={() => handleImage(item.image, item.id)}
                                className="event"
                                data-date={item.date}
                              >
                                <div
                                  className={`bg-black app-icon ${
                                    item.id == checkImage ? "d-block" : "d-none"
                                  }`}
                                >
                                  <img
                                    alt="appIcon"
                                    className="w-100"
                                    src={item.appicon}
                                  />
                                </div>
                                <img
                                  alt="App Image"
                                  className="mobile-release"
                                  src={item.image}
                                />

                                <h3 className="mt-1">{item.title}</h3>
                                <p className="mb-0">{item.description}</p>
                                <a className="cs-read" href={item.href}>
                                  Read More
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            {!image ? (
              <img
                alt="app Image"
                className="left-image"
                style={{ width: "100%", height: "500px" }}
                src="/images/re-dale.png"
              />
            ) : (
              <img
                alt="app Image"
                className="left-image"
                style={{ width: "100%", height: "500px" }}
                src={image}
              />
            )}
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default Release;
