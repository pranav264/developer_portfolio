import { Mail, Map, Phone } from 'lucide-react'
import React, { useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useIsVisible } from '../utils/UseIsVisible';

const Footer = () => {
    const ref5 = useRef();
    const isVisible5 = useIsVisible(ref5);

  return (
    <div ref={ref5} className={`grid grid-cols-1 xl:grid-cols-4 gap-y-16 px-5 w-[95%] mx-auto my-10 inter overflow-x-hidden transition-opacity ease-in duration-700 ${isVisible5 ? "opacity-100" : "opacity-0"}`}>
        <div className='flex flex-col gap-1'>
            <p className='font-semibold'>Pranav Bapat</p>
            <p className='font-light text-gray-500'>Full Stack Web Developer</p>
            <div className='flex justify-start items-center gap-2'>
                <a href="https://github.com/pranav264">
                    <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/pranav-bapat-a208531b6/">
                    <FaLinkedin size={20} />
                </a>
            </div>
        </div>
            <div className='flex flex-col gap-8'>
                <p className='font-medium'>Navigation</p>
                <div className='flex flex-col gap-3 font-light'>
                <a href="#home">
                    <p>Home</p>
                </a>
                <a href="#services">
                    <p>Services</p>
                </a>
                <a href="#projects">
                    <p>Projects</p>
                </a>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <p className='font-medium'>Projects</p>
                <div className='flex flex-col gap-3 font-light'>
                    <a href="https://byteorange.com">
                        <p>Byte Orange</p>
                    </a>
                    <a href="https://durga-cafe-menu-one.vercel.app">
                        <p>Hotel Durga</p>
                    </a>
                    <a href="https://cmeppune.com">
                        <p>CMEP Pune</p>
                    </a>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <p className='font-medium'>Contact</p>
                <div className='flex flex-col gap-3 font-light'>
                    <div className='flex justify-start items-center gap-2'>
                        <Mail />
                        <p>pranav.bapat.2002@gmail.com</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <Phone />
                        <p>+91 9370113540</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <Map />
                        <p>Pune, India</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer
