import React from 'react'
import HeroPage from '../HeroPage'
import Products from '../Home/Products'
import ClientReviews from '../Home/ClientReviews'
import Banner from '../UI/Banner'
import MovingText from '../UI/MovingText'

function Home() {
  return (
    <div>

      <HeroPage/>
      <MovingText text1={'50% OFF SALE .'} text2={'50% OFF SALE .'}/>

      <Banner/>
      <Products/>
      <ClientReviews/> 
    </div>
  )
}

export default Home