/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../../src/components/Navigation";

const WebAndMobileApp = () => {
  return (
    <div className="nav-none">
      <Head>
        <title>Web And Mobile App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="servicebg">
        <div className="container">
          <div>
            <div className="row pt-5">
              <div className="col-lg-12 text-start">
                <h2 className="mt-5 color-white">
                  Web and Mobile Application Development
                </h2>
                <p className="color-white">
                  Objectual systems limited deals with the web & mobile app
                  development areas that provide its priceless services
                  throughout Pakistan. We work professionally to create your
                  desired digital products. Our clients trust us for reliable
                  and highly functional applications. Being one of the leading
                  companies in Pakistan, we provide the guaranteed value with
                  manageable projects. Expert of OSL is known for generating
                  highly convenient online platforms to enhance sales conversion
                  and lead generation for the client’s business.
                </p>
              </div>
              <div className="col-lg-12 mt-2">
                <img alt="about" src="/images/mw-bg.png" className="w-100 " />
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
                    Our professional expert developers compact with the web &
                    mobile apps services that are based on the mentioned tools,
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
                        src="/images/java.png"
                      />

                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/language3.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/language4.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/html.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/js.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/db3.png"
                      />
                    </div>
                    <h6 className="mt-5 color-white">Framework</h6>
                    <div>
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/framework1.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/framework2.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/webmob-icons/node.png"
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
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/webmob-icons/sqllite.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/webmob-icons/oracle.png"
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

export default WebAndMobileApp;
