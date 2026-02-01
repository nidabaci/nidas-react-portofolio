import CV from "../../assets/J.BACI_CV_2026.pdf";
import { Link, useLocation } from "react-router-dom";
import WORDPRESS_CV from "../../assets/WORDPRESS_CV.pdf";

function CTA() {
  const location = useLocation();
  const isWordpressPage = location.pathname === "/Wordpress-Portofolio";
  return (
    <div className="cta">
      {isWordpressPage ? (
        <a href={WORDPRESS_CV} download className="btn">
          Download WP CV
        </a>
      ) : (
        <a href={CV} download className="btn">
          Download FE CV
        </a>
      )}

      {isWordpressPage ? (
        <Link to="/" className="btn btn-primary">
          Frontend Profile
        </Link>
      ) : (
        <Link to="/Wordpress-Portofolio" className="btn btn-primary">
          Wordpress Profile
        </Link>
      )}
    </div>
  );
}

export default CTA;
