/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const Navigation = (props) => {
  const { getActiveMenu, activeIndex, onChangeActiveIndex } = props;

  // const [activeMenu, setActiveMenu] = useState("home");
  const [menuClose, setMenuClose] = useState(false);

  useEffect(() => {
    if (activeIndex === 0) {
      handleNavigation("home", 0);
    } else if (activeIndex === 1) {
      handleNavigation("about", 1);
    } else if (activeIndex === 2) {
      handleNavigation("services", 2);
    } else if (activeIndex === 3) {
      handleNavigation("portfolio", 3);
    } else if (activeIndex === 4) {
      handleNavigation("ourapps", 4);
    } else if (activeIndex === 5) {
      handleNavigation("media", 5);
    } else if (activeIndex === 6) {
      handleNavigation("release", 6);
    } else if (activeIndex === 7) {
      handleNavigation("testimonials", 7);
    } else if (activeIndex === 8) {
      handleNavigation("blog", 8);
    } else if (activeIndex === 9) {
      handleNavigation("contact", 9);
    } else if (activeIndex === 10) {
      handleNavigation("clients", 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const handleNavigation = (menu, index) => {
    onChangeActiveIndex(index);
    // setActiveMenu(menu);
    // getActiveMenu(menu);
  };

  const handleMenu = () => {
    setMenuClose(true);
  };

  const handleMenuClose = () => {
    setMenuClose(false);
  };

  return (
    <>
      {/*Website Nav*/}
      <nav className="sticky-left-nav top-menu web-nav mt100">
        <ul className="stick-left-nav-ul">
          <motion.div
            style={{ position: "absolute" }}
            animate={{ y: activeIndex == 0 ? -90 : 25 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation("home", 0)}
          >
            <li className={activeIndex == 0 ? "nav-active" : null}>
              <a className="d-flex">
                <span>Home</span>
              </a>
            </li>
          </motion.div>
          <motion.div
            style={{ position: "absolute" }}
            animate={{ y: activeIndex == 1 ? -90 : 60 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation("about", 1)}
          >
            <li className={activeIndex == 1 ? "nav-active" : null}>
              <a className="d-flex">
                <span>About</span>
              </a>
            </li>
          </motion.div>
          <motion.div
            style={{ position: "absolute" }}
            animate={{ y: activeIndex == 2 ? -90 : 95 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation("services", 2)}
          >
            <li className={activeIndex == 2 ? "nav-active" : null}>
              <a className="d-flex">
                <span>Services</span>
              </a>
            </li>
          </motion.div>
          <motion.div
            style={{ position: "absolute" }}
            animate={{ y: activeIndex == 3 ? -90 : 130 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation("portfolio", 3)}
          >
            <li className={activeIndex == 3 ? "nav-active" : null}>
              <a className="d-flex">
                <span>Portfolio</span>
              </a>
            </li>
          </motion.div>
          <motion.div
            style={{ position: "absolute" }}
            animate={{ y: activeIndex == 4 ? -90 : 165 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation("ourapps", 4)}
          >
            <li className={activeIndex == 4 ? "nav-active" : null}>
              <a className="d-flex">
                <span>Our Apps</span>
              </a>
            </li>
          </motion.div>
          <motion.div
            style={{ position: "absolute" }}
            animate={{ y: activeIndex == 5 ? -90 : 200 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation("media", 5)}
          >
            <li className={activeIndex == 5 ? "nav-active" : null}>
              <a className="d-flex">
                <span>Media Coverage</span>
              </a>
            </li>
          </motion.div>
          <motion.div
            style={{ position: "absolute" }}
            animate={{ y: activeIndex == 6 ? -90 : 235 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation("release", 6)}
          >
            <li className={activeIndex == 6 ? "nav-active" : null}>
              <a className="d-flex">
                <span>News Release</span>
              </a>
            </li>
          </motion.div>
          <motion.div
            style={{ position: "absolute" }}
            animate={{ y: activeIndex == 7 ? -90 : 270 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation("testimonials", 7)}
          >
            <li className={activeIndex == 7 ? "nav-active" : null}>
              <a className="d-flex">
                <span>Testimonials</span>
              </a>
            </li>
          </motion.div>
          <motion.div
            style={{ position: "absolute" }}
            animate={{ y: activeIndex == 8 ? -90 : 305 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation("blog", 8)}
          >
            <li className={activeIndex == 8 ? "nav-active" : null}>
              <a className="d-flex">
                <span>Blogs</span>
              </a>
            </li>
          </motion.div>
          <motion.div
            style={{ position: "absolute" }}
            animate={{ y: activeIndex == 9 ? -90 : 340 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation("contact", 9)}
          >
            <li className={activeIndex == 9 ? "nav-active" : null}>
              <a className="d-flex">
                <span>Contact Us</span>
              </a>
            </li>
          </motion.div>
          <motion.div
            style={{ position: "absolute" }}
            animate={{ y: activeIndex == 10 ? -90 : 375 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation("clients", 10)}
          >
            <li className={activeIndex == 10 ? "nav-active" : null}>
              <a className="d-flex">
                <span>Our Clients</span>
              </a>
            </li>
          </motion.div>
        </ul>
      </nav>

      {/*Mobile Nav*/}
      <nav className="navbar navbar-expand-lg navbar-light mobile-nav">
        <Link style={{ cursor: "pointer" }} className="navbar-brand" href="/">
          <img alt="logo" className="logo-main" src="/images/Logo.svg" />
        </Link>
        <button
          onClick={handleMenuClose}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <FaBars />
          </span>
        </button>

        <div
          className={menuClose ? "d-non" : "collapse navbar-collapse"}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a onClick={handleMenu} className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a onClick={handleMenu} className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a onClick={handleMenu} className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a onClick={handleMenu} className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a onClick={handleMenu} className="nav-link" href="#ourapps">
                Our Apps
              </a>
            </li>
            <li className="nav-item">
              <a onClick={handleMenu} className="nav-link" href="#media">
                Media Coverage
              </a>
            </li>
            <li className="nav-item">
              <a onClick={handleMenu} className="nav-link" href="#release">
                News Release
              </a>
            </li>
            <li className="nav-item">
              <a onClick={handleMenu} className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a onClick={handleMenu} className="nav-link" href="#blog">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a onClick={handleMenu} className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a onClick={handleMenu} className="nav-link" href="#clients">
                Our Clients
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/*Mobile Nav*/}
      <div className="logo-web">
        <div className="row">
          <div className="col-lg-2">
            <Link href="/">
              <img
                style={{ cursor: "pointer" }}
                alt="logo"
                className="logo-main-web"
                src="/images/Logo.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
