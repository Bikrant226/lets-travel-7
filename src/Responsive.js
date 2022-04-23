import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css'




export default class Responsive extends Component {
  render() {

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };  
    return (
      <div>
        <h2> Trending trips </h2>
        <Slider {...settings} className="slider">
          <div>
            <img id="img" src="/assets/1.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>

          </div>
          <div>
            <img id="img" src="/assets/2.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/3.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/4.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/5.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/6.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/7.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/8.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/9.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/10.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/11.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/12.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/13.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/14.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>
          <div>
            <img id="img" src="/assets/15.jpg" alt="destinations" />
            <p>Meghalaya bagpacking</p>
            <span>starts at ₹ 15999</span>
          </div>

        </Slider>
      </div>
    );
  }
}

