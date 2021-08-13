/* eslint-disable @next/next/no-img-element */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

import Navigation from "../../src/components/Navigation";

const CMS = () => {
  return (
    <div className="nav-none">
      <Head>
        <title>Brainwash</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="servicebg">
        <div className="container">
          <div>
            <div className="row pt-5">
              <div className="col-lg-12 text-start">
                <h2 className="mt-5 color-white">
                  Content Management System (CMS)
                </h2>
                <p className="color-white">
                  If you are looking for the best CMS services then Objectual
                  Solution Limited is here for you. We make your online
                  platforms more users friendly to sell any product or service
                  online. Our professionals make sure to provide flexible and
                  reliable services to increase ROI. No matter, you are looking
                  for a customized CMS platform like WordPress; we can deliver
                  you as demanded timely. Quality assurance is the aspect that
                  makes us apart from the crowd of CMS providers out there so
                  why delay your time? Get in touch with us now!
                </p>
              </div>
              <div className="col-lg-12 mt-2">
                <img
                  alt="about"
                  src="/images/cmsdetail-bg.png"
                  className="w-100 "
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h4 className="mt-5 color-white">Technology We Used</h4>
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-lg-6">
                <div className="tech-para-area mt-3 p-4">
                  {/* <div className="d-flex">
                    <img
                      alt="profile"
                      className="Image-profile"
                      src="/images/realm.png"
                    />
                    <div className="ms-2">
                      <h5 className="color-white mt-3">Realm</h5>
                    </div>
                  </div> */}
                  <p className="color-white mt-3">
                    We cater to the customers in Pakistan currently for our
                    amazing CMS services and aiming to capture the bigger target
                    market in the future. OSL provides enhanced CMS support
                    with,
                  </p>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-lg-6">
                    <h6 className="mt-5 color-white">Language</h6>
                    <div>
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/js.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/html.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/css.png"
                      />
                    </div>
                    <h6 className="mt-5 color-white">Framework</h6>
                    <div>
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/cms-icons/wordpress.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/cms-icons/shopify.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/cms-icons/drupal.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/cms-icons/joomla.png"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h6 className="mt-5 color-white">Database</h6>
                    <div>
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/cms-icons/mysql.png"
                      />
                    </div>
                  </div>
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

export default CMS;
