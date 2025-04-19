import React from 'react'
import Navbar from '@/components/homepage/Navbar'
import HeroSection from '@/components/homepage/hero'
import ProductsSlider from '@/components/homepage/slider'
import Samples from '@/components/homepage/samples'
import FooterLV from '@/components/homepage/footer'
import ImageDiv from '@/components/homepage/Images'
import Preview from '@/components/homepage/preview'
import Partners from '@/components/homepage/Partners'
import Road from '@/components/homepage/road'
import CallToAction from '@/components/homepage/call'
const page = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <div className='w-full md:max-w-260 px-2 lg:max-w-300 mx-auto overflow-hidden'>
        <Samples/>
        <ProductsSlider/>
        <ImageDiv/>
        <Preview/>
        <Partners/>
        <Road/>
        <CallToAction/>
      </div>
      <FooterLV/>
    </>
  )
}

export default page