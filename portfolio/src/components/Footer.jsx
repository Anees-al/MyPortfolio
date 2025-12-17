import React from 'react'
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10
        flex flex-col md:flex-row md:justify-between gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-3xl font-black kenia-regular">Anees.</p>

          <p className="text-gray-600 font-semibold max-w-md">
            MERN Stack Developer crafting modern, scalable, and user-friendly web applications.
          </p>

          <div className="flex gap-5 justify-center md:justify-start text-xl">
        <a href="https://www.instagram.com/_anee_s.__/" target="_blank"><FaInstagram className="hover:text-purple-600 cursor-pointer" /></a>
       <a href="https://wa.me/7025249503" target="_blank"> <FaWhatsapp className="hover:text-purple-600 cursor-pointer" /></a>
        <a href="https://www.linkedin.com/in/anees-al-b16b1431b/" target="_blank"><FaLinkedin className="hover:text-purple-600 cursor-pointer" /></a>
        <a href="mailto:aneesansariii123@gmail.com"><SiGmail className="hover:text-purple-600 cursor-pointer" /></a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="w-full h-10 bg-purple-600 flex items-center justify-center">
        <p className="text-white text-sm font-medium">
          © {new Date().getFullYear()} Anees. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer
