import React from "react";
import "./testimonial.css";
import AVATAR1 from "../../assets/liontara.jpg";
import AVATAR2 from "../../assets/kevincepani.jpg";
import AVATAR3 from "../../assets/mbarsilakadiu.jpg";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Lion Tara - Software Dev",
    review:
      'Only one word that comes to mind when I think of Jonida, and that’s "awesome". We studied at the same university, and I worked with Jonida on many projects, and she was a consummate professional at all times. Jonida‘s work ethic is impeccable, and she is always that one who offers help and support.',
  },

  {
    avatar: AVATAR2,
    name: "Kevin Cepani - Wordpress Dev",
    review:
      "I had the privilege of working with Jonida at Intermedia.al where we both were WordPress developers. Jonida excels in WordPress, HTML, CSS and related technologies, and her creativity sets her apart from others. She consistently exceeded project expectations and was a true professional, always going the extra mile for client satisfaction. I highly recommend Jonida.",
  },

  {
    avatar: AVATAR3,
    name: "Mbarsila Kadiu - Frontend Dev",
    review:
      "I had the opportunity to mentor and guide Jonida in her professional development while we were involved in a project using React JS and JavaScript. I was truly impressed by her passion for learning and growth. She is an incredibly talented and dedicated individual. Her high spirit, curiosity, and determination to learn made her a valuable asset to our team, and her contributions to the project were invaluable. I highly recommend her to anyone looking for a talented and hardworking individual.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>References from colleagues</h5>
      <h2>Reccommandations</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;