import React from "react";
import "./about.css";
import ME from "../../assets/profile-pic.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div>
          <p>
            A proficient front-end developer with experience in building web and
            mobile applications using React Js/ Native, Vanilla JavaScript, and
            various other modern technologies. Adept at designing, developing,
            and maintaining robust applications.
          </p>
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
            <h3>Commit SRL – Web Developer (Feb 2022 – Present) </h3>
            <p>
              At Commit SRL, I design and develop responsive web and mobile
              applications using <strong>React</strong>, <strong>Vue.js</strong>
              , <strong>Nuxt.js</strong>, and <strong>Ionic</strong>, focusing
              on performance, usability, and scalability. I work extensively
              with modern styling tools like <strong>Tailwind CSS</strong>,{" "}
              <strong>Sass</strong>, and <strong>pure CSS</strong>, and
              integrate UI libraries including <strong>Kendo UI</strong>,{" "}
              <strong>Material UI</strong>, <strong>Ant Design</strong>, and{" "}
              <strong>PrimeFaces</strong>. My work spans both frontend and
              backend collaboration through <strong>RESTful APIs</strong>,
              ensuring seamless integration between systems in Agile
              environments.
            </p>
            <h3>Yoox Net-A-Porter Group (ARMANI.COM & MONTBLANC.COM)</h3>
            <p>
              In collaboration with YNAP, I contributed to key frontend
              development efforts for <strong>ARMANI.COM</strong> and{" "}
              <strong>MONTBLANC.COM</strong> using{" "}
              <strong>Vanilla JavaScript</strong>, ensuring high performance and
              full cross-browser compatibility. I implemented advanced search
              features with <strong>Algolia Search AI</strong>, enhanced content
              workflows through <strong>CoreMedia</strong> integration, and
              supported backend logic using <strong>ASP.NET</strong> and{" "}
              <strong>C#</strong>. All work was delivered within Agile
              workflows, actively participating in <strong>PI Planning</strong>,{" "}
              <strong>Sprint Planning</strong>, daily stand-ups, and
              retrospectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
