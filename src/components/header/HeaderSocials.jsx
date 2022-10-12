import React from 'react'
import { BsLinkedin } from 'react-icons/bs' 
import { BsGithub } from 'react-icons/bs' 
import { BsTwitter } from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://github.com/nidabaci" target="_blank" alt="LinkedIn"><BsLinkedin/></a>
      <a href="https://www.linkedin.com/in/jonida-baci99" target="_blank" alt="LinkedIn"><BsGithub/></a>
      <a href="https://twitter.com/NidaBaci514#" target="_blank" alt="LinkedIn"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials