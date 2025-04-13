'use client'
import React, {  useState } from 'react'
import Image from 'next/image'
import { ShoppingCart, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Info from './Info'

const POP: Variants ={
    initial: {
        scale: 0, opacity: 0
    },
    animate: {
        scale: 1, opacity: 1,
    }
}

interface Items{
    id: number,
    name: string,
    price: string,
    image: string,
    info: string

}

const Content = () => {
    const [isOpen, setisOpen] = useState<number>()
    const [choice, setChoice] = useState<Items>()


    const goods = [
        {
            id: 1,
            name: "Porche 255",
            price: "$230",
            image: "price1.jpg",
            info: "This is more preferable for the porche gt with its wide casing ensures smooth drive"
        },
        {
            id: 2,
            name: "Porche 257",
            price: "$230",
            image: "price1.jpg",
            info: "This is more preferable for the porche gt with its wide casing ensures smooth drive"
        },
        {
            id: 3,
            name: "Porche 289",
            price: "$230",
            image: "price1.jpg",
            info: "This is more preferable for the porche gt with its wide casing ensures smooth drive"
        },
        {
            id: 4,
            name: "Porche 200",
            price: "$230",
            image: "price1.jpg",
            info: "This is more preferable for the porche gt with its wide casing ensures smooth drive"
        },
        {
            id: 5,
            name: "Porche 255",
            price: "$230",
            image: "price1.jpg",
            info: "This is more preferable for the porche gt with its wide casing ensures smooth drive"
        },
        {
            id: 6,
            name: "Porche 555",
            price: "$230",
            image: "price1.jpg",
            info: "This is more preferable for the porche gt with its wide casing ensures smooth drive"
        },
        {
            id: 7,
            name: "Porche 255",
            price: "$230",
            image: "price1.jpg",
            info: "This is more preferable for the porche gt with its wide casing ensures smooth drive"
        },
        {
            id: 8,
            name: "Porche 255",
            price: "$230",
            image: "price1.jpg",
            info: "This is more preferable for the porche gt with its wide casing ensures smooth drive"
        },

    ]

    const select = (id:number) => {
        const item = goods.find((entry) => entry.id === id);
        setChoice(item)


    }
  return (
     <div className='relative'>
            <div className="text-left px-8 py-4 bg-gray-500/50 mb-20 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-black">Shop</h1>
                <div>
                    <h1 className='flex text-white font-bold px-3 py-1 rounded-full bg-black text-xl items-center gap-2'><ShoppingCart/> <div className='rounded-full bg-white text-black w-4 h-4 flex items-center justify-center text-xs'>1</div></h1>
                </div>
            </div>
           <div className='flex'>
                <div className="w-full px-8 grid grid-cols-4 gap-4 mt-3">
                  
                    {
                            goods.map((good, i) => (
                                <div key={i} className='pt-5 border relative flex-1 flex flex-col items-center h-100'>
                                    <div className='w-full mt-10 h-[50%] relative'>
                                        <Image fill src={`/home/${good.image}`} alt='Options'/>
                                    </div>
                                    <div className="p-3 text-center mt-4">
                                        <h2 className='font-bold text-gray-600 text-2xl'>{good.name}</h2>
                                        <p className='text-xl font-bold'>{good.price}</p>
                                        <p className='bg-black text-white px-2 py-1 rounded-full mt-3'>More info</p>
                                    </div>
                                    <AnimatePresence>
                                        {
                                            (isOpen !== i) &&   <motion.button 
                                            layoutId={`pop-${i}`} 
                                            variants={POP}
                                            initial="initial"
                                            animate="animate"
                                            exit="initial"
                                            transition={{
                                                duration: 1
                                            }}
                                            key={i}
                                            onClick={() => setisOpen(i)}  className='absolute top-0 right-0 px-2 bg-black text-white py-1 cursor-pointer'>Purchase</motion.button>
                                        }
                                        {
                                            (isOpen === i) &&   <motion.div
                                            layoutId={`pop-${i}`} 
                                            variants={POP}
                                            initial="initial"
                                            animate="animate"
                                            exit="initial"
                                            transition={{
                                                duration: 1
                                            }}
                                            key={i}
                                            className="absolute bg-white top-0 right-0 p-2 rounded-md shadow-md">
                                            <button onClick={() => select(good.id)} className='flex gap-2 bg-black text-white cursor-pointer rounded-md py-1 px-2 w-full'>Add to Cart <ShoppingCart/></button>
                                            <button className='flex gap-2 bg-black text-white rounded-md py-1 mt-2 px-2 w-full'>Shop Now <ShoppingBag/></button>
                                        </motion.div>
                                        }
                                    </AnimatePresence>
                                  

                                </div>
                            ))
                        }
                  
        
                </div>
           </div>
          {
            choice &&  <Info item={choice}/>
          }
        </div>
  )
}

export default Content