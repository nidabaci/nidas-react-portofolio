import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaSquareUpwork } from "react-icons/fa6";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/nidabaci"
        target="_blank"
        rel="noreferrer noopener"
        alt="LinkedIn"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jonida-baci99"
        target="_blank"
        rel="noreferrer noopener"
        alt="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~013e3845f52ccca1e7?mp_source=share"
        target="_blank"
        rel="noreferrer noopener"
        alt="UpWork"
      >
        <FaSquareUpwork />
      </a>
    </div>
  );
}

export default HeaderSocials;
