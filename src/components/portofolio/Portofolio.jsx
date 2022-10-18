import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/bankis-frontpage.PNG'

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        <article className='portofolio__item' >
          <div className='portofolio__item-image'>
            <img src={IMG1} alt="Bankist App" />
          </div>
          <h3>This is a portofolio item title</h3>
          <a href="#" className='btn'>Github</a>
          <a href="#" className='btn btn-primary' target='__blank'>Live Demo</a>
        </article>

        <article className='portofolio__item' >
          <div className='portofolio__item-image'>
            <img src={IMG1} alt="Bankist App" />
          </div>
          <h3>This is a portofolio item title</h3>
          <a href="#" className='btn'>Github</a>
          <a href="#" className='btn btn-primary' target='__blank'>Live Demo</a>
        </article>

        <article className='portofolio__item' >
          <div className='portofolio__item-image'>
            <img src={IMG1} alt="Bankist App" />
          </div>
          <h3>This is a portofolio item title</h3>
          <a href="#" className='btn'>Github</a>
          <a href="#" className='btn btn-primary' target='__blank'>Live Demo</a>
        </article>

      </div>
    </section>
  )
}

export default Portofolio