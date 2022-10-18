import React from 'react'
import './testimonial.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar: AVATAR1,
    name: 'Tina Faturina',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias odit expedita rem quod porro corporis eveniet nihil non magnam reiciendis odio voluptates eius esse dignissimos at nulla eligendi perferendis eum obcaecati delectus, distinctio excepturi sequi! Nesciunt quo ipsa expedita eum?' 
  },

  {
    avatar: AVATAR2,
    name: 'Lionidha Gjidia',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias odit expedita rem quod porro corporis eveniet nihil non magnam reiciendis odio voluptates eius esse dignissimos at nulla eligendi perferendis eum obcaecati delectus, distinctio excepturi sequi! Nesciunt quo ipsa expedita eum?' 
  },

  {
    avatar: AVATAR3,
    name: 'Teo Pateo',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias odit expedita rem quod porro corporis eveniet nihil non magnam reiciendis odio voluptates eius esse dignissimos at nulla eligendi perferendis eum obcaecati delectus, distinctio excepturi sequi! Nesciunt quo ipsa expedita eum?' 
  }
]


const Testimonial = () => {
  return (
    <section>
      <h5>Review From People</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
      modules={[ Pagination, Navigation ]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review }, index) => {
            return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt={name} />
              </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial