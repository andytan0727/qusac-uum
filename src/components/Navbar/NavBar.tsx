import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { FaBars } from "react-icons/fa";
import { Link } from "gatsby";

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
        navbarBeforeScroll: !scrolling,
        navbarScroll: scrolling,
      })}
    >
      <div className="container">
        <Link to="/">
          <a className="navbar-brand">Qusac</a>
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
          //  className="collapse navbar-collapse" id="navbarResponsive">
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news">
                <a className="nav-item nav-link">News</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/program">
                <a className="nav-link">Program</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/solutions">
                <a className="nav-link">Solutions</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us">
                <a className="nav-link">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
