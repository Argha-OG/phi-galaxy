import React from 'react'
import { createRoot } from "react-dom/client";
import { Canvas, } from "@react-three/fiber";

const Hero = () => {
  return (
    <section className="h-dvh">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <div id="canvas-container">
          <Canvas>
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <ambientLight intensity={0.1} />
              <directionalLight color="red" position={[0, 0, 5]} />
              <meshStandardMaterial />
            </mesh>
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default Hero