import React from "react";
import "./testimonial.css";
import AVATAR1 from "../../assets/icons8-user-128.png";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Rebecca M - UpWork Client",
    review:
      '"Do not hesitate to engage Jonida for your next project! Jonida has great communication skills, technical skills, website design and building skills and is friendly, responsive, an excellent researcher and problem solver. I engaged Jonida to design & build a website and all the necessary plugins and she delivered above and beyond my expectations, all while making me feel like I was part of the team and keeping me informed on the progress of the project. If Jonida has availability, book her now!"',
  },

  {
    avatar: AVATAR1,
    name: "Melanie S. - UpWork Client",
    review:
      '"Jonida is fantastic to work with, she is very skilled at what she does and easy to work with - I would highly recommend her and will definitely be working with her again."',
  },

  {
    avatar: AVATAR1,
    name: "KH - External Client",
    review:
      "I've had the pleasure of working with Jonida for years on multiple projects, including website development for many of my clients and SEO. She has incredible skills, even when my ideas as a designer sometimes go overboard. She’s always available to brainstorm solutions, highly organized, and a fast responder—truly an invaluable partner.",
  },
];

const WordpressReview = () => {
  return (
    <section id="testimonial">
      <h5>Kind Words from Clients</h5>
      <h2>What They’re Saying</h2>

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

export default WordpressReview;
