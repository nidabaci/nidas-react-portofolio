import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>JAVASCRIPT</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>VUE JS</h4>
               <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>NEXT JS/ NUXT JS</h4>
               <small className='text-light'>Advanced beginner</small>
              </div>
            </article>
            
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>CSS</h4>
               <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>HTML5</h4>
               <small className='text-light'>Expert</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Back Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>C </h4>
              <small className='text-light'>Advanced beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JAVA</h4>
              <small className='text-light'>Advanced beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                 <h4>PYTHON</h4>
              <small className='text-light'>Competent</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>C++</h4>
              <small className='text-light'>Advanced beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>C#</h4>
              <small className='text-light'>Advanced beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
              <small className='text-light'>Competent</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience