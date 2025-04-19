import React from 'react'
import Image from 'next/image'



const Samples = () => {

  
  return (
    <div className="w-full py-3">
        <div className='w-full md:w-[60%] mx-auto text-left p-3'>
            <p className='para2'>Unlock the Power of Tires</p>
            <h1 className='heading'>Tire Technology Reimagined</h1>
            <p className='para'>Unlock the Secrets of Tire Performance. Explore our Cutting-Edge Innovations</p>
        </div>

        <div className="flex gap-5 flex-wrap">
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

    </div>
  )
}

export default Samples