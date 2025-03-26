import { Globe, PenTool, Smartphone } from 'lucide-react'
import React, { useRef } from 'react'
import { useIsVisible } from '../utils/UseIsVisible'

const services = [
    {
        Icon: Globe,
        title: "Web Development",
        description: "Building professional and aesthetic business websites using modern frameworks such as React JS and Next JS."
    },
    {
        Icon: Smartphone,
        title: "App Development",
        description: "Using React Native to build cross platform compatible apps that are lightweight and can easily bring your idea to life."
    },
    {
        Icon: PenTool,
        title: "Content Writing",
        description: "Writing Technical Content that educates on concepts of Web Development and provides practical knowledge with the help of project related articles"
    }
]

const Service = ({ Icon, title, description }) => {
    return (
        <div className='flex justify-start items-start gap-2'>
            <Icon />
            <div className='flex flex-col gap-2'>
                <p className='font-normal'>{title}</p>
                <p className='text-sm font-light text-gray-700 max-w-sm'>{description}</p>
            </div>
        </div>
    )
}

const Services = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div id='services' ref={ref1} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-16 bg-gray-100 w-full transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      {services.map((service) => {
        return <Service key={service.title} Icon={service.Icon} title={service.title} description={service.description} />
      })}
    </div>
  )
}

export default Services
