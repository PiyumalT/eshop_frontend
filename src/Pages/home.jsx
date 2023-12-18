import React from 'react'
import Hero from '../Components/Hero/Hero'
import { HomeItems } from '../Components/HomeItems/HomeItems'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

export const home = () => {
  return (
    <div>
      <Hero />
      <HomeItems />
      <NewsLetter />
    </div>
  )
}
export default home