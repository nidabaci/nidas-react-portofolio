import { useLocation } from "react-router-dom";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  const location = useLocation();
  const isWordpressPage = location.pathname === "/Wordpress-Portofolio";

  return (
    <header
      id={isWordpressPage ? "wordpress-header" : "frontend-Portofolio"}
      className={isWordpressPage ? "wordpress-header" : "frontend-header"}
    >
      <div className="container header__container">
        {isWordpressPage ? (
          <>
            <h5>My profile in</h5>
            <h1>Wordpress Development & SEO services</h1>
            <h5 className="text-light">
              A collection of websites built with Elementor and SEO in mind.
            </h5>
          </>
        ) : (
          <>
            <h5>Hello I am</h5>
            <h1>Jonida Baçi</h1>
            <h5 className="text-light">
              Interface Developer | Proficient in React & Javascript
            </h5>
          </>
        )}

        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
