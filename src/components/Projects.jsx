import React, { useRef } from 'react'
import byteOrangeScreenshot from "../assets/byteOrangeScreenshot.png";
import cmeppuneScreenshot from "../assets/cmeppuneScreenshot.png";
import hotelDurgaScreenshot from "../assets/hotelDurgaScreenshot.png";
import { useIsVisible } from '../utils/UseIsVisible';

const projects = [
    {
        title: "Byte Orange",
        description: "Landing Page",
        image: byteOrangeScreenshot,
        website: "https://byteorange.com"
    },
    {
        title: "Hotel Durga",
        description: "Menu Card Website",
        image: hotelDurgaScreenshot,
        website: "https://durga-cafe-menu-one.vercel.app"
    },
    {
        title: "CMEP Pune",
        description: "Landing Page",
        image: cmeppuneScreenshot,
        website: "https://cmeppune.com"
    }
]

const Projects = () => {
    const ref2 = useRef();
    const isVisible2 = useIsVisible(ref2);

  return (
    <div id='projects' ref={ref2} className={`flex flex-col justify-center px-20 my-20 gap-10 transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <div className='flex flex-col gap-2'>
            <p className='font-medium text-lg'>Projects</p>
            <p className='font-light text-gray-700'>The projects I have built for my clients</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {projects.map((project) => {
                return (
                    <a href={project.website} key={project.title}>
                        <div className='flex flex-col gap-8 p-5 border-2 border-gray-100 rounded-lg'>
                            <div className='flex flex-col gap-1'>
                                <p className='font-medium'>{project.title}</p>
                                <p className='text-sm font-light text-gray-700'>{project.description}</p>
                                <img src={project.image} alt="projectImage" className='rounded-xl' />
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    </div>
  )
}

export default Projects
