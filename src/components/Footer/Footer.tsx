import React from "react";
import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container mt-5">
        <ul className="list-inline text-center">
          <li className="list-inline-item">
            <a href="http://www.twitter.com">
              <span>
                <FaTwitter size={32} />
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.facebook.com">
              <span>
                <FaFacebookF size={32} />
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.github.com">
              <span>
                <FaGithub size={32} />
              </span>
            </a>
          </li>
        </ul>
        <p className="text-muted text-center">
          Copyright &copy; Andy Tan @ UUM Qusac AMC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
