"use client"
import React, { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import CartComponent from './Cart'
import CartStore from '@/store/Store'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const ShopNav = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [navOpen, setOpen] = useState(false)

    const { items } = CartStore()
  return (
    <div className='w-full z-10'>
        <div className="flex flex-col lg:flex-row font-bold justify-between py-4 bg-black md:px-6 text-white w-full z-10">
            <div className='w-full flex text-white px-2 md:px-0 justify-between'>
                <h1 className='text-xl md:text-2xl'>Asaba Auto Trading</h1>
               <div className='flex lg:hidden gap-3 items-center'>
                    <button onClick={() => setIsOpen(!isOpen)} className="flex lg:hidden gap-2 bg-white text-black cursor-pointer px-2 rounded-full py-1 w-fit"><ShoppingCart/>{items.length}</button>
                    <div onClick={() => setOpen(!navOpen)}>
                            {
                                navOpen ? <X/> : <Menu/>
                            }
                    </div>
                    
               </div>
            </div>
            <div className='relative'>
               <AnimatePresence>
                    <ul 
                    className="hidden lg:flex flex-col px-2 pt-5 bg-black overflow-hidden lg:flex-row gap-7 lg:gap-4 text-white">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/shop"}>Shop</Link></li>
                        <li>About</li>
                        <li>Contact</li>
                        <li><Link href={"/auth/login"}>Login</Link></li>
                        <li><Link href={"/auth/signup"}>SignUp</Link></li>
                        <button onClick={() => setIsOpen(!isOpen)} className="flex hidden lg:flex gap-2 bg-white text-black cursor-pointer px-2 rounded-full py-1 w-fit"><ShoppingCart/>{items.length}</button>
                    </ul>

                    {/*** Android Version */}
                    <motion.ul 
                    initial={{
                        height: 0,
                        opacity: 0
                    }}
                    animate={{
                        height: navOpen ? 380 : 0,
                        opacity: 1
                    }}
                    exit={{
                        height: 0,
                        opacity: 0
                    }}
                    className="flex flex-col w-full z-20 px-2 pt-5 absolute bg-black overflow-hidden lg:flex-row gap-7 lg:gap-4 lg:hidden text-white">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/shop"}>Shop</Link></li>
                        <li>About</li>
                        <li>Contact</li>
                        <li><Link href={"/auth/login"}>Login</Link></li>
                        <li><Link href={"/auth/signup"}>SignUp</Link></li>
                        <button onClick={() => setIsOpen(!isOpen)} className="flex hidden lg:flex gap-2 bg-white text-black cursor-pointer px-2 rounded-full py-1 w-fit"><ShoppingCart/>{items.length}</button>
                    </motion.ul>
               </AnimatePresence>
            </div>
        </div>
        <div className='bg-red-500 py-2 text-center text-white text-sm'>
            <p>Your One-Stop Shop for Everything Trendy</p>
        </div>
        <div className='relative'>
            <CartComponent open={isOpen} />
        </div>
    </div>
  )
}

export default ShopNav