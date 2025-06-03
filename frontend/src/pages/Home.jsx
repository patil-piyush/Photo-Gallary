import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Features/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default Home