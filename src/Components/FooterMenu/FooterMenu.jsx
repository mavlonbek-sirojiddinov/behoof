import React from 'react'
import "./FooterMenu.scss"
import { Link } from 'react-router-dom'

function FooterMenu() {
  return (
    <div className='container'>
        <div className='menu-wrapper'>
            <div className='menu-list'>
                <Link className='menu-link1 menu-link'>Главная</Link>
            </div>
            <div className='menu-list'>
                <Link className='menu-link2 menu-link'>Каталог</Link>
            </div>
            <div className='menu-list'>
                <Link className='menu-link3 menu-link'>Избранное</Link>
            </div>
            <div className='menu-list'>
                <Link className='menu-link4 menu-link'>Сравнения</Link>
            </div>
            <div className='menu-list'>
                <Link className='menu-link5 menu-link'>Профиль</Link>
            </div>
        </div>
    </div>
  )
}

export default FooterMenu