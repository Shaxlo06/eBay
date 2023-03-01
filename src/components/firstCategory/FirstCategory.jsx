import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowRight } from 'react-icons/fi'
import './FirstCategory.css'
import "swiper/css";
import "swiper/css/pagination";
import UseFetchData from '../../hooks/useFetchData';
import { Link } from 'react-router-dom';


export default function FirstCategory() {
  const categories = UseFetchData("/categories/")

    return (
      <>
        <div className="category-swiper">
        <div className="products-heading">
                <h2 className="category-title">All categories</h2>
                <div className="products-heading-btn">
                    <button>Slide to the side <FiArrowRight/></button>
                </div>
            </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          
          className="mySwiper"
        >
          <ul className="category-card">
          {
            categories.map(category => 
              <div  className='category-swiper__item' key={category.id}> 
                <li className='category-swiper__name'>
                  <SwiperSlide>
                    <Link to={`/category/${category.id}`}>
                      <img className='category-swiper__img' src={category.image} alt="" />
                      <h2 className='category-swiper__title'>{category.name}</h2>
                    </Link>
                  </SwiperSlide>
                </li> 
              </div>  
                )
          }
          </ul>
        </Swiper>
        </div>
      </>
    );
  }
