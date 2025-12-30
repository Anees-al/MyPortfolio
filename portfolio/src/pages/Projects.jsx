
import Nav from '../components/Nav'
import movietitle from '../assets/movietitle1.png'

const Projects = () => {


    const projects=[
        {name:'Movie generator',description:'Find your next favorite film in one click. This app solves the "what should I watch?" problem by instantly picking a masterpiece from a strictly curated list of the 100 best movies of all time. No more endless scrolling—just one button, one top-tier recommendation, and zero wasted time.',imageUrl:movietitle,link:'https://anees-al.github.io/MovieGenerator/'}
    ]
  return (
    <div className='flex flex-col min-h-screen'>
        <Nav/>

        <div className='flex flex-col p-10'>
          <h1 className='text-3xl font-bold text-black'>Fun <span className='text-purple-500'>Projects</span> </h1>
          <div className='flex flex-col gap-2'>

            {projects.map((project,index)=>(
                <div className='flex flex-col bg-white p-3 w-[350px ]  mt-6 sm:w-[400px] gap-4 p-2'>
                     <img src={project.imageUrl} alt="" />
                    <p className='text-lg text-center font-bold'>{project.name}</p>
                  
                    <p className='text-sm font-semibold text-gray-500'>{project.description}</p>
                    <button className='text-lg font-semibold text-white bg-black px-4 py-1 rounded-lg shadow-lg cursor-pointer'><a href={project.link} target="_blank">Go to project</a></button>
                </div>
            ))}
               
          </div>
        </div>
      
    </div>
  )
}

export default Projects
