'use client'
import Image from 'next/image'
import React from 'react'
import { LucideWrench } from 'lucide-react'
import { motion } from 'framer-motion'
import MainButton from '../button'

const HeroSection = () => {
  return (
    <div className='flex gap-2 mt-20 justify-center items-center p-2'>
        <div className="text-center md:text-left">
            <h1 className='text-3xl font-bold flex gap-1 justify-center items-center md:mx-0 md:justify-start'><motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
             className='primary rounded-full h-8 w-8 flex items-center justify-center text-white'><LucideWrench/></motion.div> Welcome to <span className="name">Asaba.Inc</span></h1>
            <p className='my-2 text-xl'>We are the solution to all your wheel problems. Making your vehicle experience seamless 
              and breathtaking, giving your vehicle the ability to reach the highest peaks.
            </p>
            <MainButton text='Know More'/>
        </div>
        <div className='hidden md:block rounded-md shadow-md p-2'>
            <Image width={1000} height={408} alt='Hero section' src={'/hero.png'}/>
        </div>
    </div>
  )
}

export default HeroSection