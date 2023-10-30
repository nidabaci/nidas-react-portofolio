import React from "react";
import CV from "../../assets/JONIDA_BACI_WEB_DEVELOPER_2023.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
}

export default CTA;
