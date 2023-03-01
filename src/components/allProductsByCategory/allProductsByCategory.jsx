import React from 'react';
import './allProductsByCategory.css'
import { FiArrowRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from 'react-router-dom';
import UseFetchData from '../../hooks/useFetchData';
import "swiper/css";
import "swiper/css/pagination";


const AllProductsByCategory = () => {
    const categoryId = useParams()
    console.log(categoryId);
    const categoryAllData = UseFetchData(`/categories/${categoryId.id}/products`)

    function trimDescription(str) {
        return str.split(" ").slice(0, 7).join(" ") + "..."
      }
    
          return (
            <>
              <div className="categoryId">
                  <div className="categoryId-heading">
                      <h2 className="categoryId-title">Sponsored items customers also bought</h2>
                      <div className="categoryId-heading-btn">
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
                <ul className="categoryId-card">
                {
                  categoryAllData.map(Category => 
                    <div  className='categoryId__item' key={Category.id}> 
                      <li className='categoryId__name'>
                        <SwiperSlide>
                          <Link to={`/products/${Category.id}`}>
                              <img className='categoryId-swiper__img' src={Category.images[0]} alt="" />
                              <h2 className='categoryId-swiper__title'>{Category.title}</h2>
                              <p className='categoryId-swiper__desc'>{trimDescription(Category.description)}</p>
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

export default AllProductsByCategory;
