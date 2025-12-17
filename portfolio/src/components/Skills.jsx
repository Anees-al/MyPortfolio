import React from 'react'
import {motion} from  'framer-motion'

const Skills = () => {
  return (
    <section className="px-6 py-16 space-grotesk">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-black mb-12">
        Skills<span className="text-purple-600">.</span>
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Web Design */}
        <motion.div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition" initial={{scale:0,opacity:0}}  whileInView={{scale:1,opacity:1}} transition={{duration:1.2,type:'string',stiffness:120,damping:20}}>
          <h2 className="text-xl font-bold mb-3">Web Design</h2>
          <p className="text-gray-600">UI / UX Design</p>
          <p className="text-gray-600">Responsive Design</p>
        </motion.div>

        {/* Frontend */}
        <motion.div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition" initial={{scale:0,opacity:0}}  whileInView={{scale:1,opacity:1}} transition={{duration:1,type:'string',stiffness:120,damping:20}}>
          <h2 className="text-xl font-bold mb-3">Frontend</h2>
          <p className="text-gray-600">React.js</p>
          <p className="text-gray-600">JavaScript (ES6+)</p>
          <p className="text-gray-600">Tailwind CSS</p>
          <p className="text-gray-600">CSS3</p>
        </motion.div>

        {/* Backend */}
        <motion.div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition" initial={{scale:0,opacity:0}}  whileInView={{scale:1,opacity:1}} transition={{duration:1,type:'string',stiffness:120,damping:20}}>
          <h2 className="text-xl font-bold mb-3">Backend</h2>
          <p className="text-gray-600">Node.js</p>
          <p className="text-gray-600">Express.js</p>
        </motion.div>

        {/* Database */}
        <motion.div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition" initial={{scale:0,opacity:0}}  whileInView={{scale:1,opacity:1}} transition={{duration:1,type:'string',stiffness:120,damping:20}}>
          <h2 className="text-xl font-bold mb-3">Database</h2>
          <p className="text-gray-600">MongoDB</p>
          <p className="text-gray-600">Mongoose</p>
        </motion.div>

        {/* Version Control */}
        <motion.div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition" initial={{scale:0,opacity:0}}  whileInView={{scale:1,opacity:1}} transition={{duration:1,type:'string',stiffness:120,damping:20}}>
          <h2 className="text-xl font-bold mb-3">Version Control</h2>
          <p className="text-gray-600">Git</p>
          <p className="text-gray-600">GitHub</p>
        </motion.div>

        {/* Tools & Languages */}
        <motion.div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition" initial={{scale:0,opacity:0}}  whileInView={{scale:1,opacity:1}} transition={{duration:1,type:'string',stiffness:120,damping:20}}>
          <h2 className="text-xl font-bold mb-3">Tools & Languages</h2>
          <p className="text-gray-600">Postman</p>
          <p className="text-gray-600">JavaScript</p>
          <p className="text-gray-600">C / C++</p>
          <p className="text-gray-600">Java</p>
          <p className="text-gray-600">Python</p>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
