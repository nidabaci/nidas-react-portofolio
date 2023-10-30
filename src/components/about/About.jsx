import React from "react";
import "./about.css";
import ME from "../../assets/profile-pic.jpg";
import { BsAward } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { AiOutlineFolderOpen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Profile pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <ImUsers className="about__icon" />
              <h5>Languages</h5>
              <small>5+</small>
            </article>
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <p>
            I am a skilled developer with expertise in WordPress, HTML5, CSS3,
            and making cross-browser compatibile websites. I am proficient in
            React JS, Ionic, Kendo, and Prime Faces, and have a basic
            understanding of Next Js, Vue JS, Bootstrap, Python, C#, and Unity.
            I use Figma to create visually appealing and user-friendly web and
            mobile application interfaces from scratch.{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
