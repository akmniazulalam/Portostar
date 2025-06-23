import React from 'react'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import Experience from '../layouts/Experience'
import Services from '../layouts/Services'
import About from '../layouts/About'
import Clients from '../layouts/Clients'
import Portfolio from '../layouts/Portfolio'
import Testimony from '../layouts/Testimony'
import Contact from '../layouts/Contact'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Experience/>
      <Services/>
      <About/>
      <Clients/>
      <Portfolio/>
      <Testimony/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home