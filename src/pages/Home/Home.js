import React from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Link } from 'react-router-dom';

import Carousel from '../../components/carousel/Carousel';
import TourCardSlider from '../../components/TourCardSlider/TourCardSlider';
const Home = () => {
  return (
    <div>
      <Carousel />
      <TourCardSlider/>
    </div>
  );
};

export default Home;