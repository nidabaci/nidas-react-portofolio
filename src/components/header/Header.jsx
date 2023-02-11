import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile-pic-no-bg.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* BEM METODOLOGY OF NAMING CLASSES */}
        <h5>Hello I am</h5>
        <h1>Jonida Baçi</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
            <img src={ME} alt="Profile Pic" />
        </div>
  
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header