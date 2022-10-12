import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* BEM METODOLOGY OF NAMING CLASSES */}
        <h5>Hello</h5>
        <h1>Jonida Baci</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
      </div>
    </header>
  )
}

export default Header