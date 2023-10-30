import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/bankis-frontpage.PNG";
import IMG2 from "../../assets/user-acc-bankist.png";
import IMG3 from "../../assets/forkify-app.png";
import IMG4 from "../../assets/dice-game.png";
import IMG5 from "../../assets/guess-nr-game.png";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ReactProjects from "./ReactProjects";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Bankist App Frontpage",
    github: "https://github.com/nidabaci/Bank-Website",
    demo: "https://dazzling-kashata-980f32.netlify.app/",
  },

  {
    id: 2,
    image: IMG2,
    title: "Bank App User Interface",
    github: "https://github.com/nidabaci/Users-Bank-Account.git",
    demo: "https://sparkly-pegasus-63eebf.netlify.app/",
  },

  {
    id: 3,
    image: IMG3,
    title: "Forkify App - An app for food lovers",
    github: "https://github.com/nidabaci/Forkify-App",
    demo: "https://nids-forkify-app.netlify.app/",
  },

  {
    id: 4,
    image: IMG4,
    title: "Two Player Game",
    github: "https://github.com/nidabaci/Dice-Game.git",
    demo: "https://benevolent-pegasus-200258.netlify.app/",
  },

  {
    id: 5,
    image: IMG5,
    title: "Guess The Number Game",
    github: "https://github.com/nidabaci/Guess-The-Number-Game",
    demo: "https://adorable-rabanadas-180749.netlify.app/",
  },
];

const Portofolio = () => {
  return (
    <>
      <section id="portofolio">
        <h5>Latest Work Using Vanilla JavaScript</h5>
        <h2>Recent Projects</h2>

        <Swiper
          className="container portofolio__container"
          // install Swiper modules
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 640px
            1300: {
              slidesPerView: 3,
            },

            650: {
              slidesPerView: 2,
            },

            200: {
              slidesPerView: 1,
            },
          }}
        >
          {data.map(({ id, image, title, github, demo }, index) => {
            return (
              <SwiperSlide key={index} className="portofolio">
                <article key={id} className="portofolio__item">
                  <div className="portofolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portofolio__item-cta">
                    <a href={github} className="btn">
                      Github
                    </a>
                    {demo ? (
                      <a
                        href={demo}
                        className="btn btn-primary"
                        target="__blank"
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <ReactProjects></ReactProjects>
    </>
  );
};

export default Portofolio;
