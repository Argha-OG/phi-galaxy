import React from 'react'
import Header from '../components/Header'
import Hero from '../sections/Hero';
import Footer from '../components/Footer';
import MainLayout from '../Layout/MainLayout';
import Aboutus from '../sections/Aboutus';


const Home = () => {
  return (
    <MainLayout>
    <div>
        <Hero />
        <Aboutus />
    </div>
    </MainLayout>
  );
}

export default Home