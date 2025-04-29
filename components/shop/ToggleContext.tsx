"use client"
import React, { useState, createContext, useContext, ReactNode} from 'react'

interface togglecontext{
    isOpen: boolean,
    setisOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface contextProps{
    children: ReactNode
}

const ToggleContext = createContext<togglecontext | undefined>(undefined)
export const ToggleProvider = ({children}:contextProps) => {

    const [isOpen, setisOpen] = useState(false)
    console.log(isOpen)
  return (
    <ToggleContext.Provider value={{ isOpen, setisOpen}}>
        {children}
    </ToggleContext.Provider>

  )
}

export function useToggle(){
    const context = useContext(ToggleContext)

    if (!context){
        throw new Error("useToggle must be used inside the context provider")
    }
    return context
}
