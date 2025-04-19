import React from 'react'

const ShopNav = () => {
  return (
    <div className='absolute w-full z-10'>
        <div className="flex font-bold justify-between py-4 bg-black px-6 text-white top-0 w-full z-10">
            <div>
                <h1 className='text-xl md:text-2xl'>Asaba Auto Trading</h1>
            </div>
            <div>
                <ul className="flex gap-4 text-white">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className='bg-red-500 py-2 text-center text-white text-sm'>
            <p>Your One-Stop Shop for Everything Trendy</p>
        </div>
    </div>
  )
}

export default ShopNav