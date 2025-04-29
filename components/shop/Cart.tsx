import React, { useState } from 'react'
import { AnimatePresence, motion} from 'framer-motion'
import CartStore from '@/store/Store'
import Image from 'next/image'
import { Trash } from 'lucide-react'

interface OpenProp{
  open: boolean
}

 
const CartComponent = ({ open }:OpenProp) => {

  const { items, removeItem } = CartStore()

  const [isHovered, setIsHovered] = useState<number>()
  return (
    <>

      <AnimatePresence>
      {
          (open) && 
          <motion.div
          initial={{
            height: 0
          }}
          animate={{
            height: open ? 400 : 0
          }}
          exit={{
            height: 0
          }}
           className='bg-white overflow-hidden shadow-lg text-white right-0 top-0 p-2 h-100 z-10 absolute w-full'>
           <div className='w-full h-85 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-y-scroll'>
            {
                (items.length === 0) ?
                <div className='flex w-full h-full items-center justify-center text-center'>
                    <p className='text-gray-400'>Sorry! There are no items in your Cart...</p>
                </div> :
                items.map((good, i) => 
                  <div className='flex w-fit gap-2' onMouseEnter={() => setIsHovered(i)} onMouseLeave={() => setIsHovered(-1)} key={i}>
                              <motion.div className='pt-5 w-24 h-24 border flex relative justify-center items-center rounded-xl bg-gray-300 relative'>
                                  <Image fill src={good.image} alt='Options'/>
                                <AnimatePresence>
                                  {
                                    ( isHovered === i ) &&
                                      <motion.div layout
                                      initial={{ opacity: 0}}
                                      animate={{ opacity: 1}}
                                      exit={{ opacity: 0}}
                                      className='absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl'>
                                        <button
                                        onClick={() => removeItem(i)} 
                                        className='cursor-pointer text-white bg-red-500 font-bold rounded-md p-1'><Trash/></button>
                                      </motion.div>
                                    }
                                </AnimatePresence>
                              </motion.div>
                              <div className='text-xl mt-1'>
                                <h1 className='text-black'>{good.name}</h1>
                                <p className='text-gray-600'>${good.price}</p>
                                <p className='text-gray-600'>{good.material}</p>
                              
                              </div>
                            </div>)
              }
           
           </div>
           <div className='w-full p-2 absolute bottom-1 '>
                <div>

                  <button className='p-2 text-white bg-green-500 font-bold rounded-md'>Proceed with Purchase</button>
                </div>
           </div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  )
}

export default CartComponent