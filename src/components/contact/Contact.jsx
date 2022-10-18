import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jonida.baci99@outlook.com</h5>
            <a href="mailto: jonida.baci99@outlook.com" target="__blank">Click here to send email</a>
          </article>

          <article className='contact__option'>
            <BsTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>nidabaci514</h5>
            <a href="https://twitter.com/NidaBaci514" target="__blank">My Twitter page</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Let's talk bussiness</h5>
            <a href="https://api.whatsapp.com/send?phone=355694718883" target="__blank">Send a whatsapp Message</a>
          </article>


        </div>
        {/* END OF CONTACT */}

        <form action="">
          <p>-Not functional yet-</p>
          <input type="text" name="name" id="" placeholder='Your Full Name Goes Here' required />
          <input type="email" name="email" id="" placeholder='Your Email Goes Here' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Tye Your Message Here...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Email</button>

        </form>

      </div>
    </section>
  )
}

export default contact