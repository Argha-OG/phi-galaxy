import React from "react";
import MainLayout from "../../Layout/MainLayout";
import Bread from "../../components/breadcrumb/Bread";
import AboutImg from "./../../assets/aboutpage/about.jpg";
import RoundImg from "./../../assets/aboutpage/round.png";
import BackImg from "./../../assets/hserviceback.png";
import Ico1 from "./../../assets/aboutpage/1.png";
import Ico2 from "./../../assets/aboutpage/2.png";
import Ico3 from "./../../assets/aboutpage/3.png";
import Ico4 from "./../../assets/aboutpage/4.png";
import ChoBack from "./../../assets/aboutpage/choback.png";
import ChoHero from "./../../assets/aboutpage/chohero.png";
import Busicon from "./../../assets/aboutpage/busicon.png";
import Itcon from "./../../assets/aboutpage/itcon.png";


import HTeam from "../../sections/HTeam";


const AboutUs = () => {
  return (
    <MainLayout>
      <Bread>About Us</Bread>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex gap-4 content-center items-center my-16">
            <div className="flex-1/2">
              <div className="max-w-4/5 md:max-w-none">
                <span className="font-bold text-3xl bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
                  About Us
                </span>
                <h2 className="max-w-4/5 text-2xl font-semibold text-gray-900 sm:text-3xl mt-6">
                  We're A Strategic IT Consulting & Solutions Firm
                </h2>

                <p className="max-w-4/5 mt-4 text-gray-700">
                  Dedicated to empowering businesses with cutting-edge
                  technology, seamless digital transformation, and innovative
                  software solutions. At PhyGalaxy, we bridge the gap between
                  strategy and execution, ensuring scalable, secure, and
                  future-ready IT infrastructures.
                </p>
              </div>
            </div>

            <div className="flex-1/2">
              <div className="overflow-hidden flex justify-start h-full">
                <img
                  src={AboutImg}
                  className="rounded-full h-[400px] w-[400px] shadow-2xs z-1 mt-5"
                  alt=""
                />

                <img
                  src={RoundImg}
                  className="absolute rounded-full h-[360px] w-[360px] shadow-2xs ml-[5%]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundImage: `url(${BackImg})` }}>
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 items-center content-center">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-white text-2xl text-center font-bold content-center">
              Work Process
            </h1>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl dark:text-white">
              Our Service Guide
            </h1>
          </div>
          <div className="content-center items-center text-white m-8 h-64 flex">
            <div className="flex h-full w-full items-center content-center text-center justify-center">
              <div className="flex flex-col items-center content-center text-center justify-center">
                <img src={Ico1} alt="" />
                <div>
                  <strong>Choose A Service</strong>
                  <p>
                    In a free hour, when our power of choice is untrammeled and
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full items-center content-center text-center justify-center">
              <div className="flex flex-col-reverse items-center content-center text-center justify-center">
                <img src={Ico2} alt="" />
                <div>
                  <strong>Define Requirements</strong>
                  <p>
                    In a free hour, when our power of choice is untrammeled and
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full items-center content-center text-center justify-center">
              <div className="flex flex-col items-center content-center text-center justify-center">
                <img src={Ico3} alt="" />
                <div>
                  <strong>Request A Meeting</strong>
                  <p>
                    In a free hour, when our power of choice is untrammeled and
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full items-center content-center text-center justify-center">
              <div className="flex flex-col-reverse items-center content-center text-center justify-center">
                <img src={Ico4} alt="" />
                <div>
                  <strong>Finial Solution</strong>
                  <p>
                    In a free hour, when our power of choice is untrammeled and
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex gap-4 content-center items-center my-16">
            <div className="flex-1/2">
              <div className="max-w-4/5 md:max-w-none">
                <span className="font-bold text-3xl bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
                  Why Choose Us
                </span>

                <p className="text-lg max-w-4/5 mt-4 text-black">
                  Choose PhyGalaxy for innovative IT solutions, expert
                  consulting, and seamless digital transformation. We deliver
                  secure, scalable, and future-ready technology to drive your
                  business success
                </p>

                <div className="flex h-full w-full items-center content-center text-center justify-start m-2">
                  <div className="flex items-center content-center text-center justify-center ">
                    <img src={Busicon} alt="" />
                    <div className="m-1">
                      <strong>Business Groth</strong>
                    </div>
                  </div>
                </div>
                <div className="flex h-full w-full items-center content-center text-center justify-start m-2">
                  <div className="flex items-center content-center text-center justify-center">
                    <img src={Itcon} alt="" />
                    <div className="m-1">
                      <strong>Technology Consultancy</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1/2">
              <div className="overflow-hidden flex justify-start h-full w-full">
                <img
                  src={ChoHero}
                  className="relative right-30 h-[400px] w-auto shadow-2xs z-1"
                  alt=""
                />

                <img
                  src={ChoBack}
                  className="absolute h-[400px] w-auto shadow-2xs ml-30"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <HTeam />
    </MainLayout>
  );
};

export default AboutUs;
