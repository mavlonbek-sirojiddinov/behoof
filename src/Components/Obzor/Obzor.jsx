import React from 'react'
import { Link } from 'react-router-dom'
import "./obzor.scss"
import img1 from "../../img/imgObzor/Img1.jpg"
import img2 from "../../img/imgObzor/img2.jpg"
import img3 from "../../img/imgObzor/img3.jpg"
import img4 from "../../img/imgObzor/img4.jpg"
import respImg1 from "../../img/imgObzor/respImg1.jpg"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./obzor.css";

// import required modules
import { Pagination } from "swiper";

function Obzor() {
    return (
        <div className='Obzor container'>
            <div className='new-wrapper'>
                <h4 className='new-title'>Обзоры</h4>
                <Link className='new-link'>К обзорам</Link>
            </div>
            <div className='obzor-wrapper'>
                <ul className='obzor-list'>
                    <li className='obzor-item'>
                        <img className='obzor-img' src={img1} alt="" />
                        <h3 className='obzor-item-title'>Обзор устаревших <br /> смартфонов</h3>
                        <p className='obzor-item-text'>
                            Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc.
                        </p>
                        <Link className='obzor-link'>Смотреть</Link>
                    </li>
                    <li className='obzor-item'>
                        <img className='obzor-img' src={img2} alt="" />
                        <h3 className='obzor-item-title'>Обзор устаревших <br /> смартфонов</h3>
                        <p className='obzor-item-text'>
                            Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc.
                        </p>
                        <Link className='obzor-link'>Смотреть</Link>
                    </li>
                    <li className='obzor-item'>
                        <img className='obzor-img' src={img3} alt="" />
                        <h3 className='obzor-item-title'>Обзор устаревших <br /> смартфонов</h3>
                        <p className='obzor-item-text'>
                            Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc.
                        </p>
                        <Link className='obzor-link'>Смотреть</Link>
                    </li>
                    <li className='obzor-item'>
                        <img className='obzor-img' src={img4} alt="" />
                        <h3 className='obzor-item-title'>Обзор устаревших <br /> смартфонов</h3>
                        <p className='obzor-item-text'>
                            Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc.
                        </p>
                        <Link className='obzor-link'>Смотреть</Link>
                    </li>
                </ul>
            </div>
            <div className='obzor-slider'>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='obzor-item'>
                            <img className='obzor-img' src={respImg1} alt="" />
                            <h3 className='obzor-item-title'>Обзор устаревших <br /> смартфонов</h3>
                            <p className='obzor-item-text'>
                                Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc.
                            </p>
                            <Link className='obzor-link'>Смотреть</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='obzor-item'>
                            <img className='obzor-img' src={respImg1} alt="" />
                            <h3 className='obzor-item-title'>Обзор устаревших <br /> смартфонов</h3>
                            <p className='obzor-item-text'>
                                Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc.
                            </p>
                            <Link className='obzor-link'>Смотреть</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='obzor-item'>
                            <img className='obzor-img' src={respImg1} alt="" />
                            <h3 className='obzor-item-title'>Обзор устаревших <br /> смартфонов</h3>
                            <p className='obzor-item-text'>
                                Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc.
                            </p>
                            <Link className='obzor-link'>Смотреть</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='obzor-item'>
                            <img className='obzor-img' src={respImg1} alt="" />
                            <h3 className='obzor-item-title'>Обзор устаревших <br /> смартфонов</h3>
                            <p className='obzor-item-text'>
                                Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc.
                            </p>
                            <Link className='obzor-link'>Смотреть</Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Obzor