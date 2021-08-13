/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../../src/components/Navigation";

const Easy1 = () => {
  return (
    <div className="nav-none">
      <Head>
        <title>Easy1</title>
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
                  src="/images/easy1/logo.png"
                  className="mt-5 mb-3"
                />
                <h1 className="core-head">Easy1 (Salon App)</h1>

                <p className="color-white">
                  Our important client Easy1 approached us for the application
                  for their salon business. The requirement was that the
                  application should have different features to make the salon
                  management easier like customer communication, booking,
                  employee scheduling, etc.
                </p>
              </div>
              <div className="col-lg-5 text-center">
                <img
                  alt="about"
                  src="/images/easy1/1.png"
                  style={{ height: "320px" }}
                  className="case-study-img-m"
                />
              </div>
            </div>
          </div>
          <div className="ml-100 mr-10">
            <div className="row mt-5">
              <div className="col-lg-7">
                <h1 className="core-head">
                  How Objectual system limited facilities the client
                </h1>
                {/* <h6 className="core-subhead">This is the Best Part</h6> */}
                <p className="color-white text-start mt-4">
                  The expert developers of OSL created an easy-to-use, reliable,
                  simple, and flexible online platform for salon booking. The
                  complete salon management app was created to help managers and
                  owners to manage day-to-day business operations like employee
                  scheduling, customer communication, and so on. This Salon
                  system will assist businesses such as Hair salons, nail
                  salons, Eyelash & Extension salons, Spa, and barbershops.OSL
                  bestows a very prominent online presence by offering amazing
                  ideas and results
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <img
                  alt="about"
                  src="/images/easy1/2.png"
                  className="case-study-img-m w-100"
                />
              </div>
            </div>
          </div>
          <div className="ml-100 mr-100">
            <div className="row mt-5">
              <div className="col-lg-6 text-center">
                <img
                  alt="about"
                  src="/images/easy1/3.png"
                  style={{ height: "320px" }}
                  className="case-study-img-m"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="core-head">CHALLENGES</h1>
                {/* <h6 className="core-subhead text-end">This is the Best Part</h6> */}
                <p className="color-white text-start mt-4">
                  Let’s have a look at some of the major challenges that
                  occurred during the development phase:
                  <ul>
                    <li>
                      Building salon management software for catering needs of
                      salon owners and managers that integrates day-to-day
                      business performance
                    </li>
                    <li>
                      Succoring operations like appointment booking, employee
                      scheduling, customer communication, etc.
                    </li>
                    <li>
                      Providing customizable templates for different salons
                    </li>
                    <li>shortage of time</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="pl-100 pr-100 core-center-area pt-3 mt-5 pb-3">
            <div className="row ">
              <div className="col-lg-12 text-center">
                <h1 className="core-head text-center">
                  STRATEGY AND EXECUTION
                </h1>
                {/* <h6 className="core-subhead text-center">
                  This is the Best Part
                </h6> */}
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8">
                    <img
                      alt="about"
                      src="/images/easy1/4.png"
                      className="w-100"
                    />
                  </div>
                  <div className="col-lg-2"></div>
                </div>

                <p className="color-white text-start mt-4 text-center">
                  OSL breaks the ground by using the unique template and worked
                  tirelessly to bring cutting-edge salon management
                  applications. We created a contemporary website design with
                  productive software to lend a hand to salon owners and
                  managers for managing daily business operations like
                  appointment booking, customer communication, etc. This system
                  will be targeting businesses such as Hair salons, Nail salons,
                  Eyelash extension salons, and barbershops. Fulfilling the
                  distinctive needs of our clients is the top priority of OSL.
                </p>
                <h6 className="core-subhead color-yellow mt-5 text-center">
                  CREATIVE FEATURES
                </h6>
                <p className="color-white text-start text-center">
                  Our team of talented developers worked determinedly to bring
                  something out of the box and ended up bringing a salon
                  management app. The system is based on four users that include
                  clients, employees, customers, and users. Clients can create
                  their profiles by providing personal and business information;
                  salon owners can add their employees. On the other hand, the
                  system will allow owners to categorize the services provided
                  and manage prices by the salon.
                </p>
                <h6 className="core-subhead text-center">
                  Payment and Scheduling Solution
                </h6>
                <p className="color-white text-start text-center">
                  Salon management application provides effective payment
                  solutions. Our ideology is to present top-notch services to
                  salons by providing fingertip solutions.
                </p>
                <h6 className="core-subhead text-center">
                  Effortless Bookings
                </h6>
                <p className="color-white text-start text-center">
                  Booking is a headache process for the salon but we made it
                  easier for our client. We firmly believe in providing
                  hassle-free services. No need to call, and waiting for
                  confirmation emails, gets the booking done through the app.
                </p>
                <h6 className="core-subhead text-center">
                  Bunch of Innovation
                </h6>
                <p className="color-white text-start text-center">
                  We are leaving footprints of innovation in the market by
                  revolutionizing the salon industry. With a salon booking app
                  like Easy1, salon bookings and daily business operations
                  became a piece of cake for salon owners and managers.
                </p>
                <h6 className="core-subhead color-yellow mt-5 text-center">
                  WALLET FUNCTIONALITY
                </h6>
                <p className="color-white text-start text-center">
                  Wallet functionality is implemented in this app with limited
                  features. There will be two methods of payment by cash or
                  paying by points. Debit/Credit will be considered as Cash.
                  Just for reporting purposes for salon Owner & Employees. Users
                  will be allowed to pay cash Debit/Credit against their
                  services or either they will have the option to pay by Points.
                </p>

                <h6 className="core-subhead color-yellow mt-5 text-center">
                  DEADLINES
                </h6>
                <p className="color-white text-start text-center">
                  Our top priority is to fulfill the requirements of our
                  customers and bring forth customer satisfaction by providing
                  unique solutions. OSL firmly believes that time is money for
                  all of us. This project was delivered within 3 months.
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
                  src="/images/easy1/icon.png"
                  style={{ height: "130px", width: "130px" }}
                />
                <h6 className="core-subhead mt-2 text-center mb-0 color-white">
                  EASY1
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
                    An objectual systems limited is sprinkling magic by
                    bestowing mind-blowing services. They created a salon
                    management app proficiently within a little period. I
                    believe they are better than the rest because of their
                    professionalism.
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

export default Easy1;
