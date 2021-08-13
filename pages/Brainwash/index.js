/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../../src/components/Navigation";

const Brainwash = () => {
  return (
    <div className="nav-none">
      <Head>
        <title>Brainwash</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="portfolioappbg">
        <div>
          <div className="ml-100 mr-100 logo-area pt-5">
            <div className="row">
              <div className="col-lg-7">
                <img
                  style={{ height: "150px" }}
                  alt="about"
                  src="/images/brain/logo.png"
                  className="mt-5 mb-3"
                />
                <h1 className="core-head">
                  Brainwash (Free iOS Based Application)
                </h1>

                <p className="color-white">
                  Brainwash is our USA-based client who asked us to create a
                  responsive and smart application for IOS. Also, he wanted to
                  help a student who lives in a shared apartment or a dorm.
                  Wonder how? Well, the idea behind this concept was to
                  facilitate people by allowing them to experience laundry not
                  the unique way. The motive was to satisfy customers by
                  offering multiple benefits.
                </p>
              </div>
              <div className="col-lg-5 text-center">
                <img
                  alt="about"
                  src="/images/brain/1.png"
                  className="case-study-img-m"
                />
              </div>
            </div>
          </div>
          <div className="ml-100 mr-10">
            <div className="row mt-5">
              <div className="col-lg-8">
                <h1 className="core-head">SUPERIOR LAUNDRY APP SOLUTION</h1>
                {/* <h6 className="core-subhead">This is the Best Part</h6> */}
                <p className="color-white text-start mt-4">
                  Objectual systems limited developed an advanced laundry app
                  solution particularly for students who study abroad with the
                  advanced delivery options and integrated payment software
                  application. The main features of this application:
                  <ul>
                    <li>Easy Washing</li>
                    <li>Laundry Tracking</li>
                    <li>Accessible</li>
                    <li>Payment Gateway Software Application</li>
                  </ul>
                </p>
              </div>
              <div className="col-lg-3 text-center">
                <img
                  alt="about"
                  src="/images/brain/2.png"
                  style={{ height: "320px" }}
                  className="case-study-img-m"
                />
              </div>
            </div>
          </div>
          <div className="ml-100 mr-100">
            <div className="row mt-5">
              <div className="col-lg-6 text-center">
                <img
                  alt="about"
                  src="/images/brain/3.png"
                  style={{ height: "320px" }}
                  className="case-study-img-m"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="core-head">THE CHALLENGES</h1>
                {/* <h6 className="core-subhead text-end">This is the Best Part</h6> */}
                <p className="color-white text-start mt-4">
                  According to our experts, the noticeable challenges during the
                  development phase of applications were:
                  <ul>
                    <li>
                      Developing a highly functional website that can assist
                      both the washer and the client
                    </li>
                    <li>
                      Creating an application with unmatched laundry experience
                      and user-friendly features
                    </li>
                    <li>
                      Offering greatest elasticity with Quick pick-up and
                      hassle-free deliveries
                    </li>
                    <li>
                      Creating an integrated application to let the customers
                      make payments via PayPal
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="pl-100 pr-100 core-center-area pt-3 mt-5 pb-3">
            <div className="row ">
              <div className="col-lg-12 text-center">
                <h1 className="core-head text-center">THE IMPLEMENTATION</h1>
                {/* <h6 className="core-subhead text-center">
                  This is the Best Part
                </h6> */}
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8">
                    <img
                      alt="about"
                      src="/images/brain/4.png"
                      className="w-100"
                    />
                  </div>
                  <div className="col-lg-2"></div>
                </div>

                <p className="color-white text-start mt-4 text-center">
                  Our skilled developer at Objectual systems limited combined to
                  create a smart laundry solution for the students. The
                  beginning phase was to develop a high-end application that has
                  a smart user interface. The innovative approach to execute the
                  accessible features made the process of laundry exciting for
                  students. Some of the main features:
                </p>
                <h6 className="core-subhead color-yellow mt-5 text-center">
                  SUPERIOR AND EASY TO USE APPLICATION
                </h6>
                <p className="color-white text-start text-center">
                  Our professional developers created a multifunctional
                  application that has the most convenient features. To get the
                  highest result, we designed the app according to its nature of
                  laundry. The user can have all the nearest laundry and dry
                  clean shops in a single click.
                </p>
                <h6 className="core-subhead color-yellow mt-5 text-center">
                  ACCESSIBLE TO REACH
                </h6>
                <p className="color-white text-start text-center">
                  With the combination of convenient features and a smart user
                  interface, we created a super easily accessible application.
                  So that the washer and the customer can communicate
                  effectively with the advanced upgraded options.
                </p>
                <h6 className="core-subhead color-yellow mt-5 text-center">
                  SPONTANEOUS AND HASSLE-FREE DELIVERIES
                </h6>
                <p className="color-white text-start text-center">
                  Brainwash allow its user easy pickup and delivery, the washer
                  can pick up the clothes from the place Of the customer. Also,
                  the user can track his laundry through the assigned code. Once
                  the launder gets done with the laundry, he will deliver it to
                  the customer’s doorstep.
                </p>
                <h6 className="core-subhead color-yellow mt-5 text-center">
                  WELL-ORGANIZED PAYMENT GATEWAY SOFTWARE APPLICATION
                </h6>
                <p className="color-white text-start text-center">
                  It allows the customer to make payment via PayPal that turned
                  out the great way.
                </p>
                <h6 className="core-subhead color-yellow mt-5 text-center">
                  AFTERCARE IMPLEMETATION
                </h6>
                <p className="color-white text-start text-center">
                  We love to create a loyal relationship with our clients so we
                  do not leave them after successfully running the software on
                  the server. Therefore, we provided post maintenance to make
                  sure that everything is going well because serving our clients
                  with the best is our top priority.
                </p>
                <h6 className="core-subhead color-yellow mt-5 text-center">
                  DEADLINES
                </h6>
                <p className="color-white text-start text-center">
                  It is an ongoing project but the development phase was
                  finished within 3 months
                </p>
              </div>
            </div>
          </div>
          <div className="pl-100 pr-100 success-area pt-3 mt-5 pb-3 pb-5">
            <div className="row ">
              <div className="col-lg-12 text-center">
                <h1 className="core-head text-center">Success Story</h1>
                <img
                  alt="about"
                  src="/images/brain/icon.png"
                  style={{ height: "130px", width: "130px" }}
                />
                <h6 className="core-subhead mt-2 text-center mb-0 color-white">
                  BRAINWASH
                </h6>
                {/* <p className="m-0 color-white">CEO</p> */}
                <div>
                  <img
                    alt="about"
                    className="float-start"
                    src="/images/quote-start.png"
                    style={{ height: "40px", width: "40px" }}
                  />
                  <br />
                  <p className="color-white text-start mt-3 text-center story-p">
                    Brainwash is offering extra expediency with smart laundry
                    solutions to students who study abroad. They can simply
                    count on Brainwash for a clean laundry anytime, anywhere!
                  </p>
                  <br />
                  <img
                    alt="about"
                    className="float-end"
                    src="/images/quote-end.png"
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Brainwash;
