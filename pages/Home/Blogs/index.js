/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Blogs = (props) => {
  const { blogPost } = props;

  return (
    <div className="bg">
      <Fade left duration={1000}>
        <div className="container-main">
          <div className="row pt-5">
            <div className="col-lg-12 text-start">
              <h2 className="color-white mt-5">Get Some News</h2>
            </div>
          </div>
          <div className="testimonial-area text-start">
            <div className="row">
              {blogPost?.map(function (item, key) {
                let blogDate = moment(item.date, "YYYY/MM/DD").format("ll");
                return (
                  <div key={key} className="col-lg-4">
                    <div className="testimonial-black-area p-0 mt-3">
                      <img
                        alt="blog"
                        className="w-100 Image-blog"
                        src={item.featured_image_url}
                      />
                      <div className="p-3">
                        <div>
                          <p className="blog-date">{blogDate}</p>
                        </div>
                        <h3 className="color-blue mb-1 fs-18">
                          {item.title.rendered}
                        </h3>
                        {/* Set This event to convert html tag into string */}
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.content.rendered,
                          }}
                          className="color-white mb-0 blog-p"
                        />
                      </div>
                      <div className="text-end">
                        <Link href={item.link}>
                          <button className="btn btn-info btn-blue blog-btn">
                            READ MORE
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="col-lg-4">
              <div className="testimonial-black-area p-0 mt-3">
                <img
                  alt="blog"
                  className="w-100 Image-blog"
                  src="/images/blog2.png"
                />
                <div className="p-3">
                  <div>
                    <p className="blog-date">Development - July 1, 2021</p>
                  </div>
                  <h3 className="color-blue mb-1 fs-18">
                    Getting to Know the Money Market
                  </h3>
                  <p className="color-white mb-0">
                    You may hear the term Money Market before but do you know
                    what does it mean? If not...
                  </p>
                </div>
                <div className="text-end">
                  {/* <button className="btn btn-info btn-blue blog-btn">
                    READ MORE
                  </button> 
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-black-area p-0 mt-3">
                <img
                  alt="blog"
                  className="w-100 Image-blog"
                  src="/images/blog.png"
                />
                <div className="p-3">
                  <div>
                    <p className="blog-date">AI - June 12, 2021</p>
                  </div>
                  <h3 className="color-blue mb-1 fs-18">Three Types of AI</h3>
                  <p className="color-white mb-0">
                    In this technological advancement era, we all are aware of
                    Artificial intelligence...
                  </p>
                </div>
                <div className="text-end">
                  {/* <button className="btn btn-info btn-blue blog-btn">
                    READ MORE
                  </button> 
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-black-area p-0 mt-3">
                <img
                  alt="blog"
                  className="w-100 Image-blog"
                  src="/images/blog3.png"
                />
                <div className="p-3">
                  <div>
                    <p className="blog-date">Diet - June 10, 2021</p>
                  </div>
                  <h3 className="color-blue mb-1 fs-18">
                    Best Types of Diet plans To Follow
                  </h3>

                  <p className="color-white mb-0">
                    The concept of maintaining a healthy weight is considered
                    very important throughout...
                  </p>
                </div>
                <div className="text-end">
                  {/* <button className="btn btn-info btn-blue blog-btn">
                    READ MORE
                  </button> 
                </div>
              </div>
            </div> */}
              {/* <div className="col-lg-4">
              <div className="testimonial-black-area p-0 mt-3">
                 <img alt="blog" className="w-100 Image-blog" src="/images/blog.png" />
                <div className="p-3">
                  <div>
                    <p className="blog-date">Development - July 9, 2021</p>
                  </div>

                  <p className="color-white mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the  industry
                    standard dummy text
                  </p>
                </div>
                <div className="text-end">
                  <button className="btn btn-info btn-blue blog-btn">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-black-area p-0 mt-3">
                 <img alt="blog" className="w-100 Image-blog" src="/images/blog.png" />
                <div className="p-3">
                  <div>
                    <p className="blog-date">Development - July 9, 2021</p>
                  </div>

                  <p className="color-white mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the  industry
                    standard dummy text
                  </p>
                </div>
                <div className="text-end">
                  <button className="btn btn-info btn-blue blog-btn">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-black-area p-0 mt-3">
                 <img alt="blog" className="w-100 Image-blog" src="/images/blog.png" />
                <div className="p-3">
                  <div>
                    <p className="blog-date">Development - July 9, 2021</p>
                  </div>

                  <p className="color-white mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the  industry
                    standard dummy text
                  </p>
                </div>
                <div className="text-end">
                  <button className="btn btn-info btn-blue blog-btn">
                    READ MORE
                  </button>
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

export default Blogs;
