import React from 'react'
import "./Hero.scss"

function Hero() {
  return (
    <div className='container'>
        <div className='hero-box'>
            <div className='hero-wrapper1'>
                <h1 className='hero-title'><span>1.8 млн</span> товаров в <span>2272</span> магазинах найди, сравни, выберай!</h1>
                <button className='hero-btn'>Перейти к категориям</button>
            </div>
            <div className='hero-wrapper2'>
                <h2 className='hero-title2'><span>Топ-10</span> смартфонов 2023 года</h2>
                <button className='hero-btn'>Смотреть</button>
            </div>
        </div>
    </div>
  )
}

export default Hero