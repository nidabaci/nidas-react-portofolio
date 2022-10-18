import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portofolio from './components/portofolio/Portofolio'
import Services from './components/services/Services'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Favicon from 'react-favicon'

export const App = () => {
  return (
    <>
    <Favicon url="https://cdn-icons-png.flaticon.com/512/3498/3498215.png"></Favicon>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portofolio />
    <Services />
    <Testimonial />
    <Contact />
    <Footer />
    </>
  )
}