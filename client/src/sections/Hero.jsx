import React from "react";
import { useState, Suspense, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

import "./../components/earth/earth.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stars } from "@react-three/drei";
import Earth from "../components/earth/Earth.jsx";


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Trigger the animation after the component has mounted
    setTimeout(() => {
      setIsVisible(true);
      if (canvasRef.current) {
        // Apply a scale transform to the Canvas
        canvasRef.current.style.transform = "scale(1)";
        canvasRef.current.style.transition = "transform 0.8s ease-in-out";
      }
    }, 100); // You can adjust the delay if needed
  }, []);

  return (
    <section className="mx-auto w-screen max-w-screen-xl h-dvh overflow-hidden flex">
      <h1
        className={`text-white z-1  max-w-prose justify-center mt-[14%] ml-4 
        ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }
            transition-transform duration-500 ease-in
          `}
      >
        <h1 class="text-4xl font-bold  text-gray-900 sm:text-5xl dark:text-white">
          Explore New Dimensions in Software with
        </h1>
        <h1 className="text-4xl font-bold ">
          <strong class=" font-bold text-xl bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent sm:text-5xl">
            Phi Galaxy
          </strong>
        </h1>

        <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200 mb-4">
          Powering Your Future with Innovative Software Solutions
        </p>

        <div>
          <a
            className="group inline-block rounded-full bg-gradient-to-r from-purple-700 to-blue-500 p-[2px] hover:text-white focus:outline-hidden"
            href="/"
          >
            <span className="block text-[16px] text-white bg-black rounded-full px-5 py-1 font-medium group-hover:bg-transparent transition duration-300">
              Discover More
            </span>
          </a>
        </div>
      </h1>

        <Canvas
          style={{
            width: `100%`,
            height: `100%`,
            transform: (3),
          }}
          camera={{ position: [0, 0, 5], fov: 30 }}
          className="rounded-full"
        >


          <OrbitControls
            ref={canvasRef}
            enableZoom={false}
            enableRotate={true}
            enablePan={true}
          />
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
          <Environment preset="sunset" />
          <Stars />
        </Canvas>
    </section>
  );
};

export default Hero;
