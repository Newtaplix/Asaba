import React from 'react'

const Preview = () => {
  return (
    <div className='h-screen flex w-full items-center'>
        <div className='h-[60%] flex items-center bg-black/80 w-full bg-[url("/home/bgl.jpg")] bg-contain md:bg-cover bg-right'>
            <div className='p-3 w-full text-center md:text-left md:w-[30%]'>
                <p className='para text-white'>Luxury Meets Performance</p>
                <h1 className='heading text-white'>Elavated</h1>
                <p className='para text-white'>Redefine your Automotive Journey with Our Cutting-Edge Technology</p>
                <button className='px-4 py-3 rounded-full text-white bg-black/20 mt-4 shadow-sm shadow-white'>Learn More</button>
            </div>
        </div>        
    </div>
  )
}

export default Preview