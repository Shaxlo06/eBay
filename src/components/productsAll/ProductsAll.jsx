import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from "swiper/react";

import "./ProductsAll.css" 
import "swiper/css";
import "swiper/css/pagination";
import UseFetchData from '../../hooks/useFetchData';


export default function ProductsAll() {
  const productsAll = UseFetchData("/products")
  console.log(productsAll);

    return (
      <>
        <div className="productsAll">
            <div className="products-heading">
                <h2 className="productsAll-title">All products</h2>
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
          <ul className="productsAll-card">
          {
            productsAll.map(products => 
              <div  className='productsAll__item' key={products.id}> 
                <li className='productsAll__name'>
                  <SwiperSlide>
                    <Link to='/products'>
                        <img className='productsAll-swiper__img' src={products.images[0]} alt="" />
                        <h2 className='productsAll-swiper__title'>{products.title}</h2>
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
