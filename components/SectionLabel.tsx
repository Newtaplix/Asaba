import React from 'react'
// import { motion } from 'framer-motion'
interface label{
  text: string
}
const SectionLabel = (props:label) => {
  return (
    <div className='section-Label mx-auto'>
      <div className="label-content font-bold">
        <span className="">{props.text}</span>
        </div>
    </div>
  )
}

export default SectionLabel