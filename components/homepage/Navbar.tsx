"use client"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='absolute w-full'>
        <div className={cn("flex flex-col lg:flex-row backdrop-blur-md font-bold justify-between py-2 lg:py-4 bg-transparent px-2 md:px-6 text-white absolute top-0 w-full border-b-3 border-gray-500/30 z-10 overflow-hidden", isOpen ? "bg-black" : "")}>
          <div className="w-full justify-between flex text-white">
              <h1 className='text-xl md:text-2xl'>Asaba Auto Trading</h1>
              <div className='hidden lg:flex'>
              <AnimatePresence>
                <motion.ul 
                 className="flex w-full overflow-hidden mt-3 lg:flex-row lg:w-fit gap-4 text-white">
                  <li><Link href={"/"}>Home</Link></li>
                  <li><Link href={"/shop"}>Shop</Link></li>
                  <li>About</li>
                  <li>Contact</li>
                  <li><Link href={"/auth/login"}>Login</Link></li>
                  <li><Link href={"/auth/signup"}>SignUp</Link></li>
                </motion.ul>
              </AnimatePresence>
          </div>
              <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                 {
                   isOpen ? <X/> : <Menu/>
                 }
              </div>

          </div>
          <div className='lg:hidden'>
              <AnimatePresence>
                <motion.ul 
                initial={{
                  opacity: 0,
                  height: 0
                }}
                animate={{
                  opacity: 1,
                  height: isOpen ? 350 : 0
                }}
                exit={{
                  opacity: 0,
                  height: 0
                }}
                layout
                 className="flex px-2 w-full overflow-hidden mt-3 text-left flex-col lg:flex-row lg:w-fit gap-4 text-white">
                  <li className='mt-3 '><Link href={"/"}>Home</Link></li>
                  <li className='mt-3 '><Link href={"/shop"}>Shop</Link></li>
                  <li className='mt-3 '>About</li>
                  <li className='mt-3 '>Contact</li>
                  <li className='mt-3 '><Link href={"/auth/login"}>Login</Link></li>
                  <li className='mt-3 '><Link href={"/auth/signup"}>SignUp</Link></li>
                </motion.ul>
              </AnimatePresence>
          </div>
        </div>
    </div>
  )
}

export default Navbar