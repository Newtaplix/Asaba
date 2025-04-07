'use client'
import React, { useEffect, useRef } from 'react'
import { animate, motion, useMotionValue, useTransform} from 'framer-motion'
import { useInView } from 'framer-motion'
import SectionLabel from '../SectionLabel'

const ServiceSpan = () => {
    const count = useMotionValue(0)
    const ProvinceCount = useMotionValue(0)
    const TownsCount = useMotionValue(0)
    const ref = useRef(null)
    const isInView = useInView(ref, {once : false})

    const rounded = useTransform(() => Math.round(count.get()))
    const Province = useTransform(() => Math.round(ProvinceCount.get()))
    const Towns = useTransform(() => Math.round(TownsCount.get()))
    
    useEffect(() => {
       if(isInView){
        const controls = animate(count, 900, { duration: 5})
        const control1 = animate(ProvinceCount, 9, { duration: 5})
        const control2 = animate(TownsCount, 500, { duration: 5})
        return (
            () => (controls.stop(),
                    control1.stop(),
                    control2.stop()
            )
        )
       }
    }, [isInView])
  return (
    <div className='mt-30'>
        <SectionLabel text='Availability'/>
        <motion.div className='px-5 mt-3 w-full bg-gray-300/10 text-center'>
            <div className='text-center'>
                <p className='text-gray-500'>Over the years we have made our services renouned by and in over in SA!</p>
            </div>
            <div className='flex gap-2 mt-4 flex-wrap justify-center text-center'>
                <div className='flex-1'>
                    <motion.h1 ref={ref} className='name text-3xl font-bold'>{rounded}</motion.h1>
                    <span>Customers</span>
                </div>
                <div className='flex-1'>
                    <motion.h1 ref={ref} className='name text-3xl font-bold'>{Towns}</motion.h1>
                    <span>Towns</span>
                </div>
                <div className='flex-1'>
                    <motion.h1 ref={ref} className='name text-3xl font-bold'>{Province}</motion.h1>
                    <span>Provinces</span>
                </div>

            </div>
        </motion.div>
    </div>
  )
}

export default ServiceSpan