import { Menu } from 'lucide-react'
import React from 'react'

const NavbarList = ({ setOpen }) => {
  return (
    <>
      <ul className='hidden xl:flex justify-center items-center gap-6'>
          <a href="#home">
            <li className='font-light text-gray-700'>Home</li>
          </a>
          <a href="#services">
            <li className='font-light text-gray-700'>Services</li>
          </a>
          <a href="#projects">
            <li className='font-light text-gray-700'>Projects</li>
          </a>
          <a href="https://forms.gle/RwWko3PJ4JDj65rG8">
            <li className='font-light text-gray-700'>
                <button className='font-light py-2 px-4 bg-black text-white rounded-lg'>
                    Contact
                </button>
            </li>
          </a>
      </ul>
      <Menu className='xl:hidden hover:cursor-pointer' onClick={() => setOpen(true)} />
    </>
  )
}

export default NavbarList
