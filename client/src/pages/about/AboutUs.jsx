import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AboutUs = () => {
  return (
    <div className="h-auto bg-gray-700">
      <Header />
      <div className="flex justify-center items-center">
        <h1>About us</h1>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
