import React from 'react'
import { useState, Suspense } from 'react';
import { createRoot } from "react-dom/client";

import './../components/earth/earth.css'


import { Canvas, } from "@react-three/fiber";
import { OrbitControls, Environment } from '@react-three/drei';
import Earth from '../../public/Earth.jsx';

const Hero = () => {
  return (
    <section className="">
      <div className="mx-auto w-screen max-w-screen-xl h-dvh px-4 py-16 sm:px-6 sm:py-24 md:items-center  md:gap-4 lg:px-8 lg:py-32">
        <h1 className="text-black absolute z-1 items-center content-center max-w-prose text-left">
          <div class="">
            <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
              Understand user flow and
              <strong class="text-indigo-600"> increase </strong>
              conversions
            </h1>

            <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </p>

            <div class="mt-4 flex gap-4 sm:mt-6">
              <a
                class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Get Started
              </a>

              <a
                class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </h1>
        <Canvas className="">
          <ambientLight />
          <OrbitControls enableZoom={false} enableRotate={true} />
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </section>
  );
}

export default Hero