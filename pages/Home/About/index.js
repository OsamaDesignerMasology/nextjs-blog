/* eslint-disable @next/next/no-img-element */

import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="bg">
      <div className="container-main">
        <div className="about-area">
          <div className="row">
            <Fade left duration={1000}>
              <div className="col-lg-6 text-start">
                <div className="about-col">
                  <h2 className="mt-5 color-white">
                    A Software Company of Perfectionism
                  </h2>

                  <p className="color-white">
                    Objectual systems limited endeavor to offer cutting edge IT
                    solutions to help companies nurture. We are the end-to-end
                    IT solution contributor from web applications to outsourcing
                    support. OSL is known for providing specialized solutions to
                    satisfy the business needs of our clients. Our skilled
                    employees are committed to granting the best bundle of
                    projects regarding diverse IT areas. We convey appropriate,
                    efficient, and high quality services by using the latest
                    technological tools. The key agenda of Objectual systems
                    limited is to promote advanced information technologies in
                    different functions. Being the first-class software company,
                    OSL facilitates its clients with the end-to-end solution
                    along with the fastest tracking of the success of your
                    project. Our skilled employees have experience of years to
                    cater your needs according to your desired results. OSL has
                    a portfolio of 100% satisfied clients because of the
                    high-class services. OSL has helped plenty of businesses to
                    flourish by making their expertise noticeable to the entire
                    world.
                  </p>
                </div>
                {/* <button className="btn btn-info btn-blue">Read More</button>
              <button className="ms-2 btn btn-danger btn-white">
                Get a Quote
              </button> */}
              </div>
              <div className="col-lg-6 mt-5">
                <img
                  alt="about"
                  src="/images/about.png"
                  className="w-100 height-min"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
