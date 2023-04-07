import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IndexPage from '../components/IndexPage';
import { Link } from 'react-router-dom';
import FoodCategorySearch from '../components/FoodCategorySearch'
import Carousel from '../components/Carousel';
import BannerTop from "../example/banner.jsx";
function Home() {    
  return (
    <div className="font-poppins overflow-x-hidden ">
      <div className=" relative ">
        <Header />
        {/* <Banner /> */}
      </div>
      <BannerTop />
      <Carousel />
      <IndexPage />
      <Footer />
    </div>
  );
}

export default Home