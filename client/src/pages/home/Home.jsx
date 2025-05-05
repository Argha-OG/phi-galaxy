import React from "react";
import Hero from "../../sections/Hero";
import MainLayout from "../../Layout/MainLayout";
import HAboutus from "../../sections/HAboutus";
import HServices from "../../sections/HServices";
import HTeam from "../../sections/HTeam";
import HContact from "../../sections/HContact";

const Home = () => {
  return (
    <MainLayout>
      <div>
        <Hero />
        <HAboutus />
        <HServices />
        <HTeam />
        <HContact />
      </div>
    </MainLayout>
  );
};

export default Home;
