import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import CartStore from '@/store/Store'




const SaleItems = () => {

  const [isHovered, setIsHovered] = useState<number>()

  const handlehover = (i:number) => {
    setIsHovered(i)
  }

  const ContentList=[
    {
      name: "Mercelene Quad",
      material: "Polythene",
      sizes: ['12"','15"','20"'],
      image: '/pin.webp',
      price: 200,
      brand: "Rhino",
      year: "2016"
    },
    {
      name: "Quad",
      material: "Polythene",
      sizes: ['12"','15"','20"'],
      image: '/pin.webp',
      price: 200,
      brand: "Rhino",
      year: "2016"
    },
    {
      name: "Mercelene QuadX",
      material: "Polythene",
      sizes: ['12"','15"','20"'],
      image: '/pin.webp',
      price: 200,
      brand: "Rhino",
      year: "2016"
    },
    {
      name: "Port",
      material: "Polythene",
      sizes: ['12"','15"','20"'],
      image: '/pin.webp',
      price: 200,
      brand: "Rhino",
      year: "2016"
    },
    {
      name: "Rhino",
      material: "Polythene",
      sizes: ['12"','15"','20"'],
      image: '/pin.webp',
      price: 200,
      brand: "Rhino",
      year: "2016"
    },
    {
      name: "Mercelene",
      material: "Polythene",
      sizes: ['12"','15"','20"'],
      image: '/pin.webp',
      price: 200,
      brand: "Rhino",
      year: "2016"
    },
  ]

  const {addItem} = CartStore()




  return (
    <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 p-5 gap-6 relative'>
      {
        ContentList.map((item, i) => (
          <div onMouseEnter={() => handlehover(i)} onMouseLeave={() => handlehover(-1)} key={i}>
            <motion.div className='pt-5 border h-75 flex-1 flex relative flex-col justify-center items-center rounded-xl bg-gray-300 relative'>
                <Image fill src={item.image} alt='Options'/>
               <AnimatePresence>
                {
                  ( isHovered === i ) &&
                    <motion.div layout
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0}}
                    className='absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl'>
                        <button 
                        className='text-black flex gap-3 bg-white px-3 py-2 rounded-md font-bold shadow-md cursor-pointer hover:text-white hover:bg-black transition-all'
                        onClick={() => {
                          const stock = {
                            name: item.name,
                            material: item.material,
                            image: item.image,
                            price: item.price

                          }
                          addItem(stock)
                        }}><ShoppingCart/>Add to Cart</button>
                    </motion.div>
                  }
               </AnimatePresence>
            </motion.div>
            <div className='text-xl mt-1'>
              <h1 className=''>{item.name}</h1>
              <p className='text-gray-600'>{item.material}</p>
             <div className='flex gap-2'>
                {
                  item.sizes.map((size, i) => (
                    <p key={i} className='text-gray-600'>{size},</p>
                  ))
                }
             </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default SaleItems