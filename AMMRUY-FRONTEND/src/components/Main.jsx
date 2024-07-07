import React, { useState } from 'react'
import Service from './Service'
import Feedback from './Feedback'
import AboutUs from './AboutUs'
import Authentication from './Authentication'
import Testimonials from './Testimonials'
import ServicePage from './ServicePage'
import HeroSection from './HeroSection'
import { NavBar } from '../reusable components/NavBar'
import { Footer } from '../reusable components/Footer'
import ContactUs from './Contact-us'
import Rating from './Rating'
import WhyChooseUs from './WhyChooseUs'

function Main() {
  const [hover, sethover] = useState(false);
  setTimeout(() => {
    sethover(false);
  }, 10000);
  return (
    <div
      onMouseMove={() => sethover(true)}
    >
      <NavBar
        hover={hover}
        status={true}
        className='fixed'
      />
      <section id="hero">
      <HeroSection />
      </section>
      <Service />
      <Rating/>
      <WhyChooseUs/>
      <Testimonials />
      <section id="contact">
      <Feedback />
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Main
