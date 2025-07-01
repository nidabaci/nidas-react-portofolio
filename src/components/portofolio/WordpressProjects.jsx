import "./portofolio.css";
import ascendis from "../../assets/ascendis.png";
import airplus from "../../assets/airplus.png";
import awa from "../../assets/awa.png";
import era from "../../assets/era.png";
import north from "../../assets/north.png";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 111,
    image: airplus,
    title: "Airplus: Air Conditioning Solutions E-commerce Site",
    demo: "https://airplus-al.com/",
  },

  {
    id: 222,
    image: ascendis,
    title: "AscendisMed.org: Healthcare Website Development",
    demo: "https://ascendismed.org/",
  },
  {
    id: 333,
    image: awa,
    title: "Site Development for Albanian Audiovisual Advocacy Platform",
    demo: "https://albanianwomaninaudiovisual.com/en/home-english/",
  },
  {
    id: 444,
    image: era,
    title: "Film Production Company Website | Home of Oscar-Nominated Movies",
    demo: "https://erafilm-albania.com/",
  },
  {
    id: 555,
    image: north,
    title: "Northlight Roofing Solutions in Canada - Website Development",
    demo: "https://northlightroofing.com/",
  },
];

const WordpressProjects = () => {
  return (
    <section id="portofolio">
      <h5>Portfolio</h5>
      <h2>Latest Wordpress Websites</h2>

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
        {data.map(({ id, image, title, demo }, index) => {
          return (
            <SwiperSlide key={index} className="portofolio">
              <article key={id} className="portofolio__item">
                <div className="portofolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portofolio__item-cta">
                  <a href={demo} className="btn btn-primary" target="__blank">
                    Visit the site
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

export default WordpressProjects;
