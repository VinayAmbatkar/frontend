import React from 'react'
import Header from '../components/Header'
import TopMusseum from '../components/TopMusseum'
import Banner from '../components/Banner'
import SpecialityMenu from '../components/SpecialityMenu'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopMusseum />
      <Banner />
    </div>
  )
}

export default Home