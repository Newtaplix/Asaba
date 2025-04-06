"use client" 
import React from 'react'
import SectionLabel from '../SectionLabel'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
// import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'


const ProductsSlider = () => {
    
    const Images = [
       "/Img2.jpg",
       "/Img3.jpg",
       "/Img5.jpg",
        "/Img10.jpg",
       "/Img6.jpg",
       "/Img7.jpg",
    ]


  return (
    <div className='mt-30 relative overflow-x-hidden flex flex-col items-center justify-center'>
        <SectionLabel text='Our latest'/>
        <div className="hidden md:flex rounded-md w-[100%] mx-auto gap-2.5 flex-wrap justify-center overflow-hidden mt-4">
              <AnimatePresence>
                {
                    Images.map((image, index) => 
                    (
                      <div key={index} className="relative rounded-md overflow-hidden hover:shadow-md bg-gray-700 transition-all">
                      {/* <motion.div className="absolute bg-gray-500 opacity-[.5] w-5 h-5 bottom-0"
                      whileHover={{ width: "100%", height: "100%", borderRadius: 0}}></motion.div> */}
                      <div className="hover:scale-110 transition-all">
                        <Image src={image} alt='slider' width={250} height={250}/>  
                      </div>
                      </div> 
                    )
                    ) 
                }
                </AnimatePresence>
        </div>
        <div className="flex md:hidden rounded-md w-[100%] mx-auto gap-2.5 flex-wrap justify-center overflow-hidden mt-4">
              <AnimatePresence>
                {
                    Images.map((image, index) => 
                    (
                      <div key={index} className="relative rounded-md hover:scale-110 hover:shadow-md h-fit bg-gray-700 transition-all">
                      {/* <motion.div className="absolute bg-gray-500 opacity-[.5] w-5 h-5 bottom-0"
                      whileHover={{ width: "100%", height: "100%", borderRadius: 0}}></motion.div> */}
                      <Image  src={image} alt='slider' width={100} height={150}/></div> 
                    )
                    ) 
                }
                </AnimatePresence>
        </div>
    </div>
  )
}

export default ProductsSlider