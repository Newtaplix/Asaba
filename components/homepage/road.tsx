"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Road = () => {
  return (
    <div className='flex items-center h-screen justify-center w-full'>
        <div className='text-center flex items-center justify-center relative w-full h-[60%] bg-[url("/home/pine.jpg")] bg-cover bg-center'>
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
           className='z-10'>
                <p className='imgtxt'>Elevate Your Commute</p>
                <h1 className='heading text-white'>Seamless Ride</h1>
                <p className='mb-5 text-xl md:text-2xl text-white'>Engineered for Comfort At Every Mile</p>
           </motion.div>
        </div>
    </div>
  )
}

export default Road