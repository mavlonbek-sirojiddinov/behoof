import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Google from '../../Components/Google/Google'
import New from '../../Components/New/New'
import Obzor from '../../Components/Obzor/Obzor'


function home() {
  return (
    <div>
        <Google/>
        <New/>
        <Obzor/>
        <Footer/>
    </div>
  )
}

export default home