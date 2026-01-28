import React from 'react'
import profile from '../assets/profile.jpeg'
import {motion} from 'framer-motion'
import resume from '../assets/Anees Resume.pdf'
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-6">
      
      {/* Text Section */}
      <motion.div className="flex flex-col space-grotesk text-center md:text-left" initial={{x:-100,opacity:0}}  whileInView={{x:0,opacity:1}} transition={{duration:0.5}}>
        <p className="text-xl md:text-2xl font-semibold">
          Hi, I’m Anees
        </p>

        <h1 className="text-4xl md:text-6xl font-black leading-tight">
          <span className="text-purple-600">Mern Stack</span><br />
           Developer
        </h1>

        <p className="text-base md:text-xl text-gray-500 mt-4 max-w-xl">
          I build clean, responsive, and user-friendly web interfaces using
          modern JavaScript and React.
        </p>
        <a className='px-6 py-2 bg-black text-lg text-center font-semibold rounded-lg text-white mt-6 cursor-pointer shadow-lg hover:shadow-xl shadow-gray-400' href={resume} target="_blank" rel="noopener noreferrer">Get my resume</a>


      </motion.div>

      {/* Image Section */}
      <motion.div initial={{x:100,opacity:0}}  whileInView={{x:0,opacity:1}} transition={{duration:0.5}}>
        <img
          src={profile}
          alt="Anees profile"
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full
          border border-gray-300 outline outline-2 outline-gray-200 outline-offset-8"
        />
      </motion.div>

          </section>
  )
}

export default Hero
