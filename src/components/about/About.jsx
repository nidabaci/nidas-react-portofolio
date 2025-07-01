import React from "react";
import "./about.css";
import ME from "../../assets/profile-pic.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div>
          <br></br>
          <p>
            You're probably here for one of two reasons:
            <br />
            <strong>1.</strong> You want to know me as a{" "}
            <strong>Frontend Developer</strong>
            <br />
            <strong>2.</strong> You're curious about my{" "}
            <strong>WordPress work</strong>
          </p>
          <br></br>
          <p>
            Either way — welcome! Let me tell you a bit about both sides of me.
          </p>{" "}
          <br></br>
          <br></br>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Profile pic" />
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about-me">
            <h3>Frontend Developer Me</h3>
            <p>
              Since 2022, I've been working at an Italian software company as a
              interface developer using technologies sush as React, Javascript,
              Next and Vue Js, making cross-browser compatibile websites. Along
              the way I have used many UI libraries, i can name Ionic, Kendo,
              Ant Design, Syncfusion, Material UI, Bootstrap and Prime Faces.
            </p>
            <p>
              If you are interested in my work as a Frontend Developer, feel
              free to scroll down.
            </p>
            <h3>WordPress Specialist Me</h3>
            <p>
              Outside of work, I freelance as a WordPress developer. I build and
              maintain sites with Elementor/ Pro, doing SEO audits, integrating
              advanced features such as WTPS forms and Google Analytics.
            </p>

            <p>
              If you're into visuals or want to see what I've done, check out my
              portfolio down below
            </p>
          </div>
          <Link to="/Wordpress-Portofolio" className="btn btn-primary">
            Wordpress Portofolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
