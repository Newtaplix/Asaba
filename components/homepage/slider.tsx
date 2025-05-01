"use client" 
import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel'
import { motion } from 'framer-motion'

const ProductsSlider = () => {
    
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
    className='mt-30'>
        <div className="text-center justify-center">
            <p className="para">Discover the Benefits</p>
            <h1 className="heading">Tire <motion.span
              initial={{
                opacity: 0,
                x: -20
            }}
            whileInView= {{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.8,
                    delay: 1
                }
            }}
            viewport={{
                once:true,
                amount: 0.5
            }}
            >Solutions</motion.span></h1>
            <p className="para">Unleash the True Potential of Your Ride with Our Top-Tire Offerings</p>
        </div>
        <div className="w-full hidden md:flex gap-4 flex mt-3">
            <div className='pt-5 border flex-1 flex flex-col items-center h-100'>
              <div className='w-full mt-10 h-[50%] relative'>
                <Image fill src={'/home/price1.jpg'} alt='Options'/>
              </div>
              <div className="p-3 text-center mt-4">
                  <h2 className='font-bold text-gray-600 text-xl'>Engineered For Excellence</h2>
                  <p>Elavating the Standard of Tires</p>
              </div>
            </div>
            <div className='pt-5 border flex-1 flex flex-col items-center h-100'>
                <div className='w-full mt-10 h-[50%] relative'>
                  <Image fill src={'/home/price2.jpg'} alt='Options'/>
                </div>
                <div className="p-3 text-center mt-4">
                    <h2 className='font-bold text-gray-600 text-xl'>Engineered For Excellence</h2>
                    <p>Elavating the Standard of Tires</p>
                </div>
              </div>

            <div className='pt-5 border flex-1 flex flex-col items-center h-100'>
              <div className='w-full mt-10 h-[50%] relative'>
                <Image fill src={'/home/price3.jpg'} alt='Options'/>
              </div>
              <div className="p-3 text-center mt-4">
                  <h2 className='font-bold text-gray-600 text-xl'>Engineered For Excellence</h2>
                  <p>Elavating the Standard of Tires</p>
              </div>
            </div>

            <div className='pt-5 border flex-1 flex flex-col items-center h-100'>
              <div className='w-full mt-10 h-[50%] relative'>
                <Image fill src={'/home/price4.jpg'} alt='Options'/>
              </div>
              <div className="p-3 text-center mt-4">
                  <h2 className='font-bold text-gray-600 text-xl'>Engineered For Excellence</h2>
                  <p>Elavating the Standard of Tires</p>
              </div>
            </div>

        </div>
        <Carousel className='md:hidden'>
          <CarouselContent>
            <CarouselItem>
                <div className='pt-5 border flex-1 flex flex-col items-center h-100'>
                  <div className='w-full mt-10 h-[50%] relative'>
                    <Image fill src={'/home/price4.jpg'} alt='Options'/>
                  </div>
                  <div className="p-3 text-center mt-4">
                      <h2 className='font-bold text-gray-600 text-xl'>Engineered For Excellence</h2>
                      <p>Elavating the Standard of Tires</p>
                  </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className='pt-5 border flex-1 flex flex-col items-center h-100'>
                  <div className='w-full mt-10 h-[50%] relative'>
                    <Image fill src={'/home/price4.jpg'} alt='Options'/>
                  </div>
                  <div className="p-3 text-center mt-4">
                      <h2 className='font-bold text-gray-600 text-xl'>Engineered For Excellence</h2>
                      <p>Elavating the Standard of Tires</p>
                  </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className='pt-5 border flex-1 flex flex-col items-center h-100'>
                  <div className='w-full mt-10 h-[50%] relative'>
                    <Image fill src={'/home/price4.jpg'} alt='Options'/>
                  </div>
                  <div className="p-3 text-center mt-4">
                      <h2 className='font-bold text-gray-600 text-xl'>Engineered For Excellence</h2>
                      <p>Elavating the Standard of Tires</p>
                  </div>
                </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
    </motion.div>
  )
}

export default ProductsSlider