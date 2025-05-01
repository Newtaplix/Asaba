"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Preview = () => {
  return (
    <div className='h-screen flex w-full items-center'>
        <div className='h-[60%] flex items-center bg-black/80 w-full bg-[url("/home/bgl.jpg")] bg-cover md:bg-cover bg-center relative'>
            <div className='absolute bg-black/60 w-full h-full top-0 left-0'/>
            <motion.div 
             initial={{
              opacity: 0,
              y: 20
              }}
              whileInView= {{
                  opacity: 1,
                  y: 0,
                  transition: {
                      duration: 0.5
                  }
              }}
              viewport={{
                  once:true,
                  amount: 0.5
              }}
            className='p-3 w-full text-center md:text-left z-10 md:w-[30%]'>
                <p className='imgtxt text-white'>Luxury Meets Performance</p>
                <h1 className='heading text-white'>Elavated</h1>
                <p className='imgtxt text-white'>Redefine your Automotive Journey with Our Cutting-Edge Technology</p>
                <button className='px-4 py-3 rounded-md md:rounded-full text-white bg-black/20 mt-4 shadow-sm shadow-white'>Learn More</button>
            </motion.div>
        </div>        
    </div>
  )
}

export default Preview