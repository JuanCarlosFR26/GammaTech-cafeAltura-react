import React from 'react'
import Banner from '../components/Banner'
import CardsContainer from '../components/CardsContainer'
import CoffeCards from '../components/CoffeCards'
import Faqs from '../components/Faqs'
import SectionCoffe from '../components/SectionCoffe'
import SectionForm from '../components/SectionForm'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <CardsContainer />
      <CoffeCards />
      <Faqs />
      <SectionCoffe />
      <SectionForm />
      <Footer />
    </div>
  )
}

export default Home