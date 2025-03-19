import React, { useRef } from 'react'
import { useIsVisible } from '../utils/UseIsVisible';

const HaveAnIdeaInMind = () => {
    const ref3 = useRef();
    const isVisible3 = useIsVisible(ref3);

  return (
    <div ref={ref3} className={`flex justify-center items-center gap-5 flex-wrap w-full p-5 bg-gray-100 transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
        <p className='font-normal text-lg'>Have an Idea in Mind?</p>
        <a href="https://forms.gle/RwWko3PJ4JDj65rG8">
            <button className='bg-black text-white py-2 px-6 rounded-xl'>Let's discuss</button>
        </a>
    </div>
  )
}

export default HaveAnIdeaInMind
