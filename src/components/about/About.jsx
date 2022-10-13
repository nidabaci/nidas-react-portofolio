import React from 'react'
import './about.css'
import ME from '../../assets/profile-pic.jpg'
import { BsAward } from 'react-icons/bs'
import { ImUsers } from 'react-icons/im'
import { AiOutlineFolderOpen } from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
          <div className='about__me'> 
          <div className="about__me-image">
              <img src={ME} alt="Profile pic" />
          </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <ImUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>20</small>
              </article>
              <article className='about__card'>
                <BsAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years</small>
              </article>
              <article className='about__card'>
                <AiOutlineFolderOpen className='about__icon'/>
                <h5>Projects</h5>
                <small>10+</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim ea perferendis praesentium provident in sed dicta? At temporibus libero dolorem doloremque consequatur, quasi error maxime provident animi! Quo, nesciunt!
            </p>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>

          </div>
      </div>
    </section>
  )
}

export default About
