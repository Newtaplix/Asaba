"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const CallToAction = () => {
  return (
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
    className='flex flex-col text-center justify-center'>
        <div>
            <p className='para2'>Optimizing Your Drive</p>
            <h1 className='heading'>The Pinnacle Of Tire Craftsmanship</h1>
            <p className='para'>Unlock the Full Potential of Your Ride With our Unparraled Tire Solutions, <br/>
                Expertly Crafted to Deliver Uncompromising Performance
            </p>
            <Link href={'/shop'}><button className='px-8 py-3 rounded-md text-white mt-5 bg-black'>Explore Now</button></Link>
        </div>
        <div className='mt-20 flex w-full md:w-[50%] gap-4 mx-auto'>
             <div className="h-20 rounded-md flex-1 relative">
              <Image src={"/home/chevrolet-1.svg"} fill alt='svg'/>
            </div>
            <div className="h-20 rounded-md flex-1 relative">
              <Image src={"/home/michelin-17.svg"} fill alt='svg'/>
            </div>
            <div className="h-20 rounded-md flex-1 relative">
              <Image src={"/home/goodyear-5.svg"} fill alt='svg'/>
            </div>
            <div className="h-20 rounded-md flex-1 relative">
              <Image src={"/home/bridgestone.svg"} fill alt='svg'/>
            </div>
        </div>


    </motion.div>
  )
}

export default CallToAction