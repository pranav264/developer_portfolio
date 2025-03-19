import React from 'react'
import HeroAndServices from '../components/HeroAndServices'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <HeroAndServices />
      <Footer />
      <div className='flex justify-center items-center m-5 inter text-sm font-light text-gray-700'>
        &copy; {new Date().getFullYear()} Pranav Bapat
      </div>
    </>
  )
}

export default Home
