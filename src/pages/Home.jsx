import React from 'react'
import HeroImage from '../components/HeroImage'
import ExploreSriMandir from '../components/ExploreSriMandir'
import PujaSeva from '../components/PujaSeva'
import Panchang from '../components/Panchang'
import Rating from '../components/Rating'
import Features from '../components/Features'
import UpcommingFestivals from '../components/UpcommingFestivals'
import FooterImage from '../components/FooterImage'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <HeroImage/>
      <ExploreSriMandir/>
      <PujaSeva/>
      <Panchang/>
      <Rating/>
      <Features/>
      <UpcommingFestivals/>
      <FooterImage/>
      <Footer/>
    </div>
  )
}

export default Home
