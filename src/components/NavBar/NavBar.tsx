import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { FaBars } from "react-icons/fa";
import { Link } from "gatsby";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import * as styles from "./styles.module.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggle = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleScroll = () => {
    const offsetTop = window.pageYOffset;
    if (offsetTop > 500) {
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
      <div>
        <Navbar
          className={classNames("shadow", {
            [styles.navbarBeforeScroll]: !scrolling,
            [styles.navbarDuringScroll]: scrolling,
          })}
          expand="lg"
          fixed={scrolling ? "top" : ""}
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
          <NavbarToggler onClick={toggle}>
            <FaBars />
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/program">
                  Program
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/solution">
                  Solution
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
