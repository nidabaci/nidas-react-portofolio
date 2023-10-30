import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/nidabaci"
        target="_blank"
        rel="noreferrer noopener"
        alt="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.linkedin.com/in/jonida-baci99"
        target="_blank"
        rel="noreferrer noopener"
        alt="LinkedIn"
      >
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
