import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareUpwork } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container services__container">
        <article className="contact__option">
          <MdOutlineMail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>jonida.baci99@outlook.com</h5>
          <a href="mailto: jonida.baci99@outlook.com" target="__blank">
            Click here to send email
          </a>
        </article>

        <article className="contact__option">
          <BsLinkedin className="contact__option-icon" />
          <h4>LinkedIn</h4>
          <h5>Let's connect</h5>
          <a href="https://www.linkedin.com/in/jonida-baci99/" target="__blank">
            My LinkedIn profile
          </a>
        </article>

        <article className="contact__option">
          <FaSquareUpwork className="contact__option-icon" />
          <h4>Upwork</h4>
          <h5>Let's talk bussiness</h5>
          <a
            href="https://www.upwork.com/freelancers/~013e3845f52ccca1e7"
            target="__blank"
          >
            My Upwork profile
          </a>
        </article>
      </div>
    </section>
  );
};

export default Contact;
