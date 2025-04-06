'use client'
import React from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../SectionLabel'

const Testimonials = () => {
  return (
    <div className='mt-30 flex flex-col'>
        <SectionLabel text="Testimonials"/>
        <div className="w-full p-2 relative mt-3" >
           <motion.div className='grid grid-cols-1 md:grid-cols-2 space-x-2 gap-3 h-120 md:h-fit overflow-hidden'>
                    <div className='border-2 flex-1 border-gray-500/10 shadow-lg rounded-md p-2'>
                        <h1 className="text-2xl text-gray-900 font-bold">
                          Excellent Customer Support
                        </h1>
                        <div className='text-left text-gray-500 w-[100%] italic'>
                            <p>-Joel B., Houston, TX</p>
                            <p>
                            Had a few questions before buying, and the support team guided me perfectly. Got exactly what I needed
                            </p>
                        </div>
                    </div>
                    <div className='border-2 flex-1 border-gray-500/10 shadow-lg rounded-md p-2'>
                        <h1 className="text-2xl text-gray-900 font-bold">
                          Reliable even in the rain.
                        </h1>
                        <div className='text-left text-gray-500 w-[100%] italic'>
                            <p>-Aisha., Houston, TX</p>
                            <p>
                              Driving in wet conditions used to scare me, but with these tires, I feel confident. Amazing grip and control!
                            </p>
                        </div>
                    </div>
                    <div className='border-2 flex-1 border-gray-500/10 shadow-lg rounded-md p-2'>
                        <h1 className="text-2xl text-gray-900 font-bold">
                        Great service and fast delivery
                        </h1>
                        <div className='text-left text-gray-500 w-[100%] italic'>
                            <p>-Aisha., Houston, TX</p>
                            <p>
                            I ordered tires online and they arrived in just two days. The quality was top-notch and installation was quick. Highly recommend!
                            </p>
                        </div>
                    </div>
                    <div className='border-2 flex-1 border-gray-500/10 shadow-lg rounded-md p-2'>
                        <h1 className="text-2xl text-gray-900 font-bold">
                        Smooth ride and great drip
                        </h1>
                        <div className='text-left text-gray-500 w-[100%] italic'>
                            <p>-Daniel K., Atlanta, GA</p>
                            <p>
                            I replaced my old tires with Michelin Energy Savers and immediately noticed how quiet and smooth my ride became. Totally worth the price!
                            </p>
                        </div>
                    </div>
           </motion.div>
           <p className="text-right p-2 md:hidden">More...</p>
        </div>
    </div>
  )
}

export default Testimonials