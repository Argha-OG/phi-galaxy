import React from "react";
import Hero from "../../sections/Hero";
import MainLayout from "../../Layout/MainLayout";
import HAboutus from "../../sections/HAboutus";
import HServices from "../../sections/HServices";

const Home = () => {
  return (
    <MainLayout>
      <div>
        <Hero />
        <HAboutus />
        <HServices />
      </div>
    </MainLayout>
  );
};

export default Home;
