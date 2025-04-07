import React from 'react'
import Navbar from '@/components/homepage/Navbar'
import HeroSection from '@/components/homepage/hero'
import ProductsSlider from '@/components/homepage/slider'
import Samples from '@/components/homepage/samples'
import Testimonials from '@/components/homepage/testimonials'
import About from '@/components/homepage/about'
import FooterLV from '@/components/homepage/footer'
import ServiceSpan from '@/components/homepage/service'
const page = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ProductsSlider/>
      <ServiceSpan/>
      <Samples/>
      <About/>
      <Testimonials/>
      <FooterLV/>
    </>
  )
}

export default page