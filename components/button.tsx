import React from 'react'

interface button {
  text: string,
}
const MainButton = (props:button) => {
  return (
    <button className='primary rounded-full text-white px-2 py-1 hover:bg-white hover:text-black '>{props.text}</button>
  )
}

export default MainButton