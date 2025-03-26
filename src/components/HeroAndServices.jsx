import React, { useEffect, useRef, useState } from 'react'
import LetsConnectButton from './LetsConnectButton'
import Services from './Services'
import vsCodeScreenshot from "../assets/vsCodeScreenshot.png";
import Projects from './Projects';
import HaveAnIdeaInMind from './HaveAnIdeaInMind';
import { useIsVisible } from '../utils/UseIsVisible';

const HeroAndServices = () => {
  const text = "Building Websites Growing Businesses.";
  const words = text.split(" ");

  const ref6 = useRef();
  const isVisible6 = useIsVisible(ref6);

  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, []);

  return (
    <div key={key} className='w-full flex flex-col mt-44 inter'>
        <div id='home' className='flex flex-col justify-center items-center gap-5'>
            {/* <div className='flex justify-center items-center flex-wrap gap-2'>
                <p className='text-3xl xl:text-5xl font-normal xl:font-bold'>Building Websites</p>
                <p className='text-3xl xl:text-5xl font-normal xl:font-bold text-blue-500'>Growing</p>
                <p className='text-3xl xl:text-5xl font-normal xl:font-bold'>Businesses</p>
            </div> */}
            <p className='xl:hidden text-3xl xl:text-5xl font-normal xl:font-bold text-center pb-1'>
              {words.map((word, index) => (
                <span key={index} className={index === 2 ? "text-blue-500" : ""}>
                  {word}{" "}
                </span>
              ))}
            </p>
            <p key={key} className='hidden xl:block text-3xl xl:text-5xl font-normal xl:font-bold pb-1'>
              {words.map((word, index) => (
                <span key={index} className={index === 2 ? "text-blue-500" : ""}>
                  {word}{" "}
                </span>
              ))}
            </p>
            <p className='font-light xl:text-lg text-center text-gray-600'>Helping businesses build stunning websites just like this one</p>
            <LetsConnectButton />
            <div ref={ref6} className={`hidden md:inline-flex border-8 rounded-3xl mx-5 mt-20 transition-opacity ease-in duration-700 ${isVisible6 ? "opacity-100" : "opacity-0"}`}>
                <img src={vsCodeScreenshot} alt="codeScreenshot" className='w-[100rem] rounded-xl' />
            </div>
            <Services />
            <Projects />
            <HaveAnIdeaInMind />
        </div>
    </div>
  )
}

export default HeroAndServices
