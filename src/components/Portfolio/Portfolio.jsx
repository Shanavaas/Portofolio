import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
<<<<<<< HEAD
import Wimbledon from "../../img/wimbledon.png";
import Wimbledon2 from "../../img/wimbledon2.png";
import Weatherdetection from "../../img/weatherdetection.png";
=======
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
<<<<<<< HEAD
          <img src={Wimbledon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Weatherdetection} alt="" />
=======
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
<<<<<<< HEAD
          <img src={Wimbledon2} alt="" />
=======
          <img src={HOC} alt="" />
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
