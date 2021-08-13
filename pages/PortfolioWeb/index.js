/* eslint-disable @next/next/no-img-element */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../../src/components/Navigation";

const PortfolioWeb = () => {
  return (
    <div className="nav-none">
      <div className="portfolioappbg">
        <div>
          <div className="ml-100 mr-100 logo-area pt-5">
            <div className="row">
              <div className="col-lg-7">
                <img
                  style={{ height: "150px" }}
                  alt="about"
                  src="/images/app1/logo.svg"
                  className="ms-4 mt-5 mb-3"
                />
                <p className="color-white text-center">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi
                </p>
              </div>
              <div className="col-lg-5 text-center">
                <img
                  alt="about"
                  src="/images/app1/1.png"
                  style={{ height: "320px" }}
                  className="case-study-img-m"
                />
              </div>
            </div>
          </div>
          <div className="ml-100 mr-10">
            <div className="row mt-5">
              <div className="col-lg-8">
                <h1 className="core-head">Core Feature</h1>
                <h6 className="core-subhead">This is the Best Part</h6>
                <p className="color-white text-start mt-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque laudantium.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <img
                  alt="about"
                  src="/images/app1/2.png"
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
                  src="/images/app1/3.png"
                  style={{ height: "320px" }}
                  className="case-study-img-m"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="core-head text-end">Core Feature</h1>
                <h6 className="core-subhead text-end">This is the Best Part</h6>
                <p className="color-white text-start mt-4 text-end">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
              </div>
            </div>
          </div>
          <div className="pl-100 pr-100 core-center-area pt-3 mt-5 pb-3">
            <div className="row ">
              <div className="col-lg-12 text-center">
                <h1 className="core-head text-center">Core Feature</h1>
                <h6 className="core-subhead text-center">
                  This is the Best Part
                </h6>
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8">
                    <img
                      alt="about"
                      src="/images/app1/4.png"
                      className="w-100"
                    />
                  </div>
                  <div className="col-lg-2"></div>
                </div>

                <p className="color-white text-start mt-4 text-center">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni.
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
                  src="/images/profile.png"
                  style={{ height: "130px", width: "130px" }}
                />
                <h6 className="core-subhead text-center mb-0 color-white">
                  SAMEUL M
                </h6>
                <p className="m-0 color-white">CEO</p>
                <div>
                  <img
                    alt="about"
                    className="float-start"
                    src="/images/quote-start.png"
                    style={{ height: "40px", width: "40px" }}
                  />
                  <br />
                  <p className="color-white text-start mt-3 text-center story-p">
                    Muhammad is an excellent worker, extremely fast and did all
                    of my tasks faster than I thought possible. 100% would work
                    with him again.
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

export default PortfolioWeb;
