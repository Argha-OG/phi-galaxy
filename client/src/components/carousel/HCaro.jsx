import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './caroCard.css';

import im1 from './../../assets/caro/appdev.gif'
import im2 from "./../../assets/caro/aidev.gif";
import im3 from "./../../assets/caro/webdev.gif";
import im4 from "./../../assets/caro/secdev.gif";
import im5 from "./../../assets/caro/uidev.gif";

// Import Swiper React components
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';

const HCaro = () => {
  return (
    <Swiper
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop="true"
      slidesPerView="3"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2.5,
        slideShadows: true,
      }}
      // pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="block rounded-lg bg-purple-700 p-2 shadow-indigo-100">
          <a href="">
            <img
              alt=""
              src={im3}
              className="cardImage h-56 w-full rounded-md object-cover"
            />

            <div className="my-3 ml-3">
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                React
              </span>
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                Node.js
              </span>
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                Express.js
              </span>
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                Mongo DB
              </span>
              <h1 className="text-2xl mt-3 text-white font-semibold">
                Web Development
              </h1>
            </div>
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block rounded-lg bg-purple-700 p-2 shadow-indigo-100">
          <a href="">
            <img
              alt=""
              src={im4}
              className="cardImage h-56 w-full rounded-md object-cover"
            />

            <div className="my-3 ml-3">
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                Burp Suite
              </span>
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                Nmap
              </span>
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                Nessus
              </span>
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                MetaSploit
              </span>
              <h1 className="text-2xl mt-3 text-white">WebApp Security</h1>
            </div>
          </a>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="block rounded-lg bg-purple-700 p-2 shadow-indigo-100">
          <a href="">
            <img
              alt=""
              src={im5}
              className="cardImage h-56 w-full rounded-md object-cover"
            />

            <div className="my-3 ml-3">
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                Java
              </span>
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                FireBase
              </span>
              <h1 className="text-2xl mt-3 text-white">
                UI/UX & Graphics Design
              </h1>
            </div>
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block rounded-lg bg-purple-700 p-2 shadow-indigo-100">
          <a href="">
            <img
              alt=""
              src={im1}
              className="cardImage h-56 w-full rounded-md object-cover"
            />

            <div className="my-3 ml-3">
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                Java
              </span>
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                FireBase
              </span>
              <h1 className="text-2xl mt-3 text-white font-semibold">
                App Development
              </h1>
            </div>
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block rounded-lg bg-purple-700 p-2 shadow-indigo-100">
          <a href="">
            <img
              alt=""
              src={im2}
              className="cardImage h-56 w-full rounded-md object-cover"
            />

            <div className="my-3 ml-3">
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                Python
              </span>
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                LLM
              </span>
              <span class="rounded-full mr-2  bg-white px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
                dJango
              </span>
              <h1 className="text-2xl mt-3 text-white font-semibold">
                Artificial Intelligence
              </h1>
            </div>
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HCaro
