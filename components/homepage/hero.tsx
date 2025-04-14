'use client'
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'



const HeroSection = () => {

  return (
    <div className='h-screen w-full flex items-center'>
        <div className=" w-full text-center justify-center flex flex-col items-center h-full bg-transparent relative overflow-hidden">
             <div>
                <video autoPlay muted loop playsInline className='w-full h-full ' src="/home/vidbg.mp4"></video>
             </div>
              <div className='absolute w-full h-full bg-transparent text-left flex items-center absolute px-4'>
                <div className='w-1/2 text-white'>
                     <div>
                          <h1 className="font-bold text-white text-6xl italic">Built for Every Road</h1>
                      </div>
                      <div>
                          <p>Trusted by Drivers Everywhere.</p>
                      </div>
                      <div>
                          <p className=''>Discover durable, high performance tires for any vehicle and road condition</p>
                      </div>
                </div>
              </div>
              <div className='absolute bottom-2 bg-white justify-center flex gap-4 w-1/2 rounded-md p-4'>
                  <button className='px-6 py-2 rounded-md bg-black text-white font-bold'>Explore Tires</button>
                  <button className='px-6 py-2 rounded-md bg-black text-white font-bold'>Tires</button>
                  <button className='px-6 py-2 rounded-md bg-black text-white font-bold flex gap-2 items-center'>Shop <ShoppingCart/></button>
              </div>
               <div className="absolute mt-4 p-2 flex gap-4 mx-auto w-[50%] justify-center">
                    
                    <div className="h-20 rounded-md flex-1 relative">
                      <Image src={"/home/price1.jpg"} fill alt='svg'/>
                    </div>
                    
                </div>

          </div>
    </div>
  )
}

export default HeroSection