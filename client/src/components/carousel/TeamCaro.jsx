import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./caroCard.css";

import im1 from "./../../assets/caro/appdev.gif";
import im2 from "./../../assets/caro/aidev.gif";
import im3 from "./../../assets/caro/webdev.gif";
import im4 from "./../../assets/caro/secdev.gif";
import im5 from "./../../assets/caro/uidev.gif";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const TeamCaro = () => {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, Autoplay]}
      effect={"coverflow"}
        autoplay={{
          delay: 3000,
        }}
      grabCursor={true}
      centeredSlides={true}
      loop="true"
      slidesPerView="3"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 160,
        modifier: 2.6,
        slideShadows: true,
      }}
      // pagination={true}

      className="mySwiper"
    >
      <SwiperSlide>
        <div className="block h-96 rounded-lg bg-gray-600 p-2">
            <div className="h-48 rounded-[64px] border-t-10 border-purple-700 shadow-2xl shadow-black bg-amber-50"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TeamCaro;
