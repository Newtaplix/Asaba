import React from 'react'
import Navbar from '@/components/homepage/Navbar'
import HeroSection from '@/components/homepage/hero'
import ProductsSlider from '@/components/homepage/slider'
import Samples from '@/components/homepage/samples'
import FooterLV from '@/components/homepage/footer'
import ImageDiv from '@/components/homepage/Images'
import Preview from '@/components/homepage/preview'
import Partners from '@/components/homepage/Partners'
const page = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Samples/>
      <ProductsSlider/>
      <ImageDiv/>
      <Preview/>
      <Partners/>

      <FooterLV/>
    </>
  )
}

export default page