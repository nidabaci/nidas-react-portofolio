import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isWordpressPage = location.pathname === "/Wordpress-Portofolio";

  return (
    <footer>
      <a
        href={
          isWordpressPage ? "/Wordpress-Portofolio" : "/frontend-Portofolio"
        }
        className="footer__logo"
      >
        NIDS
      </a>

      <ul className="permalinks">
        <li>
          <a
            href={
              isWordpressPage ? "#wordpress-header" : "#frontend-Portofolio"
            }
          >
            Home
          </a>
        </li>

        {!isWordpressPage && (
          <>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </>
        )}

        <li>
          <a href="#portofolio">Portfolio</a>
        </li>

        <li>
          <a href="#testimonial">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://github.com/nidabaci"
          target="_blank"
          rel="noreferrer"
          alt="GitHub"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jonida-baci99"
          target="_blank"
          rel="noreferrer"
          alt="LinkedIn"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nida Baci October 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
