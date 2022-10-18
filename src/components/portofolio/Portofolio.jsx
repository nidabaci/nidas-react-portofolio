import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/bankis-frontpage.PNG'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Bankist App',
    github: 'https://github.com',
    demo: 'https://dazzling-kashata-980f32.netlify.app/'
  },

  {
    id: 2,
    image: IMG1,
    title: 'Project 2',
    github: 'https://github.com',
    demo: 'https://dazzling-kashata-980f32.netlify.app/'
  },

  {
    id: 3,
    image: IMG1,
    title: 'Project 3',
    github: 'https://github.com',
    demo: 'https://dazzling-kashata-980f32.netlify.app/'
  }
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

    <div className="container portofolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portofolio__item' >
          <div className='portofolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portofolio__item-cta'>
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
          )
        })
      }


      </div>
    </section>
  )
}

export default Portofolio