import React from 'react'
import Image from 'next/image'

const Partners = () => {
  return (
    <div className='text-center w-full justify-center mt-20'>
        <p className='para'>Our Trusted Partners</p>
        <h1 className="heading">Powering The Future Of Mobility</h1>
        <p className="para">Driving Innovation: Discover the Synergy of Our Tire Solutions and Renowned Partner Brands</p>
        <div className="mt-4 p-2 flex gap-4 mx-auto w-full md:w-[50%] justify-center">
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
    </div>
  )
}

export default Partners