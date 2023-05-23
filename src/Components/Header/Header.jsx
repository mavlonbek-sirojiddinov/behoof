import React from 'react'
import { Link } from 'react-router-dom'
import headerLogo from "../../img/logo.svg"
import "./Header.scss"
import heart from "../../img/imgHeader/heart.svg"
import chart from "../../img/imgHeader/chart.svg"
import profile from "../../img/imgHeader/frame.svg"

function Header() {
  return (
    <header>
        <div className='container'>
            <nav className='site-nav'>
                <Link className='nav-head-link'><img src={headerLogo} alt="" /><p>Лучшие цены <br /> в интернет-магазинах</p></Link>
                <div className='nav-box'>
                    <select id="">
                        <option value="">Каталог товаров</option>
                    </select>
                    <input type="text" placeholder='Поиск товаров'/>
                </div>
                <ul className='nav-list'>
                    <li className='nav-item'><img src={heart} alt="" /></li>
                    <li className='nav-item'><img src={chart} alt="" /></li>
                    <li className='nav-item'><img src={profile} alt="" /></li>
                </ul>
            </nav>
        </div>
        <span className='header-line'></span>
    </header>
  )
}

export default Header