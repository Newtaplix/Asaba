'use client'
import Image from 'next/image'
import React from 'react'
import { LucideWrench } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import MainButton from '../button'
import Wheel from '../Wheel'


const variants: Variants = {
  visible : { opacity: 1, y:0},
  hidden : { opacity: 0, y:20}
}

const HeroSection = () => {

  return (
    <div>
        <div className='flex gap-2 mt-20 justify-center items-center p-2'>
            <motion.div 
            variants={variants} 
            initial="hidden"
            transition={{ duration: 1}} 
            whileInView="visible" 
            className="text-center md:text-left">
                <h1 className='text-3xl font-bold flex-col md:flex-row flex gap-1  justify-center items-center md:mx-0 md:justify-start'>   
                  <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className='primary rounded-full h-8 w-8 flex flex-col items-center justify-center text-white'><LucideWrench/></motion.div>
                 <span>Welcome to</span> <span className="name">Asaba Auto Trading</span></h1>
                <p className='my-2 text-xl'>We are the solution to all your wheel problems. Making your vehicle experience seamless 
                  and breathtaking, giving your vehicle the ability to reach the highest peaks.
                </p>
                <motion.div variants={variants} initial="hidden" animate="visible" transition={{ duration: 3}}><MainButton text='Know More'/></motion.div>
            </motion.div>
            <motion.div 
            animate={{ y: [0, 10, 0] }}   
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut"}} 
            className='hidden md:block rounded-md shadow-md p-2'>
                <Image width={1000} height={408} alt='Hero section' src={'/hero.png'}/>
            </motion.div>
        </div>
        <div>
          <Wheel/>
        </div>
    </div>
  )
}

export default HeroSection