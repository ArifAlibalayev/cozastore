import React from 'react'
import Hero from '../../components/HeroSection'
import FilterSection from '../../components/FilterSection'
import Products from '../../components/Products'

function HomePage() {
  return (
    <>
    <Hero/>
    <FilterSection/>
    <Products/>
    </>
  )
}

export default HomePage