import Slider from "react-slick";
import sliderImg_1 from "../assets/slider-1.jpg"
import sliderImg_2 from "../assets/slider-2.jpg"
import sliderImg_3 from "../assets/slider-3.jpg"
import sliderImg_4 from "../assets/slider-4.jpg"
import sliderImg_5 from "../assets/slider-5.jpg"
import sliderImg_6 from "../assets/slider-6.jpg"
import sliderImg_7 from "../assets/slider-7.jpg"
import sliderImg_8 from "../assets/slider-8.jpg"
import sliderImg_9 from "../assets/slider-9.jpg"
import sliderImg_10 from "../assets/slider-10.jpg"
import sliderImg_11 from "../assets/slider-11.jpg"
import sliderImg_12 from "../assets/slider-12.jpg"

export default function HomeSlider(){
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };
      return (
        <div className="w-screen relativ">
          <Slider {...settings}>
            <div>
              <img src={sliderImg_1} className="w-full" alt="Slider Image 1"/>
            </div>
            <div>
            <img src={sliderImg_5} className="w-full" alt="Slider Image 2"/>
            </div>
            <div>
            <img src={sliderImg_9} className="w-full" alt="Slider Image 3"/>
            </div>
            <div>
            <img src={sliderImg_2} className="w-full" alt="Slider Image 4"/>
            </div>
            <div>
            <img src={sliderImg_4} className="w-full" alt="Slider Image 5"/>
            </div>
            <div>
            <img src={sliderImg_7} className="w-full" alt="Slider Image 6"/>
            </div>
            <div>
            <img src={sliderImg_3} className="w-full" alt="Slider Image 7"/>
            </div>
            <div>
            <img src={sliderImg_11} className="w-full" alt="Slider Image 8"/>
            </div>
            <div>
            <img src={sliderImg_12} className="w-full" alt="Slider Image 9"/>
            </div>
            <div>
            <img src={sliderImg_6} className="w-full" alt="Slider Image 10"/>
            </div>
            <div>
            <img src={sliderImg_10} className="w-full" alt="Slider Image 11"/>
            </div>
            <div>
            <img src={sliderImg_8} className="w-full" alt="Slider Image 12"/>
            </div>
          </Slider>
          <div className="absolute inset-0 flex justify-center items-center">
            <h2 className="font-bold text-white text-center">
              <span className="text-7xl">LOVE YOURSELF</span><br/>
              <span className="text-5xl">WITH STORE</span>
            </h2>
          </div>
        </div>
      );
}
