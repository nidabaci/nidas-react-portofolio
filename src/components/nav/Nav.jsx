import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import { AiOutlineBook } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BsPaperclip } from "react-icons/bs";
import { MdOutlineStars } from "react-icons/md";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const location = useLocation();
  const isWordpressPage = location.pathname === "/Wordpress-Portofolio";
  return (
    <nav>
      <a
        href={isWordpressPage ? "#wordpress-header" : "#frontend-Portofolio"}
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHomeAlt />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUserPin />
      </a>

      {!isWordpressPage && (
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <AiOutlineBook />
        </a>
      )}

      <a
        href="#portofolio"
        onClick={() => setActiveNav("#portofolio")}
        className={activeNav === "#portofolio" ? "active" : ""}
      >
        <BsPaperclip />
      </a>

      {!isWordpressPage && (
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <MdDesignServices />
        </a>
      )}

      <a
        href="#testimonial"
        onClick={() => setActiveNav("#testimonial")}
        className={activeNav === "#testimonial" ? "active" : ""}
      >
        <MdOutlineStars />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiFillPhone />
      </a>
    </nav>
  );
};

export default Nav;
