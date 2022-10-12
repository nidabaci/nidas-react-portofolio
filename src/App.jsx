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

export const App = () => {
  return (
    <>
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