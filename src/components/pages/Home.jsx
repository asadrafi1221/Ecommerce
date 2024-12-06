import React from 'react'
import HeroPage from '../HeroPage'
import Products from '../Home/Products'
import ClientReviews from '../Home/ClientReviews'

function Home() {
  return (
    <div>
      <HeroPage/>
      <Products/>
      <ClientReviews/> 
    </div>
  )
}

export default Home