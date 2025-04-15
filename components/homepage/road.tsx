import React from 'react'

const Road = () => {
  return (
    <div className='flex items-center h-screen justify-center w-full'>
        <div className='text-center flex items-center justify-center w-full h-[60%] bg-[url("/home/pine.jpg")] bg-cover bg-center'>
           <div>
                <p className='mb-8 text-xs md:text-xl text-black/80'>Elevate Your Commute</p>
                <h1 className='heading text-white'>Seamless Ride</h1>
                <p className='mb-5 text-xl md:text-2xl text-white'>Engineered for Comfort At Every Mile</p>
           </div>
        </div>
    </div>
  )
}

export default Road