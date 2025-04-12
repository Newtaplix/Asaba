'use client'
import React from 'react'




const HeroSection = () => {

  return (
    <div className='h-screen w-full flex items-center'>
        <div className="my-80 w-full text-center justify-center flex flex-col items-center h-[60%] bg-gray-300 relative">
              <div>
                  <h1 className="heading">Discover The Perfect</h1>
              </div>
              <div>
                  <p className='para'>Elevate your driving experience with our unique Tire collection</p>
              </div>
              <div className='flex gap-4'>
                  <button className='px-6 py-5 bg-white font-bold'>Shop Now</button>
                  <button className='px-6 py-5 bg-black text-white font-bold'>Explore Tires</button>
                  <button className='px-6 py-5 bg-white font-bold'>Compare Tires</button>
              </div>
          </div>
    </div>
  )
}

export default HeroSection