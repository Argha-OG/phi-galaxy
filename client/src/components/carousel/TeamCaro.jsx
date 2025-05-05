import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./caroCard.css";


import ima1 from "./../../assets/team/Mahfuz.jpg";
import ima2 from "./../../assets/team/himel.jpg";
import ima3 from "./../../assets/team/zihad.jpg";
import ima4 from "./../../assets/team/argha.jpeg";
import ima5 from "./../../assets/team/mojahid.png";
import ima6 from "./../../assets/team/ratul.png";
import ima7 from "./../../assets/team/ritu.jpeg";
import ima8 from "./../../assets/team/tanoy.jpg";
import ima9 from "./../../assets/team/rafi.jpg";
import ima10 from "./../../assets/team/pronway.png";

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
        modifier: 0,
        slideShadows: false,
      }}
      // pagination={true}

      className="mySwiper"
    >
      <SwiperSlide>
        <a href="#" className="">
          <div className="group relative block bg-white rounded-4xl align-middle">
            <img
              alt=""
              src={ima1}
              className="absolute h-full w-full rounded-4xl object-cover transition-opacity"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <p className=" font-medium tracking-widest text-pink-500 text-lg uppercase">
                  Graphic and UI designer
                </p>

                <p className="text-xl font-bold text-white text-shadow-black text-shadow-lg/30 sm:text-2xl">
                  Sheikh Mhafuz
                </p>
              </div>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="">
          <div className="group relative block bg-white rounded-4xl align-middle">
            <img
              alt=""
              src={ima2}
              className="absolute h-full w-full rounded-4xl object-cover transition-opacity"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <p className=" font-medium tracking-widest text-pink-500 text-lg uppercase">
                  AI Engineer
                </p>

                <p className="text-xl font-bold text-white text-shadow-black text-shadow-lg/30 sm:text-2xl">
                  Tasrif Nur Himel
                </p>
              </div>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="">
          <div className="group relative block bg-white rounded-4xl align-middle">
            <img
              alt=""
              src={ima3}
              className="absolute h-full w-full rounded-4xl object-cover transition-opacity"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <p className=" font-medium tracking-widest text-pink-500 text-lg uppercase">
                  MERN Web App Developer
                </p>

                <p className="text-xl font-bold text-white text-shadow-black text-shadow-lg/30 sm:text-2xl">
                  MD Kowsar Ahmad Zihad
                </p>
              </div>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="">
          <div className="group relative block bg-white rounded-4xl align-middle">
            <img
              alt=""
              src={ima4}
              className="absolute h-full w-full rounded-4xl object-cover transition-opacity"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <p className=" font-medium tracking-widest text-pink-500 text-lg uppercase">
                  Web App Security Expert
                </p>

                <p className="text-xl font-bold text-white text-shadow-black text-shadow-lg/30 sm:text-2xl">
                  Argha Biswas
                </p>
              </div>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="">
          <div className="group relative block bg-white rounded-4xl align-middle">
            <img
              alt=""
              src={ima5}
              className="absolute h-full w-full rounded-4xl object-cover transition-opacity"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <p className=" font-medium tracking-widest text-pink-500 text-lg uppercase">
                  JAVA APP DEVELOPER
                </p>

                <p className="text-xl font-bold text-white text-shadow-black text-shadow-lg/30 sm:text-2xl">
                  Ahsan MD Mojahid
                </p>
              </div>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="">
          <div className="group relative block bg-white rounded-4xl align-middle">
            <img
              alt=""
              src={ima6}
              className="absolute h-full w-full rounded-4xl object-cover transition-opacity"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <p className=" font-medium tracking-widest text-pink-500 text-lg uppercase">
                  MERN WEB APP DEVELOPER
                </p>

                <p className="text-xl font-bold text-white text-shadow-black text-shadow-lg/30 sm:text-2xl">
                  Ratul Islam
                </p>
              </div>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="">
          <div className="group relative block bg-white rounded-4xl align-middle">
            <img
              alt=""
              src={ima6}
              className="absolute h-full w-full rounded-4xl object-cover transition-opacity"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <p className=" font-medium tracking-widest text-pink-500 text-lg uppercase">
                  MERN WEB APP DEVELOPER
                </p>

                <p className="text-xl font-bold text-white text-shadow-black text-shadow-lg/30 sm:text-2xl">
                  Ratul Islam
                </p>
              </div>
            </div>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default TeamCaro;
