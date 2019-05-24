import React, { useState } from "react";
import classNames from "classnames";
import { FaBars } from "react-icons/fa";
import { Link } from "gatsby";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import * as styles from "./styles.module.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <React.Fragment>
      <Navbar
        className={classNames(styles.customNav, "shadow")}
        color="light"
        expand="lg"
        fixed="top"
      >
        <Link className="navbar-brand" to="/">
          Qusac
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
    </React.Fragment>
  );
};

export default NavBar;
