import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Google from '../../Components/Google/Google'
import New from '../../Components/New/New'
import Obzor from '../../Components/Obzor/Obzor'
import FooterMenu from '../../Components/FooterMenu/FooterMenu'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'


function home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Google/>
        <New/>
        <Obzor/>
        <Footer/>
        <FooterMenu/>
    </div>
  )
}

export default home