import React from 'react'
import { BsLinkedin } from 'react-icons/bs' 
import { BsGithub } from 'react-icons/bs' 
import { BsTwitter } from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="#" target="_blank" alt="LinkedIn"><BsLinkedin/></a>
      <a href="#" target="_blank" alt="LinkedIn"><BsGithub/></a>
      <a href="#" target="_blank" alt="LinkedIn"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials