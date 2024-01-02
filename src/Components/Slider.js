import "./SliderStyle.css";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "../Assests/111.jpg"
import img2 from "../Assests/22.jpg"
import img3 from "../Assests/33.jpg"
import img4 from "../Assests/44.jpg"
import img5 from "../Assests/13.jpeg"
import img6 from "../Assests/12.jpg"

export default function Slider(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 600 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 2
        }
      };


    return(
        <Carousel responsive={responsive}>
                <div>
                <div className="gallery-list">
                        <div className="itemxx">

                            <div className="gradient"></div>
                            <img className="imgSlider" src={img1} alt="img"/>

                            <div className="items">
                                <i class="fa-solid fa-location-dot"></i>
                                <h4>Dakhla Beach</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                <div className="gallery-list">
                        <div className="itemxx">

                            <div className="gradient"></div>
                            <img className="imgSlider" src={img2} alt="img"/>

                            <div className="items">
                                <i class="fa-solid fa-location-dot"></i>
                                <h4>Taghazout</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                <div className="gallery-list">
                        <div className="itemxx">

                            <div className="gradient"></div>
                            <img className="imgSlider" src={img3} alt="img"/>

                            <div className="items">
                                <i class="fa-solid fa-location-dot"></i>
                                <h4>Sahara Desert</h4>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="gallery-list">
                        <div className="itemxx">

                            <div className="gradient"></div>
                            <img className="imgSlider" src={img4} alt="img"/>

                            <div className="items">
                                <i class="fa-solid fa-location-dot"></i>
                                <h4>Rabat, Mawazin</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="gallery-list">
                        <div className="itemxx">

                            <div className="gradient"></div>
                            <img className="imgSlider" src={img5} alt="img"/>

                            <div className="items">
                                <i class="fa-solid fa-location-dot"></i>
                                <h4>Marrakech</h4>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="gallery-list">
                        <div className="itemxx">

                            <div className="gradient"></div>
                            <img className="imgSlider" src={img6} alt="img"/>

                            <div className="items">
                                <i class="fa-solid fa-location-dot"></i>
                                <h4>Blue City</h4>
                            </div>
                        </div>
                    </div>
                </div>

        </Carousel>
    );
}