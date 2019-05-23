import React from "react";
import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="http://www.twitter.com">
                  <span className="fa-stack fa-lg">
                    <FaTwitter />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com">
                  <span className="fa-stack fa-lg">
                    <FaFacebookF />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.github.com">
                  <span className="fa-stack fa-lg">
                    <FaGithub />
                  </span>
                </a>
              </li>
            </ul>
            <p className="copyright text-muted">
              Copyright &copy; Andy Tan @ UUM Qusac AMC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
