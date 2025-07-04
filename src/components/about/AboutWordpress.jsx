import "./about.css";
import UpworkPic from "../../assets/upwork.png";

const AboutWordpress = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div>
          <p>
            I'm a WordPress developer with a focus on building clean,
            responsive, and user-friendly websites. Every site I build follows
            SEO best practices to ensure it performs well on search engines from
            day one.
          </p>
          <br />
          <p>
            I'm also a partner at{" "}
            <a
              href="https://vibrance.al"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Vibrance.al</strong>
            </a>{" "}
            — a creative studio where we blend design, marketing, and tech to
            deliver cohesive and impactful digital experiences.
          </p>
          <br />
          <p>
            Whether you're a small business, non-profit, or creative brand, I
            can help turn your vision into a scalable, fast, and
            conversion-focused website — without overcomplicating the process.
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className="about__content">
          <div className="about-me">
            <h3>With over 4 years of experience, I specialize in:</h3>
            <br />
            <ul>
              <li>🎨 WordPress development using Elementor / Elementor PRO</li>
              <li>🌐 Multilingual site setup</li>
              <li>⚙️ Performance and SEO optimization</li>
              <li>🧩 Design-to-code from Figma/XD to WordPress</li>
              <li>📧 SMTP setup, contact forms, and analytics integration</li>
              <li>
                📝 Content creation with keyword strategy for on-page SEO and
                discoverability
              </li>
            </ul>
            <br />
            <div>
              <img
                src={UpworkPic}
                alt="About Upwork"
                className="about-upwork-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWordpress;
