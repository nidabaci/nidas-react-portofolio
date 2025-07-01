import CV from "../../assets/JONIDA.BACI_CV_2025.pdf";
import { Link, useLocation } from "react-router-dom";

function CTA() {
  const location = useLocation();
  const isWordpressPage = location.pathname === "/Wordpress-Portofolio";
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      {isWordpressPage ? (
        <Link to="/" className="btn btn-primary">
          Frontend Profile
        </Link>
      ) : (
        <Link to="/Wordpress-Portofolio" className="btn btn-primary">
          Wordpress Portfolio
        </Link>
      )}
    </div>
  );
}

export default CTA;
