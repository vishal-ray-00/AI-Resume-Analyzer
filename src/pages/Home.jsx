import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Features from '../components/home/Features'
import HowItWorks from '../components/home/HowItWorks'

function Home() {
  return (
    <div>
      <HeroSection />
      <Features/> 
      <HowItWorks/>
    </div>
  )
}

export default Home