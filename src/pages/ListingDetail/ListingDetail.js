import React from 'react';
import ListingDetailBannerCarousel from '../../components/ListingDetailBannerCarousel/ListingDetailBannerCarousel';
import Countdown from '../../components/Countdown/Countdown';

const ListingDetail = () => {
  return (
    <div>
      <ListingDetailBannerCarousel />
      <div>
        <Countdown />
        <div className='h-[106px]'>
          <div className='max-w-[350px] bg-gray-200 w-full h-full flex flex-col justify-center items-center '>
            <p className='text-4xl'>Cox's Bazar Relax Tour</p>
          </div>
          <div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ListingDetail;