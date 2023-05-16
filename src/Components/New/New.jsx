import React from 'react'
import { Link } from 'react-router-dom'
import "./new.scss"
import qolSoat from "../../img/imgNew/qolSoat.png"
import naushnik from "../../img/imgNew/naushnik.png"
import PS from "../../img/imgNew/PS.png"
import Iphone from "../../img/imgNew/Iphone.png"
import Ipad from "../../img/imgNew/Ipad.png"
import acsesuar from "../../img/imgNew/acsesuar.png"
import laptop from "../../img/imgNew/laptop.png"
import kalonka from "../../img/imgNew/kalonka.png"

function New() {
    return (
        <div className='new container'>
            <div className='new-wrapper'>
                <h4 className='new-title'>Новинки</h4>
                <Link className='new-link'>К новинкам</Link>
            </div>
            <div>
                <ul className='new-list'>
                    <li className='new-item new-item2'>
                        <img src={qolSoat} alt="" />
                        <Link className='new-item-name'>Умные часы</Link>
                        <h3 className='new-item-fullName'>Apple iPhone 13 Pro <br /> Max 256 ГБ серый</h3>
                        <Link className='new-sena'>Цена</Link>
                        <h3 className='new-item-rubl'>114 099 ₽</h3>
                    </li>
                    <li className='new-item new-item2'>
                        <img src={naushnik} alt="" />
                        <Link className='new-item-name'>Наушники</Link>
                        <h3 className='new-item-fullName'>Apple iPhone 13 Pro <br /> Max 256 ГБ серый</h3>
                        <Link className='new-sena'>Цена</Link>
                        <h3 className='new-item-rubl'>114 099 ₽</h3>
                    </li>
                    <li className='new-item new-item2'>
                        <img src={PS} alt="" />
                        <Link className='new-item-name'>Игровые приставки</Link>
                        <h3 className='new-item-fullName'>Apple iPhone 13 Pro <br /> Max 256 ГБ серый</h3>
                        <Link className='new-sena'>Цена</Link>
                        <h3 className='new-item-rubl'>114 099 ₽</h3>
                    </li>
                    <li className='new-item new-item2'>
                        <img src={Iphone} alt="" />
                        <Link className='new-item-name'>Смартфоны</Link>
                        <h3 className='new-item-fullName'>Apple iPhone 13 Pro <br /> Max 256 ГБ серый</h3>
                        <Link className='new-sena'>Цена</Link>
                        <h3 className='new-item-rubl'>114 099 ₽</h3>
                    </li>
                    <li className='new-item new-item2'>
                        <img src={Ipad} alt="" />
                        <Link className='new-item-name'>Планшеты</Link>
                        <h3 className='new-item-fullName'>Apple iPhone 13 Pro <br /> Max 256 ГБ серый</h3>
                        <Link className='new-sena'>Цена</Link>
                        <h3 className='new-item-rubl'>114 099 ₽</h3>
                    </li>
                    <li className='new-item'>
                        <img src={Iphone} alt="" />
                        <Link className='new-item-name'>Смартфоны</Link>
                        <h3 className='new-item-fullName'>Apple iPhone 13 Pro <br /> Max 256 ГБ серый</h3>
                        <Link className='new-sena'>Цена</Link>
                        <h3 className='new-item-rubl'>114 099 ₽</h3>
                    </li>
                    <li className='new-item'>
                        <img src={acsesuar} alt="" />
                        <Link className='new-item-name'>Аксесуары</Link>
                        <h3 className='new-item-fullName'>Apple iPhone 13 Pro <br /> Max 256 ГБ серый</h3>
                        <Link className='new-sena'>Цена</Link>
                        <h3 className='new-item-rubl'>114 099 ₽</h3>
                    </li>
                    <li className='new-item'>
                        <img src={laptop} alt="" />
                        <Link className='new-item-name'>Ноутбуки</Link>
                        <h3 className='new-item-fullName'>Apple iPhone 13 Pro <br /> Max 256 ГБ серый</h3>
                        <Link className='new-sena2'>Цена</Link>
                        <h3 className='new-item-rubl'>114 099 ₽</h3>
                    </li>
                    <li className='new-item'>
                        <img src={kalonka} alt="" />
                        <Link className='new-item-name'>Портативные колонки </Link>
                        <h3 className='new-item-fullName'>Apple iPhone 13 Pro <br /> Max 256 ГБ серый</h3>
                        <Link className='new-sena'>Цена</Link>
                        <h3 className='new-item-rubl'>114 099 ₽</h3>
                    </li>
                    <li className='new-item'>
                        <img src={Iphone} alt="" />
                        <Link className='new-item-name'>Смартфоны</Link>
                        <h3 className='new-item-fullName'>Apple iPhone 13 Pro <br /> Max 256 ГБ серый</h3>
                        <Link className='new-sena'>Цена</Link>
                        <h3 className='new-item-rubl'>114 099 ₽</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default New