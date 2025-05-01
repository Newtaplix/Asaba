'use client'
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HeroSection = () => {

  return (
    <div className='h-screen w-full bg-black'>
        <div className=" w-full bg-gray-300 text-center justify-center flex flex-col items-center h-full relative overflow-hidden">
             <div className='w-full h-full bg-red-500'>
                <video autoPlay muted loop playsInline className='w-full md:flex hidden' src="/home/vidbg.mp4"></video>
             </div>
             <video autoPlay muted loop playsInline className='w-full absolute top-0 left-0 object-cover md:hidden h-full' src="/home/vidbg.mp4"></video>
             <div className="absolute w-full h-full top-0 bg-black/60"></div>
              <div className='md:mx-auto md:w-300 h-full bg-transparent text-left flex md:items-center absolute'>
                <div className=''>
                  <div className='text-left px-2 mt-32 w-[90%] md:mt-0 lg:max-w-200 text-white'>
                      <div>
                            <motion.h1
                            initial={{
                              opacity: 0,
                              x: -10
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              transition: {
                                duration: 0.2
                              }

                            }}
                            viewport={{
                              once: true,
  
                            }}
                             className="font-bold text-white mb-3 md:mb-0 text-5xl md:text-7xl">Smart Wheels for a Smarter World</motion.h1>
                        </div>
                        <div>
                            <p className='text-xl text-gray-200'>Discover durable, high performance tires for any vehicle and road condition</p>
                        </div>
                        <button className='px-2 rounded-md md:rounded-full py-2 border-2 border-gray-500 backdrop-blur-md mt-5'>Discover More</button>
                  </div>
                 
                </div>
                <div className='absolute bottom-0 md:bottom-2 bg-white w-full justify-center flex flex-col md:flex-row gap-4 w-1/2 rounded-0 md:rounded-md p-4'>
                  <button className='px-6 py-2 rounded-md bg-black text-white font-bold'>Explore Tires</button>
                  <button className='px-6 py-2 rounded-md bg-black text-white font-bold'>Tires</button>
                  <Link href="/shop"><button className='px-6 py-2 rounded-md w-full justify-center bg-black text-white font-bold flex gap-2 items-center'>Shop <ShoppingCart/></button></Link>
                </div>
              </div>
          </div>
    </div>
  )
}

export default HeroSection