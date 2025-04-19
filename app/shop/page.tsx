// This is the main entry point for the shop page in a Next.js application.
// It imports the Content component from the shop directory and renders it.


import Content from '@/components/shop/Content'
import ShopHero from '@/components/shop/hero'
import ShopNav from '@/components/shop/shopNav'
import React from 'react'

const ShopPage = () => {
  return (
   <>
        <ShopNav/>
        <ShopHero/>
        <div className='md:max-w-270 lg:max-w-320 w-full m-auto'>
          <Content/>
        </div>
        
   </>
  )
}

export default ShopPage