
import React, { useState } from "react";

import { AnimatePresence } from 'framer-motion';
import img1 from '../../assets/carouselImg/1.png';
import img2 from '../../assets/carouselImg/2.png';
import img3 from '../../assets/carouselImg/3.png';
import img4 from '../../assets/carouselImg/4.png';
import img5 from '../../assets/carouselImg/5.png';
import img6 from '../../assets/carouselImg/6.png';
import img7 from '../../assets/carouselImg/7.png';

import Header from '../Header';
import BackgroundImage from './BackgroundImage';
import SlideInfo from './SlideInfo';
import Slides from './Slides';
import Controls from './Controls';
const Carousel = () => {

    const sliderData = [
    {
      img: img1,
      title: "Cox's Bazar",
      description:
        "Cox's Bazar Beach in Bangladesh is the longest natural sea beach in the world",
      location: 'Chittagong',
    },
    {
      img: img2,
      title: 'Chandpur',
      description:
        "Chandpur is also known as the 'City of Hilsha'",
      location: 'Chittagong',
    },
    {
      img: img3,
      title: 'Sixty Dome Mosque',
      description:
        'The Sixty Dome Mosque, is a mosque in Bagerhat, Bangladesh. It is a part of the Mosque City of Bagerhat.',
      location: 'Bagerhat',
    },
    {
      img: img4,
      title: 'Sundarbans',
      description:
        'Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges.',
      location: 'Khulna',
    },
    {
      img: img5,
      title: 'Sajek Valley',
      description:
        'Sajek is located in the verdant hills of Kasalong range of mountains amidst the serene and exotic beauty of nature.',
      location: 'Rangamati',
    },
    {
      img: img6,
      title: 'Sonargaon',
      description:
        'Sonargaon is a historic city in central Bangladesh.',
      location: 'Dhaka',
    },
    {
      img: img7,
      title: 'Lalakhal',
      description:
        'Lalakhal is a wide channel in the Sharee River near the Tamabil road.',
      location: 'Sylhet',
    },
  ];

  const initData = sliderData[0];
  const [data, setData] = useState(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState(sliderData[0]);

  const [currentSlideData, setCurrentSlideData] = useState({
    data: initData,
    index: 0,
  });
  return (
       <main
      className={`

        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <Header />
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default Carousel;