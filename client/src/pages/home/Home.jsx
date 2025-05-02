import React from "react";
import Hero from "../../sections/Hero";
import MainLayout from "../../Layout/MainLayout";
import HAboutus from "../../sections/HAboutus";
import HServices from "../../sections/HServices";
import HTeam from "../../sections/HTeam";

const Home = () => {
  return (
    <MainLayout>
      <div>
        <Hero />
        <HAboutus />
        <HServices />
        <HTeam />
      </div>
    </MainLayout>
  );
};

export default Home;
