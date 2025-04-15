import React from 'react'
import Image from 'next/image'

const ImageDiv = () => {
  return (
    <div className="w-full mt-40 flex gap-10">
        <div className="bg-gray-200/20 flex-1 h-150 relative">
          <Image fill src="/home/big1.jpg" alt="Car Sample"/>
        </div>
        <div className="bg-gray-200/20 flex-1 h-150 relative">
          <Image fill src="/home/big1.jpg" alt="Car Sample"/>
        </div>
    </div>
  )
}

export default ImageDiv