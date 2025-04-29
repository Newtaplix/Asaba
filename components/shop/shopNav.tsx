"use client"
import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import CartComponent from './Cart'
import CartStore from '@/store/Store'

const ShopNav = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    const { items } = CartStore()
  return (
    <div className='w-full z-10'>
        <div className="flex font-bold justify-between py-4 bg-black px-6 text-white w-full z-10">
            <div>
                <h1 className='text-xl md:text-2xl'>Asaba Auto Trading</h1>
            </div>
            <div>
                <ul className="flex gap-4 text-white">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>SignUp</li>
                    <button onClick={() => setIsOpen(!isOpen)} className="flex gap-2 bg-white text-black cursor-pointer px-2 rounded-full py-1"><ShoppingCart/>{items.length}</button>
                </ul>
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