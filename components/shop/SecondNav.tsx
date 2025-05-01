import React from 'react'

const SecondNav = () => {
  return (
    <div className='w-full p-3 bg-white flex hidden justify-between'>
        <div>
          <h1>Number of products [100]</h1>
        </div>
        <div className='flex gap-4'>
           <select name="quantity" id="" className='border p-2 rounded-md border-gray-500'>
              <option value="0">Number of displayed goods</option>
           </select>
           <select name="sort" id="" className='border p-2 rounded-md border-gray-500'>
              <option value={0}>Sort by</option>
           </select>
        </div>
    </div>
  )
}

export default SecondNav