import React from 'react';
import Slider from 'react-slick';

import img1 from '../../assets/carouselImg/1.png';
import img2 from '../../assets/carouselImg/2.png';
import img3 from '../../assets/carouselImg/3.png';
import img4 from '../../assets/carouselImg/4.png';
import img5 from '../../assets/carouselImg/5.png';
const ListingDetailBannerCarousel = () => {
  const settings = {
    draggable: true,
    arrows: false,
    autoplay: true,
    dots: false,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 1000,
  };
  return (
    <div>
      <div className='w-full'>
        <Slider {...settings}>
          <div>
            <img className='w-full h-[80vh] object-cover' src={img1} />
          </div>
          <div>
            <img className='w-full h-[80vh] object-cover' src={img2} />
          </div>
          <div>
            <img className='w-full h-[80vh] object-cover' src={img3} />
          </div>
          <div>
            <img className='w-full h-[80vh] object-cover' src={img4} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ListingDetailBannerCarousel;
