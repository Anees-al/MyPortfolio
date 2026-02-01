
import Nav from '../components/Nav'
import movietitle from '../assets/movietitle1.png'
import tourism from '../assets/munnar.jpg'
import Footer from '../components/Footer'
import homeservice from '../assets/homemaintance.jpg'
import news from '../assets/news.jpg'

const Projects = () => {


    const projects=[
        {name:'Movie generator',description:'Find your next favorite film in one click. This app solves the "what should I watch?" problem by instantly picking a masterpiece from a strictly curated list of the 100 best movies of all time. No more endless scrolling—just one button, one top-tier recommendation, and zero wasted time.',imageUrl:movietitle,link:'https://anees-al.github.io/MovieGenerator/'},
        {name:'Keral Tourism Wesite',description:'A comprehensive web platform designed to provide a seamless travel-planning experience for tourists visiting Kerala. The project focuses on a "Mobile-First" design philosophy, ensuring that travelers can access crucial information on the go. It features curated sections for the state s famous backwaters, hill stations, and Ayurvedic wellness centers.',imageUrl:tourism,link:'https://anees-al.github.io/Tourism/'},
        {name:'House service Website',description:'A comprehensive service marketplace designed to bridge the gap between homeowners and certified service professionals (plumbing, electrical, cleaning). The platform focuses on high-conversion UI and a frictionless booking experience.',imageUrl:homeservice,link:'https://anees-al.github.io/homeService-website/'},
        {name:'News Website',description:'A responsive news website built using the News API, providing real-time headlines, category-based articles, and global coverage. Designed with performance, simplicity, and a user-friendly experience in mind.',imageUrl:news,link:'https://anees-al.github.io/news_website/'}
    ]
  return (
    <div className='flex flex-col min-h-screen'>
        <Nav/>

        <div className='flex flex-col p-10'>
          <h1 className='text-3xl font-bold text-black'>Fun <span className='text-purple-500'>Projects</span> </h1>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-10'>

            {projects.map((project,index)=>(
                <div className='flex flex-col  bg-white p-3 w-[350px ] h  mt-6 sm:w-[400px] gap-4 p-2'>
                     <img src={project.imageUrl} alt="" />
                    <p className='text-lg text-center font-bold'>{project.name}</p>
                  
                    <p className='text-sm font-semibold text-gray-500 '>{project.description}</p>
                    <button className='text-lg font-semibold text-white bg-black px-4 py-1 rounded-lg shadow-lg cursor-pointer'><a href={project.link} target="_blank">Go to project</a></button>
                </div>
            ))}
               
          </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Projects
