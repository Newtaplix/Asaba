import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { ShoppingCart, X } from 'lucide-react'

interface Items{
    id: number,
    name: string,
    price: string,
    image: string,
    info: string

}
type Props = {
    item: Items | null;
}

const InfoAnimate: Variants ={
    initial:{
        opacity: 0, x:100
    },
    animate:{
        opacity:1, x:0
    }
}

const Info: React.FC<Props> = ({ item,  }) => {
    if(!item) return null;
  return (
   <AnimatePresence>
         <motion.div
         variants={InfoAnimate}
         initial="initial"
         animate="animate"
         exit="initial"
         transition={{
            duration: 1
         }} 
         className='absolute top-[20%] bg-white w-[30%] right-0 border rounded-md shadow-lg p-2 border-gray-300 h-fit fixed'>
            <div className='relative flex' style={{ justifyContent: 'flex-end'}}>
                <X className='cursor-pointer'/>
            </div>
            <div className='flex items-center gap-2 justify-left flex-1'>
                <div className='rounded-md overflow-hidden'>
                    <Image width={200} height={200} src={`/home/${item.image}`} alt='Options'/>
                </div>
                <div className="text-left flex-1">
                    <h2 className='font-bold text-gray-600 text-xl'>{item.name}</h2>
                    <p className='font-bold text-white bg-black px-2 rounded-full py-1 w-fit'>{item.price}</p>
                    <div className='flex items-center gap-2'>
                        <input className='border-3 border-gray-300 rounded-md mt-2 px-2 py-1' placeholder='Quantity'/>
                    </div>
                </div>
            </div>
            <div className='italic text-gray-500 mt-3 p-2'>
                <p><span>Sizes: </span>xl, 2xl, 3xl, 4xl </p>
                <p><span>About: </span>{item.info}</p>
            </div>
            <div className='mt-3 px-2'>
                <button className='bg-black text-white flex px-2 py-2 rounded-md w-full cursor-pointer items-center justify-center gap-2'>Add to Cart <ShoppingCart/></button>
            </div>
        </motion.div>
   </AnimatePresence>
  )
}

export default Info