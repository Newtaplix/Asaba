'use client'
import React, { useState } from 'react'
import { ArrowUp , ArrowDown, X} from 'lucide-react'
import { cn } from '@/lib/utils'
import SaleItems from './SaleItems'
import { motion } from 'framer-motion'


const Filters = () => {
    const [openFilterset, setOpenFilterSet] = useState<string[]>([])
    const [selectedFilter, setSelectedFilter] = useState<string[]>([])
    console.log(selectedFilter)
    const Filters = [
        {
            title: "Model",
            options: [
                {
                    label: "Lamborgini",
                    value: "lamborgini"
                },
                {
                    label: "Tesla",
                    value: "Tesla"
                },
                {
                    label: "Rhino",
                    value: "Rhino"
                },
                {
                    label: "Ferari",
                    value: "Ferari"
                },
                {
                    label: "Benz",
                    value: "Benz"
                }
            ]
        },
        {
            title: "Year",
            options: [
                {
                    label: "2016",
                    value: "2016"
                },
                {
                    label: "2017",
                    value: "2017"
                },
                {
                    label: "2018",
                    value: "2018"
                },
                {
                    label: "2019",
                    value: "2019"
                },
                {
                    label: "2020",
                    value: "2020"
                }
            ]
        },
        {
            title: "Diameter",
            options: [
                {
                    label: "24",
                    value: "24"
                },
                {
                    label: "25",
                    value: "25"
                },
                {
                    label: "26",
                    value: "26"
                },
                {
                    label: "27",
                    value: "27"
                },
                {
                    label: "28",
                    value: "28"
                }
            ]
        },
        {
            title: "Prices",
            options: [
                {
                    label: "$200 - $300",
                    value: "300"
                },
                {
                    label: "$400 - $500",
                    value: "400"
                },
                {
                    label: "$600 - $750",
                    value: "600"
                },
                {
                    label: "$750 - $800",
                    value: "750"
                }
            ]
        }
    ]
    
  return (
    <div className='flex gap-4'>
        <div className='w-[25%]'>
            <div><p className='text-gray-500'>Filter</p></div>
            <div className='flex flex-wrap gap-2'>
                {
                    selectedFilter.map((item, index) => 
                    <p key={item} className='bg-gray-200 px-2 rounded-full gap-2 items-center flex w-fit'>{item}
                    <button onClick={() => {
                        const newArr = selectedFilter.filter((_, i) => i !== index)
                        setSelectedFilter(newArr)
                    }}><X className='size-4 rounded-full bg-gray-300 cursor-pointer'/></button>
                    </p>
                    )
                }
            </div>
            <div>
               {
                    Filters.map((filter) => (
                        <motion.div key={filter.title} className='border-b-1 mt-1 border-gray-300 px-2'>
                            <div onClick={() => {
                                if(openFilterset.includes(filter.title)){
                                    const newArr = openFilterset.filter(cont => cont !== filter.title)
                                    setOpenFilterSet(newArr)
                                    console.log(openFilterset)
                                }else{
                                    setOpenFilterSet([...openFilterset, filter.title])
                                }
                               
                                }} className='flex justify-between cursor-pointer'>
                                <p>{filter.title}</p>
                                {
                                    openFilterset.includes(filter.title) ? <ArrowUp size={16}/> : <ArrowDown size={16}/>
                                }
                            </div>
                            <motion.div className={cn("h-0 transition-all overflow-y-hidden", openFilterset.includes(filter.title) ? "h-fit" : null)}>

                                <input className='w-full px-2 py-1 rounded-md border-2 border-gray-300' placeholder='Search'/>
                            {
                                filter.options.map((opt) => (
                                    <label key={opt.value} htmlFor={opt.value}
                                        className='w-full justify-between flex text-[16px] items-center mt-1 pl-2'>
                                            <span>{opt.label}</span>
                                            <input 
                                            type="checkbox" className='bg-black size-4 rounded-md' name="model" value={opt.value} onChange={(e) => 
                                                {
                                                    if(e.target.checked){
                                                        setSelectedFilter(prev => [...prev, e.target.value])
                                                    }else{
                
                                                        const newArr =selectedFilter.filter(() => opt.value !== e.target.value )
                                                        setSelectedFilter(newArr)
                                                    }

                                                }
                                            } id={opt.value} />
                                    </label>
                                ))
                            }
                            </motion.div>
                        </motion.div>
                    ))
               }
            </div>
        </div>
        <SaleItems filters = { selectedFilter }/>
    </div>
  )
}

export default Filters