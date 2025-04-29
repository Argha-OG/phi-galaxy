import React, { useState, useEffect, useRef } from "react";
import BackImg from "./../assets/hserviceback.png";
import Im1 from "./../assets/im1.png";
import Im2 from "./../assets/im2.png";
import Im3 from "./../assets/im3.png";
import Im4 from "./../assets/im4.png";
import Im5 from "./../assets/im5.png";

const HServices = () => {
  return (
    <div style={{ backgroundImage: `url(${BackImg})` }}>
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            We Provide Best
            <strong className="text-indigo-600"> Service </strong>
            in
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export default HServices;
