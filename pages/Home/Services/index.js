/* eslint-disable @next/next/no-img-element */

import React from "react";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  return (
    <div className="bg">
      <Fade left duration={1000}>
        <div className="container-main">
          <div className="row pt-5">
            <div className="col-lg-12 text-start">
              <h2 className="color-white mt-5 ">This Is What We Do</h2>
              <p className="color-white service-para">
                We know that the services are already discussed on our
                introductory page, but we want to show off again. In this
                competitive era, the brands and businesses must have an
                innovative partner to handle the digital needs so here Objectual
                Systems Limited is at your service. We are well experienced to
                bring your dream results into real life and make the cash come
                in from our work.
              </p>
            </div>
          </div>
          <div className="service-area">
            <div className="row">
              <div className="col-lg-4 p-0 apps-Image-area">
                <div className="mt-3 ms-3 msr-3">
                  <Link href="/CyberSecurity" passHref>
                    <div
                      style={{
                        backgroundImage: `url(/images/protection-bg.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        border: "1px solid #707070",
                        borderRadius: "10px",
                        minHeight: "275px",
                        cursor: "pointer",
                      }}
                      className="container-apps p-3"
                    >
                      <img
                        className="service-icon"
                        alt="protection"
                        src="/images/protection.png"
                      />
                      <h5 className="color-white m-0 service-head">
                        Cybersecurity
                      </h5>
                      <p className="color-white m-0 text-center fs-12">
                        We secure your business by detecting the risks at early
                        stage and respond them with advanced endpoint
                        techniques. OSL is the complete solution for diverse
                        services in Cybersecurity such as point services,
                        Application security and so on.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 p-0 apps-Image-area">
                <div className="mt-3 ms-3 msr-3">
                  <Link href="/WebAndMobileApp" passHref>
                    <div
                      style={{
                        backgroundImage: `url(/images/webapp-bg.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        border: "1px solid #707070",
                        borderRadius: "10px",
                        minHeight: "275px",
                        cursor: "pointer",
                      }}
                      className="container-apps p-3"
                    >
                      <img
                        className="service-icon"
                        alt="protection"
                        src="/images/webapp.png"
                      />
                      <h5 className="color-white m-0 service-head">
                        Web & Mobile Application
                      </h5>
                      <p className="color-white m-0 text-center fs-12">
                        Our application services provide the technical
                        fundamentals to generate the top leading web & mobile
                        applications that can provide audience engaging
                        experience for your brand.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 p-0 apps-Image-area">
                <div className="mt-3 ms-3 msr-3">
                  <Link href="/CMS" passHref>
                    <div
                      style={{
                        backgroundImage: `url(/images/cms-bg.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        border: "1px solid #707070",
                        borderRadius: "10px",
                        minHeight: "275px",
                        cursor: "pointer",
                      }}
                      className="container-apps p-3"
                    >
                      <img
                        className="service-icon"
                        alt="protection"
                        src="/images/cms.png"
                      />
                      <h5 className="color-white m-0 service-head">CMS</h5>
                      <p className="color-white m-0 text-center fs-12">
                        OSL provides full range of CMS services that include
                        easy content management, simple and customizable UI, and
                        much more
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              {/* <div className="col-lg-4 p-0 apps-Image-area">
              <div className="mt-3 ms-3 msr-3">
                <div
                  style={{
                    backgroundImage: `url(/images/vulner-bg.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    border: "1px solid #707070",
                    borderRadius: "10px",
                  }}
                  className="container-apps p-3"
                >
                  <img
                    className="service-icon"
                    alt="protection"
                    src="/images/vulner.png"
                  />
                  <h5 className="color-white m-0 service-head">
                    Vulnerablity Assesment
                  </h5>
                  <p className="color-white m-0 text-center fs-12">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-0 apps-Image-area">
              <div className="mt-3 ms-3 msr-3">
                <div
                  style={{
                    backgroundImage: `url(/images/penetration-bg.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    border: "1px solid #707070",
                    borderRadius: "10px",
                  }}
                  className="container-apps p-3"
                >
                  <img
                    className="service-icon"
                    alt="protection"
                    src="/images/penetration.png"
                  />
                  <h5 className="color-white m-0 service-head">
                    Penetration testing
                  </h5>
                  <p className="color-white m-0 text-center fs-12">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 p-0 apps-Image-area">
              <div className="mt-3 ms-3 msr-3">
                <div
                  style={{
                    backgroundImage: `url(/images/mobileapp-bg.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    border: "1px solid #707070",
                    borderRadius: "10px",
                  }}
                  className="container-apps p-3"
                >
                  <img
                    className="service-icon"
                    alt="protection"
                    src="/images/mobileapp.png"
                  />
                  <h5 className="color-white m-0 service-head">
                    Mobile Application Development
                  </h5>
                  <p className="color-white m-0 text-center fs-12">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy.
                  </p>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Services;
