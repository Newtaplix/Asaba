"use client"
import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { motion } from 'framer-motion'



const Samples = () => {

  
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
        amount: 0.3
    }}
    className="w-full py-3">
        <motion.div 
        className='w-full md:w-[60%] mx-auto text-center md:text-left p-3'>
            <p className='para2'>Unlock the Power of Tires</p>
            <h1 className='heading'>Tire Technology Reimagined</h1>
            <p className='para'>Unlock the Secrets of Tire Performance. Explore our Cutting-Edge Innovations</p>
        </motion.div>

        <div className="flex hidden md:flex gap-5 flex-wrap">
            <div className="flex-1 bg-gray-900/30 h-100 relative">
                <Image src="/home/sample1.jpg" fill alt="sample"/>
            </div>
            <div className="flex-1 bg-gray-900/30 h-100 relative">
                <Image src="/home/sample2.jpg" fill alt="sample"/>
            </div>
            <div className="flex-1 bg-gray-900/30 h-100 relative">
                <Image src="/home/sample3.jpg" fill alt="sample"/>
            </div>
        </div>
        <Carousel className='md:hidden'>
            <CarouselContent>
                <CarouselItem>
                    <div className="flex-1 bg-gray-900/30 h-100 relative">
                        <Image src="/home/sample1.jpg" fill alt="sample"/>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="flex-1 bg-gray-900/30 h-100 relative">
                        <Image src="/home/sample1.jpg" fill alt="sample"/>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="flex-1 bg-gray-900/30 h-100 relative">
                        <Image src="/home/sample1.jpg" fill alt="sample"/>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>

    </motion.div>
  )
}

export default Samples