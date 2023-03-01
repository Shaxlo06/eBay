import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SliderPlp.css";

import img1 from '../../images/sliderPlp-img.png'
import img2 from '../../images/sliderPlp-img2.png'


export default function SliderPlp() {
  return (
    <>
    <h2 className="sliderPlp__title">Featured Event</h2>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper swiperPlp"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
