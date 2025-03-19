import React, { useState } from 'react'
import Brand from './Brand'
import { Outlet } from 'react-router-dom'
import NavbarList from './NavbarList'
import { X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='fixed top-0 w-full flex justify-between items-center p-6 inter bg-white border-b-2 border-b-gray-100'>
        <Brand />
        <NavbarList setOpen={setOpen} />
      </div>
      {open && (
        <ul className='fixed top-0 flex xl:hidden flex-col justify-center items-start w-full p-5 bg-gray-100 gap-6 inter'>
          <div className='flex justify-between items-center w-full'>
            <a href="#home">
              <li className='font-light text-gray-700'>Home</li>
            </a>
            <X className='hover:cursor-pointer' onClick={() => setOpen(false)} />
          </div>
          <a href="#services">
            <li className='font-light text-gray-700'>Services</li>
          </a>
          <a href="#projects">
            <li className='font-light text-gray-700'>Projects</li>
          </a>
          <a href="https://forms.gle/RwWko3PJ4JDj65rG8">
            <li className='font-light text-gray-700'>
                <button className='font-light py-2 px-4 bg-black text-white rounded-lg hover:cursor-pointer'>
                    Contact
                </button>
            </li>
          </a>
        </ul>
      )}
      <Outlet />
    </>
  )
}

export default Navbar
