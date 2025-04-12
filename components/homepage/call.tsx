import React from 'react'

const CallToAction = () => {
  return (
    <div className='h-screen flex flex-col text-center justify-center'>
        <div>
            <p className='para2'>Optimizing Your Drive</p>
            <h1 className='heading'>The Pinnacle Of Tire Craftsmanship</h1>
            <p className='para'>Unlock the Full Potential of Your Ride With our Unparraled Tire Solutions, <br/>
                Expertly Crafted to Deliver Uncompromising Performance
            </p>
            <button className='px-8 py-3 rounded-md text-white mt-5 bg-black'>Explore Now</button>
        </div>
        <div className='mt-20 flex w-full md:w-[50%] gap-4 mx-auto'>
            <div className='bg-gray-300 rounded-md flex-1 h-20'/>
            <div className='bg-gray-300 rounded-md flex-1 h-20'/>
            <div className='bg-gray-300 rounded-md flex-1 h-20'/>
            <div className='bg-gray-300 rounded-md flex-1 h-20'/>

        </div>


    </div>
  )
}

export default CallToAction