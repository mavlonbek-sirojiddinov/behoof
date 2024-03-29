import React from 'react'
import logo from "../../img/logo.svg"
import footerLogo from "../../img/footer-icon.svg"
import { Link } from 'react-router-dom'
import './Footer.scss'


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-wrap container'>
            <div className=''>
                <Link><img src={logo} alt="" /></Link>
                <Link className='footer-wrap-link'>Мы в соц сетях</Link>
                <Link><img src={footerLogo} alt="" /></Link>
            </div>
            <div>
                <ul className='footer-list'>
                    <li className='footer-item'>
                        <Link className='footer-item-link footer-item-link1'>Пользователю</Link>
                        <Link className='footer-item-link'>Связаться с нами</Link>
                        <Link className='footer-item-link'>Поддерка пользователей</Link>
                        <Link className='footer-item-link'>FAQ & Руководства</Link>
                        <Link className='footer-item-link'>Политика конфиденциальности</Link>
                        <Link className='footer-item-link footer-item-link2'>Пользовательское соглашение</Link>
                    </li>
                    <li className='footer-item'>
                        <Link className='footer-item-link footer-item-link1'>Популярные категории</Link>
                        <Link className='footer-item-link'>Смартфоны</Link>
                        <Link className='footer-item-link'>Teteras electricas</Link>
                        <Link className='footer-item-link'>Стиральные машины</Link>
                        <Link className='footer-item-link'>Телевизоры</Link>
                        <Link className='footer-item-link footer-item-link2'>Ноутбуки</Link>
                    </li>
                    <li className='footer-item'>
                        <Link className='footer-item-link footer-item-link1'>Команда Behoof</Link>
                        <Link className='footer-item-link'>О нас</Link>
                        <Link className='footer-item-link footer-item-link2'>Работа у нас</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='container'><Link className='footer-last-link'>Copyright © 2023 Behoof, Inc. Все права защищены</Link></div>
    </div>
  )
}

export default Footer