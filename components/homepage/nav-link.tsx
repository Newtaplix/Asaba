'use client'
import React from 'react'


// interface link {
//     text: string

const NavLink = () => {
    // const [active, setIsActive] = useState(false)
    const links = [
      {
        title : "Home"
      },
      {
        title : "Home"
      },
      {
        title : "Home"
      },
      {
        title : "Home"
      }
    ]

  return (
    <>
      {
        links.map((link, index) => <div key={index} className='relative flex'>
            {link.title}
            <div className='absolute primary h-1 w-full bottom-0 rounded-2xl'/>
        </div>)
      }
    </>
  )
}

export default NavLink