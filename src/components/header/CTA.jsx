import React from 'react'
import CV from '../../assets/Jonida_Baçi_-_Web_Developer.pdf'
import ME from '../../assets/profile-pic.jpg'
function CTA() {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>

        <div className='me'>
            <img src={ME} alt="Profile Pic" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
  )
}

export default CTA