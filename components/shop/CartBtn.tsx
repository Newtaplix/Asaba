"use client"
import React from 'react'
import { useToggle } from './ToggleContext'
import { ShoppingCart } from 'lucide-react'

const CartBtn = () => {
    const {setisOpen, isOpen} = useToggle()
  return (
    <button onClick={() => setisOpen(!isOpen)} className="flex gap-2 bg-white text-black cursor-pointer px-2 rounded-full py-1"><ShoppingCart/> 1</button>
  )
}

export default CartBtn