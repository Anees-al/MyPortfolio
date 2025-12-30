
import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Github from '../components/Github'

import Projects from '../components/Projects'
import Footer from '../components/Footer'




const Home = () => {
  return (
    <div>
       <Nav/>
      
      <Hero/>
     <section id='about'>
       <About/>
     </section>
      <Skills/>
      <Github/>
      <section id='projects'>
        <Projects/>
      </section>
       <Footer/>
    </div>
  )
}

export default Home
