import React from "react";
import "./portofolio.css";
import ImgurSc from "../../assets/ImgurSc.png";
import AdoptPetSc from "../../assets/AdoptPetSc.png";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: ImgurSc,
    title: " Imgur Gallery React/Redux/Typescript",
    github: "https://github.com/nidabaci/Imgur-Gallery-Frontend-Challange",
    demo: "https://calm-genie-c310dd.netlify.app/",
  },

  {
    id: 2,
    image: AdoptPetSc,
    title: "Pet Adoption Website - practice using React Router",
    github: "https://github.com/nidabaci/adopt-a-pet-project-react-router",
    demo: "https://github.com/nidabaci/adopt-a-pet-project-react-router",
  },
];

const ReactProjects = () => {
  return (
    <section id="portofolio">
      <h5>Latest Work Using React</h5>
      <h2>React Personal Projects</h2>

      <Swiper
        className="container portofolio__container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 640px
          1300: {
            slidesPerView: 2,
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
                  <a href={demo} className="btn btn-primary" target="__blank">
                    Live Demo
                  </a>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ReactProjects;
