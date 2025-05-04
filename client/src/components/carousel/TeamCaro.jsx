import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./caroCard.css";
import ima1 from "./../../assets/caro/ima1.png";

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
      spaceBetween={50}
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
        depth: 0,
        modifier: 2.6,
        slideShadows: true,
      }}
      // pagination={true}

      className="mySwiper"
    >
      <SwiperSlide>
        <a href="#" className="group relative block bg-black rounded-4xl">
          <img
            alt=""
            src={ima1}
            className="absolute inset-0 h-full rounded-4xl object-cover transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Graphic and UI designer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Sheikh Mhafuz
              </p>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="group relative block bg-black rounded-4xl">
          <img
            alt=""
            src={ima1}
            className="absolute inset-0 h-full rounded-4xl object-cover transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Graphic and UI designer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Sheikh Mhafuz
              </p>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="group relative block bg-black rounded-4xl">
          <img
            alt=""
            src={ima1}
            className="absolute inset-0 h-full rounded-4xl object-cover transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Graphic and UI designer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Sheikh Mhafuz
              </p>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="group relative block bg-black rounded-4xl">
          <img
            alt=""
            src={ima1}
            className="absolute inset-0 h-full rounded-4xl object-cover transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Graphic and UI designer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Sheikh Mhafuz
              </p>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="group relative block bg-black rounded-4xl">
          <img
            alt=""
            src={ima1}
            className="absolute inset-0 h-full rounded-4xl object-cover transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Graphic and UI designer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Sheikh Mhafuz
              </p>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="group relative block bg-black rounded-4xl">
          <img
            alt=""
            src={ima1}
            className="absolute inset-0 h-full rounded-4xl object-cover transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Graphic and UI designer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Sheikh Mhafuz
              </p>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="group relative block bg-black rounded-4xl">
          <img
            alt=""
            src={ima1}
            className="absolute inset-0 h-full rounded-4xl object-cover transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Graphic and UI designer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Sheikh Mhafuz
              </p>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="group relative block bg-black rounded-4xl">
          <img
            alt=""
            src={ima1}
            className="absolute inset-0 h-full rounded-4xl object-cover transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                Graphic and UI designer
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Sheikh Mhafuz
              </p>
            </div>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default TeamCaro;
