import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>More than programming</h5>
      <h2>My Skills</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            {/* FIRST SERVICE */}
            <h3>Design</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma usage for creating mobile/web application design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content creating effectively representing the brand.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content and media editing using photoshop.</p>
            </li>
          </ul>
        </article>
        {/* 2ND SERVICE */}
        <article className="service">
          <div className="service__head">
            <h3>Tools Familiar Using</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Effectively using Visual Code and Visual Studio Code</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Comfortable usage of Ionic, Kendo Ui and Prime Faces frameworks
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Competently using version controls like Git and Azure Devops
              </p>
            </li>
          </ul>
        </article>
        {/* 3RD SERVICE */}
        <article className="service">
          <div className="service__head">
            <h3>Work Demeanor</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                The ability to work well with others and contribute to a
                positive team dynamic.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Effective communication</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The ability to adapt to new technologies and approaches</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
