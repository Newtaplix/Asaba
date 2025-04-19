
import React from 'react'


const ShopHero = () => {
  return (
    <div className="h-screen relative flex flex-col items-center w-full bg-[url('/home/pine.jpg')] bg-cover bg-center justify-center">
        <div className="absolute w-full h-full bg-black/30"/>
       <div className='absolute inset-0 bg-transparent flex flex-col items-center justify-center'>
        <div className="text-center">
                <h1 className="heading text-white">Style Starts Here</h1>
                <p className="text-2xl text-white ">Discover the freshest picks, hottest deals, and timeless classics all in one place</p>
            </div>
            
            <div className='w-120 shadow-md mt-5 h-fit bg-white/50 text-white font-bold flex'>
                <div className='text-black w-full px-4'>
                    <div>
                        <p className="text-gray-600 text-sm mb-2">Personalise your shopping experience</p>
                        <h2 className='text-center'>Fill in your vehicle info</h2>
                        <div className="flex gap-4 justify-center p-3">
                            <select name="year" id="" className="px-2 py-2 rounded-md border border-gray-500 text-gray-500 bg-white flex-1">
                                <option value="2016">2016</option>
                            </select>
                            <select name='model' className="px-2 py-2 rounded-md border border-gray-500 text-gray-500 bg-white flex-1"></select>
                            <select name='wheel' className="px-2 py-2 rounded-md border border-gray-500 text-gray-500 bg-white flex-1"></select>
                        </div>
                    <div className='justify-center flex w-full pb-3'>
                            <button className='border-0 bg-black rounded-md text-white px-2 py-1'>Done</button>
                    </div>
                    </div>
                </div>
            </div>
        
        </div>


    </div>
   
  )
}

export default ShopHero