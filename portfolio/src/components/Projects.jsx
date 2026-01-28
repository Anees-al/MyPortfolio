import React from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import busbooking from  '../assets/busbooking.jpg'
import billing from '../assets/billing.jpg'
import doctorbooking from '../assets/doctorbooking.jpg'
const Projects = () => {


  const navigate=useNavigate();


    const projects =[
        {id:1,name:'Bus booking website',description:'A MERN-based responsive bus booking platform with real-time seat availability and a simple, intuitive booking flow.',link:' https://anees-al.github.io/busbooking/',imglink:busbooking},
        {id:2,name:'Doctor Booking website',description:'A responsive doctor booking website that allows users to schedule appointments through a simple and user-friendly interface.',link:' https://anees-al.github.io/busbooking/',imglink:doctorbooking},
        {id:3,name:'Billing System',description:'A billing system is an application that generates invoices, manages products, and handles all billing calculations through a backend.',link:'https://anees-al.github.io/billing-software/',imglink:billing}
    ]
  return (
    <div className='flex flex-col p-10'>
        <h1 className='text-5xl font-bold '>My <span className='text-purple-600'>Projects</span></h1>
        <div className='flex md:flex-row flex-col justify-around gap-10 mt-10'>
         {projects.map((project)=>(
            <motion.div className='flex flex-col w-[300px] h-[360px] border justify-between p-2 rounded-lg hover:shadow-lg border-gray-200 bg-gray-100' key={project.id} initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}}>
              <img src={project.imglink} alt="" />
              <div>
                <p className='text-xl text-center font-bold'>{project.name}</p>
                <p className='text-sm font semibold text-gray-800'>{project.description}</p>
               <a href={project.link}><button className='text-sm w-[270px] text-white bg-purple-500 px-4 py-2 font-bold rounded-lg hover:shadow-lg mt-5 cursor-pointer'>Go to project</button></a> 
              </div>
            </motion.div>
         ))}
        </div>

       <div className='flex flex-col items-center mt-5 bg-gray-100 rounded-lg py-6 gap-4'>
        <h1 className='text-lg sm:text-2xl font-black text-black'>Explore   <span className='text-purple-600'>My more Projects</span> </h1>
        <p className=' sm:text-lg w-[200px] sm:w-[700px] text-gray-500 font-semibold'>Check out my collection of web projects where I experiment with clean designs and functional code. From interactive UI components to handy web tools, see how I bring ideas to life using modern web technologies.</p>
         <button className='text-lg font-bold text-white text-center  bg-black px-4 py-2 w-[200px] rounded-lg shadow-gray-500 shadow-lg hover:shadow-xl cursor-pointer' onClick={()=>navigate('/MyPortfolio/projects')} >More projects</button>
       </div>
      
    </div>
  )
}

export default Projects
