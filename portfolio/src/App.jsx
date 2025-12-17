import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Github from './components/Github'
import bg from './assets/bg.png'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Route ,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`}}>
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

export default App
