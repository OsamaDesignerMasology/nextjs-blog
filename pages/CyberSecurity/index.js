/* eslint-disable @next/next/no-img-element */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

import Navigation from "../../src/components/Navigation";

const CyberSecurity = () => {
  return (
    <div className="nav-none">
      <Head>
        <title>Cyber Security</title> 
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="servicebg">
        <div className="container">
          <div>
            <div className="row pt-5">
              <div className="col-lg-12 text-start">
                <h2 className="mt-5 color-white">Cybersecurity Services</h2>
                <p className="color-white">
                  Do you want to manage your risk with a world-class
                  Cybersecurity service? Objectual system limited is the single
                  solution for all your security concerns. We deliver
                  industry-leading security strategies and assessments to our
                  clients. Being a trusted adviser, OSL helps you to detect your
                  risk and provide solutions to respond to threats
                  professionally. We transform your business through assessing,
                  reducing, and managing your security risk. Our professionals
                  have great experience and a sensible understanding of
                  compliance and business needs.
                </p>
              </div>
              <div className="col-lg-12 mt-2">
                <img
                  alt="about"
                  src="/images/cyber-bg.png"
                  className="w-100 "
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h4 className="mt-5 color-white">What we do</h4>
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
                    OSL takes responsibility to manage risk, accelerate your
                    business security and innovation at the fastest pace. We
                    provide diverse services to make your business protected;
                    have a look at some of our noticeable areas for
                    Cybersecurity, <br />
                    <ul>
                      <li>
                        Secure your information and reduce risk through the best
                        endpoint services
                      </li>
                      <li>
                        Block known and unknown malware even if after reaching
                        the end
                      </li>
                      <li>
                        Vulnerability assessment and Penetration&apos;s testing
                      </li>
                      <li>Website and mobile Application Security</li>
                      <li>
                        Prevent Targeted Attacks That Include Cross-site
                        Scripting, SQL Injection, Forceful Browsing, Cookie
                        Poisoning, and Invalid Input
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-lg-6">
                    <h6 className="mt-5 color-white">Operating Sysytem</h6>
                    <div>
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/cyber-icons/kalilinux.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/cyber-icons/redhat.png"
                      />
                    </div>
                    {/* <h6 className="mt-5 color-white">Framework</h6>
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
                      </div> */}
                  </div>
                  {/* <div className="col-lg-6">
                    <h6 className="mt-5 color-white">Database</h6>
                    <div>
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/css.png"
                      />
                      <img
                        alt="profile"
                        className="Image-profile"
                        src="/images/db2.png"
                      />
                    </div>
                  </div> */}
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

export default CyberSecurity;
