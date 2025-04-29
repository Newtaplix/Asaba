
import React from 'react'


const Navbar = () => {
  return (
    <div className='absolute w-full'>
        <div className="flex font-bold justify-between py-4 bg-black px-6 text-white absolute top-0 w-full z-10">
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
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar