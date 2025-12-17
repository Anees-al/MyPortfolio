import React from 'react'
import profile from '../assets/developer_male.jpg'
import {motion} from  'framer-motion'

const About = () => {
  return (
    <section className="min-h-screen px-16 py-16 flex flex-col md:flex-row items-center gap-10 md:gap-20 space-grotesk">
      
      {/* Image */}
      <motion.img  initial={{x:-100,opacity:0}}  whileInView={{x:0,opacity:1}} transition={{duration:0.5}}
        src={profile}
        alt="Developer illustration"
        className="w-[260px] h-[260px] md:w-[420px] md:h-[420px] rounded-xl shadow-md object-cover"
      />

      {/* Text */}
      <motion.div className="max-w-2xl text-center md:text-left" initial={{x:100,opacity:0}}  whileInView={{x:0,opacity:1}} transition={{duration:0.5}}>
        <h1 className="font-black text-4xl md:text-5xl">
          <span className="text-purple-600">About</span> Me
        </h1>

        <p className="text-base md:text-lg font-medium text-gray-500 mt-6 leading-relaxed">
          I’m a web developer with hands-on experience in building responsive and
          scalable web applications using modern JavaScript technologies. I enjoy
          working across the MERN ecosystem, with a strong focus on frontend
          development using React.
        </p>

        <p className="text-base md:text-lg font-medium text-gray-500 mt-4 leading-relaxed">
          I care deeply about clean UI, performance, and maintainable code, and I
          enjoy turning ideas into practical, user-friendly products. I’m always
          learning, experimenting, and improving my skills to build better digital
          experiences.
        </p>
      </motion.div>

    </section>
  )
}

export default About
