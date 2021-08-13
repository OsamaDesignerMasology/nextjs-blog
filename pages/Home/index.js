import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FullPage, Slide } from "react-full-page";
import ReactPageScroller from "react-page-scroller";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import { useRouter } from "next/router";

import CircleMask from "../../src/components/CircleMask";
import Navigation from "../../src/components/Navigation";
import OverlaySlider from "../../src/components/OverlaySlider";
import DotsLoader from "../../src/components/DotsLoader/index.js";
import { getResource } from "../api/index";
import { BLOG_POST, MEDIA_POST } from "../api/WebServices";

import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs";
import Contact from "./Contact";
import OurApps from "./OurApps";
import Media from "./media";
import Release from "./Release";
import Clients from "./Clients";

const images = [
  { imageUrl: "/images/portfolio/abuhuraira.png" },
  { imageUrl: "/images/portfolio/aimpoint.png" },
  { imageUrl: "/images/portfolio/brainwash.png" },
  { imageUrl: "/images/portfolio/easy1.png" },
  { imageUrl: "/images/portfolio/logika.png" },
  { imageUrl: "/images/portfolio/matchmade.png" },
  { imageUrl: "/images/portfolio/sahalumrahhajj.png" },
];

const Home = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [blogPost, setBlogPost] = useState([]);
  const [mediaPost, setMediaPost] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeMenu, setActiveMenu] = useState("home");
  const [showPorfolio, setShowPortfolio] = useState(false);
  const [circleMaskData, setCircleMaskData] = useState({
    xlinkHref: "/images/bg.png",
    x: 900,
    y: 150,
    width: 800,
    height: 800,
    strokeWidth: 200,
  });

  useEffect(() => {
    const main = async () => {
      setIsLoading(true);
      try {
        const blogPostResult = await getResource(BLOG_POST(6), "");
        setIsLoading(false);
        setBlogPost(blogPostResult);
      } catch (error) {
        console.log(error, "error");
        setIsLoading(false);
      }
    };

    main();
  }, []);

  useEffect(() => {
    const main = async () => {
      setIsLoading(true);
      try {
        const mediaPostResult = await getResource(MEDIA_POST(6), "");
        setIsLoading(false);
        setMediaPost(mediaPostResult);
      } catch (error) {
        console.log(error, "error");
        setIsLoading(false);
      }
    };

    main();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (router.asPath.split("/#")[1]) {
      setActiveMenu(router.asPath.split("/#")[1]);
    }
  }, [router]);

  useEffect(() => {
    if (activeIndex === 0) {
      setCircleMaskData({
        xlinkHref: "/images/bg.png",
        x: 900,
        y: 150,
        width: 800,
        height: 800,
        strokeWidth: 200,
      });
    } else if (activeIndex === 1) {
      setCircleMaskData({
        xlinkHref: "/images/bg1.png",
        x: 500,
        y: 450,
        width: 400,
        height: 400,
        strokeWidth: 100,
      });
    } else if (activeIndex === 2) {
      setCircleMaskData({
        xlinkHref: "/images/bg2.png",
        x: -400,
        y: 0,
        width: 800,
        height: 800,
        strokeWidth: 200,
      });
    } else if (activeIndex === 3) {
      setCircleMaskData({
        xlinkHref: "/images/bg3.png",
        x: -300,
        y: 300,
        width: 400,
        height: 400,
        strokeWidth: 100,
      });
    } else if (activeIndex === 4) {
      setCircleMaskData({
        xlinkHref: "/images/apps.png",
        x: -400,
        y: 0,
        width: 800,
        height: 800,
        strokeWidth: 200,
      });
    } else if (activeIndex === 5) {
      setCircleMaskData({
        xlinkHref: "/images/bg7.png",
        x: -300,
        y: 300,
        width: 400,
        height: 400,
        strokeWidth: 100,
      });
    } else if (activeIndex === 6) {
      setCircleMaskData({
        xlinkHref: "/images/bg8.png",
        x: 100,
        y: 150,
        width: 400,
        height: 400,
        strokeWidth: 100,
      });
    } else if (activeIndex === 7) {
      setCircleMaskData({
        xlinkHref: "/images/bg4.png",
        x: 300,
        y: 0,
        width: 800,
        height: 800,
        strokeWidth: 200,
      });
    } else if (activeIndex === 8) {
      setCircleMaskData({
        xlinkHref: "/images/bg5.png",
        x: 100,
        y: 150,
        width: 400,
        height: 400,
        strokeWidth: 100,
      });
    } else if (activeIndex === 9) {
      setCircleMaskData({
        xlinkHref: "/images/bg6.png",
        x: 1000,
        y: -200,
        width: 300,
        height: 300,
        strokeWidth: 75,
      });
    } else if (activeIndex === 10) {
      setCircleMaskData({
        xlinkHref: "/images/bg9.png",
        x: -400,
        y: 0,
        width: 800,
        height: 800,
        strokeWidth: 200,
      });
    }
  }, [activeIndex]);

  const renderLoader = () => {
    return <DotsLoader isloading={isLoading} />;
  };

  const handleScroll = (index) => {
    console.log(index, "index");
    setActiveIndex(index < 0 ? 0 : index);
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
  };

  const handleOnClickImage = (index) => {
    setActiveImageIndex(index);
    setShowPortfolio(true);
  };

  return (
    <>
      {showPorfolio ? (
        <OverlaySlider
          onClickClose={setShowPortfolio}
          images={images}
          activeImageIndex={activeImageIndex}
        />
      ) : null}

      <ReactPageScroller
        customPageNumber={activeIndex}
        // containerHeight={"100vh"}
        pageOnChange={handleScroll}
        onBeforePageScroll={handleBeforePageChange}
        // renderAllPagesOnFirstRender={true}
      >
        <div className=" " id="home">
          <div className="bg">
            <div className="container-main">
              <div className="row pt-5">
                <div className="col-lg-1"></div>
                <div className="col-lg-10 text-center header-content">
                  <h2
                    data-aos="fade-left"
                    className="color-white home-heading digital-head"
                  >
                    Inspiring{" "}
                    <Typewriter
                      className="color-blue"
                      options={{
                        strings: ["Tech", "Security", "Digital"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 100,
                      }}
                    />{" "}
                    Needs for your Business
                  </h2>

                  <p data-aos="fade-left" className="color-white">
                    We help businesses with high-quality services across
                    Pakistan for developing amazing digital products.
                  </p>
                </div>
                <div className="col-lg-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="portfolio">
          <Portfolio images={images} onClickImage={handleOnClickImage} />
        </div>
        <div id="ourapps">
          <OurApps />
        </div>
        <div id="media">
          <Media mediaPost={mediaPost} />
        </div>
        <div id="release">
          <Release />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="blog">
          <Blogs blogPost={blogPost} />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="clients">
          <Clients />
        </div>
      </ReactPageScroller>

      {/* <FullPage controls={handleScroll} duration={50}>
        <Slide id="home">
          <div className="bg">
            <div className="container-main">
              <div className="row pt-5">
                <div className="col-lg-1"></div>
                <div className="col-lg-10 text-center header-content">
                  <h2
                    className="color-white home-heading digital-head"
                    data-aos="fade-right"
                  >
                    Inspiring <span className="color-blue" ref={el} />
                    Needs for your Business
                  </h2>
                  <p className="color-white" data-aos="fade-right">
                    We help businesses with high-quality services across
                    Pakistan for developing amazing digital products.
                  </p>
                </div>
                <div className="col-lg-1"></div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide id="about">
          <About />
        </Slide>
        <Slide id="services">
          <Services />
        </Slide>
        <Slide id="portfolio">
          <Portfolio images={images} onClickImage={handleOnClickImage} />
        </Slide>
        <Slide id="ourapps">
          <OurApps />
        </Slide>
        <Slide id="media">
          <Media />
        </Slide>
        <Slide id="release">
          <Release />
        </Slide>
        <Slide id="testimonials">
          <Testimonials />
        </Slide>
        <Slide id="blog">
          <Blogs />
        </Slide>
        <Slide id="contact">
          <Contact />
        </Slide>
        <Slide id="clients">
          <Clients />
        </Slide>
      </FullPage> */}
      {renderLoader()}

      <CircleMask
        xlinkHref={circleMaskData.xlinkHref}
        x={circleMaskData.x}
        y={circleMaskData.y}
        strokeWidth={circleMaskData.strokeWidth}
        width={circleMaskData.width}
        height={circleMaskData.height}
      />
      <Navigation
        activeIndex={activeIndex}
        onChangeActiveIndex={(index) => setActiveIndex(index)}
        // getActiveMenu={(menu) => setActiveMenu(menu)}
        getActiveMenu={(menu) => console.log(menu)}
      />
    </>
  );
};

export default Home;
