import React, { useState } from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import {motion} from 'framer-motion'

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav className="w-full px-6 py-3 flex items-center justify-between" initial={{y:-100,opacity:0}}  animate={{y:0,opacity:1}} transition={{duration:0.5}}>
      
      {/* Logo */}
      <p className="text-3xl font-black kenia-regular">Anees<span className='text-5xl text-purple-600'>.</span> </p>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 font-bold">
        <p className="cursor-pointer hover:text-purple-700">Home</p>
       <a href="#projects"> <p className="cursor-pointer hover:text-purple-700">Projects</p></a>
       <a href="#about"><p className="cursor-pointer hover:text-purple-700">About</p></a> 
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-4">
        <a href="https://www.instagram.com/_anee_s.__/" target="_blank"><FaInstagram className="hover:text-purple-600 cursor-pointer" /></a>
       <a href="https://wa.me/7025249503" target="_blank"> <FaWhatsapp className="hover:text-purple-600 cursor-pointer" /></a>
        <a href="https://www.linkedin.com/in/anees-al-b16b1431b/" target="_blank"><FaLinkedin className="hover:text-purple-600 cursor-pointer" /></a>
        <a href="mailto:aneesansariii123@gmail.com"><SiGmail className="hover:text-purple-600 cursor-pointer" /></a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
          <p className="cursor-pointer hover:text-purple-700">Home</p>
          <p className="cursor-pointer hover:text-purple-700">Projects</p>
          <p className="cursor-pointer hover:text-purple-700">About</p>

          <div className="flex gap-5 pt-4">
            <a href="https://www.instagram.com/_anee_s.__/" target="_blank"><FaInstagram className="hover:text-purple-600 cursor-pointer" /></a>
       <a href="https://wa.me/7025249503" target="_blank"> <FaWhatsapp className="hover:text-purple-600 cursor-pointer" /></a>
        <a href="https://www.linkedin.com/in/anees-al-b16b1431b/" target="_blank"><FaLinkedin className="hover:text-purple-600 cursor-pointer" /></a>
        <a href="mailto:aneesansariii123@gmail.com"><SiGmail className="hover:text-purple-600 cursor-pointer" /></a>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Nav
