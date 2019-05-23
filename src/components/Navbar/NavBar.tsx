import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { FaBars } from "react-icons/fa";
import { Link } from "gatsby";

import * as styles from "./styles.module.scss";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setOpenMenu(prevOpenMenu => !prevOpenMenu);
  };

  const handleScroll = () => {
    const currentRef = navbarRef.current;

    if (currentRef) {
      const offsetTop = currentRef.offsetTop;
      if (offsetTop > 500) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={classNames("navbar navbar-expand-lg sticky-top shadow", {
        "navbar-dark": !scrolling,
        [styles.navbarBeforeScroll]: !scrolling,
        [styles.navbarScroll]: scrolling,
      })}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Qusac
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
        <div
          className={classNames("navbar-collapse", {
            collapse: !openMenu,
          })}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/program">
                Program
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/solutions">
                Solutions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
