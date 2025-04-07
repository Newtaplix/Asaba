import React from 'react'
import SectionLabel from '../SectionLabel'
import Image from 'next/image'


const Samples = () => {

  
  return (
    <div className='justify-center mt-20'>
        <SectionLabel text='Prices'/>
        <div className='mt-3 flex text-center gap-2 justify-center flex-col w-fit mx-auto md:flex-row'>
          <div className='border border-gray-500/10 shadow-lg w-fit bg-white rounded-lg p-3'>
              <div className="rounded-lg overflow-hidden hidden md:flex">
                <Image src={"/Img3.jpg"} width={250} height={320} alt='preview'/>
              </div>
              <div className="rounded-lg overflow-hidden md:hidden">
                <Image src={"/Img3.jpg"} width={350} height={380} alt='preview'/>
              </div>
              <div className='text-left'>
                <h1 className='text-2xl font-bold text-gray-800'>Mustang</h1>
                <p>203/55 R16</p>
                <p className="text-2xl font-bold text-green-600">$120.00</p>
                <ul className='text-sm text-gray-500 mt-3 list-disc list-inside'>
                    <li>Long-lasting tread</li>
                    <li>Fuel efficient</li>
                    <li>Excellent wet grip</li>
                </ul>
              </div>
              <div className="mt-2">
                  <button className="w-full primary rounded-md bg-blue-500 text-white py-2">Buy Now</button>
              </div>
          </div>
          <div className='border hidden md:block border-gray-500/10 shadow-lg w-fit bg-white rounded-lg p-3'>
              <div className="rounded-lg overflow-hidden hidden md:flex">
                <Image src={"/Img3.jpg"} width={250} height={320} alt='preview'/>
              </div>
              <div className="rounded-lg overflow-hidden md:hidden">
                <Image src={"/Img3.jpg"} width={350} height={380} alt='preview'/>
              </div>
              <div className='text-left'>
                <h1 className='text-2xl font-bold text-gray-800'>Mustang</h1>
                <p>203/55 R16</p>
                <p className="text-2xl font-bold text-green-600">$120.00</p>
                <ul className='text-sm text-gray-500 mt-3 list-disc list-inside'>
                    <li>Long-lasting tread</li>
                    <li>Fuel efficient</li>
                    <li>Excellent wet grip</li>
                </ul>
              </div>
              <div className="mt-2">
                  <button className="w-full primary rounded-md bg-blue-500 text-white py-2">Buy Now</button>
              </div>
          </div>
          <div className='border hidden md:block border-gray-500/10 shadow-lg w-fit bg-white rounded-lg p-3'>
              <div className="rounded-lg overflow-hidden hidden md:flex">
                <Image src={"/Img3.jpg"} width={250} height={320} alt='preview'/>
              </div>
              <div className="rounded-lg overflow-hidden md:hidden">
                <Image src={"/Img3.jpg"} width={350} height={380} alt='preview'/>
              </div>
              <div className='text-left'>
                <h1 className='text-2xl font-bold text-gray-800'>Mustang</h1>
                <p>203/55 R16</p>
                <p className="text-2xl font-bold text-green-600">$120.00</p>
                <ul className='text-sm text-gray-500 mt-3 list-disc list-inside'>
                    <li>Long-lasting tread</li>
                    <li>Fuel efficient</li>
                    <li>Excellent wet grip</li>
                </ul>
              </div>
              <div className="mt-2">
                  <button className="w-full primary rounded-md bg-blue-500 text-white py-2">Buy Now</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Samples