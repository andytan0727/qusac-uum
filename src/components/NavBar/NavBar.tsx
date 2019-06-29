import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { FaBars } from "react-icons/fa";
import { Link } from "gatsby";

import * as styles from "./styles.module.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggle = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleScroll = () => {
    const offsetTop = window.pageYOffset;
    if (offsetTop > 300) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        className={classNames("shadow navbar navbar-expand-lg", {
          [styles.navbarBeforeScroll]: !scrolling,
          [styles.navbarDuringScroll]: scrolling,
          sticky: scrolling ? "top" : "",
        })}
      >
        <Link className="navbar-brand" to="/">
          <span
            style={{
              color: "black",
            }}
          >
            Qusac
          </span>
        </Link>
        <button className="navbar-toggler" onClick={toggle}>
          <FaBars />
        </button>
        <div
          className={classNames("collapse navbar-collapse", {
            show: isOpen,
          })}
        >
          <ul className="ml-auto navbar-nav">
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
              <Link className="nav-link" to="/solution">
                Solution
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
    </React.Fragment>
  );
};

export default NavBar;
