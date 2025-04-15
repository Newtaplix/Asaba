'use client'
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import Wheel from '../Wheel'
import Link from 'next/link'


const HeroSection = () => {

  return (
    <div className='h-screen w-full bg-black'>
        <div className=" w-full bg-gray-300 text-center justify-center flex flex-col items-center h-full relative overflow-hidden">
             <div className='w-full h-full bg-red-500'>
                <video autoPlay muted loop playsInline className='w-full' src="/home/vidbg.mp4"></video>
             </div>
              <div className='mx-auto w-300 h-full bg-transparent text-left flex items-center absolute'>
                <div className='flex justify-between'>
                  <div className='max-w-200 text-white'>
                      <div>
                            <h1 className="font-bold text-white text-7xl">Smart Wheels for a Smarter World</h1>
                        </div>
                        <div>
                            <p className='text-xl'>Discover durable, high performance tires for any vehicle and road condition</p>
                        </div>
                        <button className='px-2 rounded-full py-2 border-2 border-gray-500 backdrop-blur-sm mt-5'>Discover More</button>
                  </div>
                  <Wheel/>
                </div>
                <div className='absolute bottom-2 bg-white w-full justify-center flex gap-4 w-1/2 rounded-md p-4'>
                  <button className='px-6 py-2 rounded-md bg-black text-white font-bold'>Explore Tires</button>
                  <button className='px-6 py-2 rounded-md bg-black text-white font-bold'>Tires</button>
                  <Link href="/shop"><button className='px-6 py-2 rounded-md bg-black text-white font-bold flex gap-2 items-center'>Shop <ShoppingCart/></button></Link>
                </div>
              </div>
          </div>
    </div>
  )
}

export default HeroSection