"use client" 
import React from 'react'
import Image from 'next/image'


const ProductsSlider = () => {
    
  return (
    <div className='mt-30'>
        <div className="text-center justify-center">
            <p className="para">Discover the Benefits</p>
            <h1 className="heading">Tire Solutions</h1>
            <p className="para">Unleash the True Potential of Your Ride with Our Top-Tire Offerings</p>
        </div>
        <div className="w-full gap-4 flex mt-3">
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
    </div>
  )
}

export default ProductsSlider