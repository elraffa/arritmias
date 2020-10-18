import React from 'react';
import PropTypes from 'prop-types'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import slide1 from '../images/banner-web-2020.jpg';
import slide2 from '../images/logo.png';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", position: 'absolute', right: 20, zIndex: 999}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", position: 'absolute', left: 20, zIndex: 999 }}
        onClick={onClick}
      />
    );
  }

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}

const MainSlider = () => 
    (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={slide1} alt='First slide' />
                </div>
                <div>
                    <img src={slide2} alt='Second slide' />
                </div>
                <div>
                    <img src={slide1} alt='First slide' />
                </div>
            </Slider>
        </div>
    )


export default MainSlider;

