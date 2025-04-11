import React from 'react'


const Navbar = () => {
  return (
    <div className="flex font-bold justify-between py-4 bg-black px-6 text-white">
      <div>
          <h1>Logo</h1>
      </div>
      <div>
          <ul className="flex gap-3 text-white">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar