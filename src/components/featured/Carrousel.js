import React, { Component } from "react";
import Slider from "react-slick";
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_one.jpg';
import slide_three from '../../resources/images/slide_three.jpg';
import slide_four from '../../resources/images/slide_four.jpg';
import slide_five from '../../resources/images/slide_five.jpg';
import slide_six from '../../resources/images/sun6.jpg';
import slide_seven from '../../resources/images/sun7.jpg';




export default class Carrousel extends Component {
  render() {
    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 500
    };
    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_two})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_three})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                     <div 
                           className="carrousel_image"
                          style={{
                             background:`url(${slide_four})`,
                              height:`${window.innerHeight}px`
                         }}
                    ></div>
                 </div>
                 <div>
                      <div 
                             className="carrousel_image"
                               style={{
                                   background:`url(${slide_five})`,
                               height:`${window.innerHeight}px`
                             }}
                       ></div>
                  </div>

                  <div>
                  <div 
                         className="carrousel_image"
                           style={{
                               background:`url(${slide_six})`,
                           height:`${window.innerHeight}px`
                         }}
                   ></div>
              </div>

              <div>
              <div 
                     className="carrousel_image"
                       style={{
                           background:`url(${slide_seven})`,
                       height:`${window.innerHeight}px`
                     }}
               ></div>
          </div>
        
            </Slider>
            
        </div>
    );
   
  }
}