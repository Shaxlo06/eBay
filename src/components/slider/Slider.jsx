import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css'
import { FiArrowRight } from 'react-icons/fi'
import img1 from '../../images/sliderOneFirst.png'
import img2 from '../../images/sliderOneSecond.png'
import img3 from '../../images/sliderOneThird.png'
import img4 from '../../images/sliderTwoFirst.webp'
import img5 from '../../images/sliderTwoSecond.jpg'
import img6 from '../../images/sliderTwoThree.jpg'

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="slider">
          <Slider {...settings}>
            <div className="slider-one">
              <div className="slider-one-left">
                <h3>Super savings at the Brand Outlet</h3>
                <p>Up to 60% off the brands you love.</p>
                <button className="slider-one-btn">Shop now <FiArrowRight/></button>
              </div>
              <div className="slider-one-right">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="slider-two">
            <div className="slider-two-left">
                <h3>Gear up for winter sports!</h3>
                <p>From slopesto apres ski, we have got you covered.</p>
                <button className="slider-two-btn">Shop now <FiArrowRight/></button>
              </div>
              <div className="slider-two-right">
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      );
    }
  }