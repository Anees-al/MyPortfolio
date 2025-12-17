import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {motion} from 'framer-motion'

const Github = () => {
  return (
    <motion.section className="px-6 py-16" initial={{x:-200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.8}}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12
        border border-gray-200 rounded-xl p-8 shadow-sm bg-gray-50">
        
        {/* Icon */}
        <FaGithub size={64} className="text-gray-800" />

        {/* Content */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-2xl font-black">
            Explore <span className="text-purple-600">My Code</span>
          </h2>

          <p className="text-gray-600 font-medium max-w-md">
            A curated collection of my projects, experiments, and learning work
            built with modern web technologies.
          </p>

          <a
            href="https://github.com/Anees-al"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit mx-auto md:mx-0
              bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg
              hover:bg-purple-700 transition"
          >
            View GitHub
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Github
