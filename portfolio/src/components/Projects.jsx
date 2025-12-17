import React from 'react'
import {motion} from 'framer-motion'
const Projects = () => {


    const projects =[
        {id:1,name:'Pharmacy Website',description:'An all-in-one digital pharmacy for ordering medicines online and scheduling doctor appointments seamlessly.',link:'https://github.com/Anees-al/pharmacy-app'},
        {id:2,name:'Mern Authentication',description:'A secure MERN-based authentication system with user registration, login, and JWT-based access control',link:'https://github.com/Anees-al/MERN-Authentication'},
        {id:3,name:'Billing System',description:'A billing system is an application that generates invoices and manages products, where the backend allows adding and managing products and handles all billing calculations and data storage.',link:'https://github.com/Anees-al/MERN-Authentication'}
    ]
  return (
    <div className='flex flex-col p-10'>
        <h1 className='text-5xl font-bold '>My <span className='text-purple-600'>Projects</span></h1>
        <div className='flex md:flex-row flex-col justify-around gap-10 mt-10'>
         {projects.map((project)=>(
            <motion.div className='flex flex-col w-[250px] h-[300px] border justify-between p-2 rounded-lg hover:shadow-lg border-gray-200 bg-gray-100' key={project.id} initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}}>
              <img src="" alt="" />
              <div>
                <p className='text-center font-bold'>{project.name}</p>
                <p className='font semibold text-gray-800'>{project.description}</p>
               <a href={project.link}><button className='text-sm text-white bg-purple-500 px-4 py-1 font-bold rounded-lg hover:shadow-lg mt-5 cursor-pointer'>Go to project</button></a> 
              </div>
            </motion.div>
         ))}
        </div>

        <p className='text-lg font-bold text-gray-800 text-center mt-10'>Visit my github for more projects</p>
      
    </div>
  )
}

export default Projects
