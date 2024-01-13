import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import tourImg from '../../assets/tour1.jpg';
import Slider from 'react-slick';
const TourCardSlider = () => {
  const CustomNextArrow = (props) => (
    <button
      onClick={props.onClick}
      className='flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#1312125f] transition duration-300
                  ease-in-out hover:bg-black hover:text-white custom-arrow next absolute top-[-63px] right-[70px] '
    >
      <IoIosArrowBack className='text-xl' />
    </button>
  );

  const CustomPrevArrow = (props) => (
    <button
      onClick={props.onClick}
      className='flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#1312125f] transition duration-300
                  ease-in-out hover:bg-black hover:text-white custom-arrow prev absolute top-[-63px] right-0'
    >
      <IoIosArrowForward className='text-xl' />
    </button>
  );
  let settings = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />, // Custom next arrow component
    prevArrow: <CustomPrevArrow />, // Custom previous arrow component
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1440px] md:px-24 lg:px-8 lg:py-20'>
        <div className='border-b-[1px] border-yellow-500 py-3 flex justify-between items-center'>
          <h2 className='block text-6xl font-light'>Cox's Bazar</h2>

          <div className='flex items-center gap-4'></div>
        </div>
        {/* slider */}
        <div className=''>
          <Slider {...settings}>
            <Link to="/listing-detail" className='pr-10'>
              <div className='relative inline-flex flex-col font-light shadow-lg rounded-lg w-80 group my-10'>
                <div className='w-full h-40 overflow-hidden rounded-t-lg group-hover:transform group-hover:scale-120 transition-transform'>
                  <img
                    src={tourImg}
                    alt='Travel Image'
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='text-gray-700 p-4'>
                  <div className='pb-3 flex justify-between items-center'>
                    <label className='text-gray-500 text-lg uppercase'>
                      Bondhu Travel
                    </label>
                    <label className='text-gray-500 text-lg uppercase'>
                      20-08-2023
                    </label>
                  </div>
                  <h1 className='text-xl break-all leading-tight overflow-hidden max-h-14 relative bg-white'>
                    Cox's Bazar
                  </h1>
                  <div className='flex items-center mt-4'>
                    <div className='inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-1 px-2 rounded-full'>
                      <span className='text-xs'>4.3</span>
                      <i className='material-icons text-xs ml-1'>star</i>
                    </div>
                    <div className='text-gray-500 ml-2'>(371 Reviews)</div>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'>3</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                      <span className='font-light text-2xl text-gray-400'>
                        /
                      </span>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'> 2</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className=' flex items-center gap-[6px]'>
                      <span className='w-[16px] font-light'>
                        <svg
                          className='font-light icon flat-color'
                          fill='#000000'
                          width='24px'
                          height='24px'
                          viewBox='0 0 0.72 0.72'
                          id='taka'
                          data-name='Flat Color'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            id='primary'
                            d='M0.559 0.364A0.117 0.117 0 0 0 0.491 0.301a0.03 0.03 0 0 0 -0.019 0.057 0.055 0.055 0 0 1 0.033 0.076L0.452 0.553A0.08 0.08 0 0 1 0.3 0.52V0.36h0.06a0.03 0.03 0 0 0 0 -0.06H0.3V0.18A0.12 0.12 0 0 0 0.18 0.06a0.03 0.03 0 0 0 0 0.06 0.06 0.06 0 0 1 0.06 0.06V0.3H0.18a0.03 0.03 0 0 0 0 0.06h0.06v0.161a0.14 0.14 0 0 0 0.267 0.057L0.559 0.459a0.117 0.117 0 0 0 0 -0.095Z'
                          />
                        </svg>
                      </span>
                      <p className='text-2xl'>3500</p>
                    </div>
                  </div>
                </div>
                <button className='w-10 h-10 hidden absolute top-4 right-4  bg-white text-gray-500 rounded-full shadow-md group-hover:inline-block'>
                  <span className='button-favorite-hover flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      fill='currentColor'
                    >
                      <path d='M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z'></path>
                    </svg>
                  </span>
                </button>
              </div>
            </Link>
            <Link to="/listing-detail" className='pr-10'>
              <div className='relative inline-flex flex-col font-light shadow-lg rounded-lg w-80 group my-10'>
                <div className='w-full h-40 overflow-hidden rounded-t-lg group-hover:transform group-hover:scale-120 transition-transform'>
                  <img
                    src={tourImg}
                    alt='Travel Image'
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='text-gray-700 p-4'>
                  <div className='pb-3 flex justify-between items-center'>
                    <label className='text-gray-500 text-lg uppercase'>
                      Bondhu Travel
                    </label>
                    <label className='text-gray-500 text-lg uppercase'>
                      20-08-2023
                    </label>
                  </div>
                  <h1 className='text-xl break-all leading-tight overflow-hidden max-h-14 relative bg-white'>
                    Cox's Bazar
                  </h1>
                  <div className='flex items-center mt-4'>
                    <div className='inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-1 px-2 rounded-full'>
                      <span className='text-xs'>4.3</span>
                      <i className='material-icons text-xs ml-1'>star</i>
                    </div>
                    <div className='text-gray-500 ml-2'>(371 Reviews)</div>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'>3</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                      <span className='font-light text-2xl text-gray-400'>
                        /
                      </span>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'> 2</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className=' flex items-center gap-[6px]'>
                      <span className='w-[16px] font-light'>
                        <svg
                          className='font-light icon flat-color'
                          fill='#000000'
                          width='24px'
                          height='24px'
                          viewBox='0 0 0.72 0.72'
                          id='taka'
                          data-name='Flat Color'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            id='primary'
                            d='M0.559 0.364A0.117 0.117 0 0 0 0.491 0.301a0.03 0.03 0 0 0 -0.019 0.057 0.055 0.055 0 0 1 0.033 0.076L0.452 0.553A0.08 0.08 0 0 1 0.3 0.52V0.36h0.06a0.03 0.03 0 0 0 0 -0.06H0.3V0.18A0.12 0.12 0 0 0 0.18 0.06a0.03 0.03 0 0 0 0 0.06 0.06 0.06 0 0 1 0.06 0.06V0.3H0.18a0.03 0.03 0 0 0 0 0.06h0.06v0.161a0.14 0.14 0 0 0 0.267 0.057L0.559 0.459a0.117 0.117 0 0 0 0 -0.095Z'
                          />
                        </svg>
                      </span>
                      <p className='text-2xl'>3500</p>
                    </div>
                  </div>
                </div>
                <button className='w-10 h-10 hidden absolute top-4 right-4  bg-white text-gray-500 rounded-full shadow-md group-hover:inline-block'>
                  <span className='button-favorite-hover flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      fill='currentColor'
                    >
                      <path d='M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z'></path>
                    </svg>
                  </span>
                </button>
              </div>
            </Link>
            <Link to="/listing-detail" className='pr-10'>
              <div className='relative inline-flex flex-col font-light shadow-lg rounded-lg w-80 group my-10'>
                <div className='w-full h-40 overflow-hidden rounded-t-lg group-hover:transform group-hover:scale-120 transition-transform'>
                  <img
                    src={tourImg}
                    alt='Travel Image'
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='text-gray-700 p-4'>
                  <div className='pb-3 flex justify-between items-center'>
                    <label className='text-gray-500 text-lg uppercase'>
                      Bondhu Travel
                    </label>
                    <label className='text-gray-500 text-lg uppercase'>
                      20-08-2023
                    </label>
                  </div>
                  <h1 className='text-xl break-all leading-tight overflow-hidden max-h-14 relative bg-white'>
                    Cox's Bazar
                  </h1>
                  <div className='flex items-center mt-4'>
                    <div className='inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-1 px-2 rounded-full'>
                      <span className='text-xs'>4.3</span>
                      <i className='material-icons text-xs ml-1'>star</i>
                    </div>
                    <div className='text-gray-500 ml-2'>(371 Reviews)</div>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'>3</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                      <span className='font-light text-2xl text-gray-400'>
                        /
                      </span>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'> 2</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className=' flex items-center gap-[6px]'>
                      <span className='w-[16px] font-light'>
                        <svg
                          className='font-light icon flat-color'
                          fill='#000000'
                          width='24px'
                          height='24px'
                          viewBox='0 0 0.72 0.72'
                          id='taka'
                          data-name='Flat Color'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            id='primary'
                            d='M0.559 0.364A0.117 0.117 0 0 0 0.491 0.301a0.03 0.03 0 0 0 -0.019 0.057 0.055 0.055 0 0 1 0.033 0.076L0.452 0.553A0.08 0.08 0 0 1 0.3 0.52V0.36h0.06a0.03 0.03 0 0 0 0 -0.06H0.3V0.18A0.12 0.12 0 0 0 0.18 0.06a0.03 0.03 0 0 0 0 0.06 0.06 0.06 0 0 1 0.06 0.06V0.3H0.18a0.03 0.03 0 0 0 0 0.06h0.06v0.161a0.14 0.14 0 0 0 0.267 0.057L0.559 0.459a0.117 0.117 0 0 0 0 -0.095Z'
                          />
                        </svg>
                      </span>
                      <p className='text-2xl'>3500</p>
                    </div>
                  </div>
                </div>
                <button className='w-10 h-10 hidden absolute top-4 right-4  bg-white text-gray-500 rounded-full shadow-md group-hover:inline-block'>
                  <span className='button-favorite-hover flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      fill='currentColor'
                    >
                      <path d='M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z'></path>
                    </svg>
                  </span>
                </button>
              </div>
            </Link>
            <Link to="/listing-detail" className='pr-10'>
              <div className='relative inline-flex flex-col font-light shadow-lg rounded-lg w-80 group my-10'>
                <div className='w-full h-40 overflow-hidden rounded-t-lg group-hover:transform group-hover:scale-120 transition-transform'>
                  <img
                    src={tourImg}
                    alt='Travel Image'
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='text-gray-700 p-4'>
                  <div className='pb-3 flex justify-between items-center'>
                    <label className='text-gray-500 text-lg uppercase'>
                      Bondhu Travel
                    </label>
                    <label className='text-gray-500 text-lg uppercase'>
                      20-08-2023
                    </label>
                  </div>
                  <h1 className='text-xl break-all leading-tight overflow-hidden max-h-14 relative bg-white'>
                    Cox's Bazar
                  </h1>
                  <div className='flex items-center mt-4'>
                    <div className='inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-1 px-2 rounded-full'>
                      <span className='text-xs'>4.3</span>
                      <i className='material-icons text-xs ml-1'>star</i>
                    </div>
                    <div className='text-gray-500 ml-2'>(371 Reviews)</div>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'>3</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                      <span className='font-light text-2xl text-gray-400'>
                        /
                      </span>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'> 2</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className=' flex items-center gap-[6px]'>
                      <span className='w-[16px] font-light'>
                        <svg
                          className='font-light icon flat-color'
                          fill='#000000'
                          width='24px'
                          height='24px'
                          viewBox='0 0 0.72 0.72'
                          id='taka'
                          data-name='Flat Color'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            id='primary'
                            d='M0.559 0.364A0.117 0.117 0 0 0 0.491 0.301a0.03 0.03 0 0 0 -0.019 0.057 0.055 0.055 0 0 1 0.033 0.076L0.452 0.553A0.08 0.08 0 0 1 0.3 0.52V0.36h0.06a0.03 0.03 0 0 0 0 -0.06H0.3V0.18A0.12 0.12 0 0 0 0.18 0.06a0.03 0.03 0 0 0 0 0.06 0.06 0.06 0 0 1 0.06 0.06V0.3H0.18a0.03 0.03 0 0 0 0 0.06h0.06v0.161a0.14 0.14 0 0 0 0.267 0.057L0.559 0.459a0.117 0.117 0 0 0 0 -0.095Z'
                          />
                        </svg>
                      </span>
                      <p className='text-2xl'>3500</p>
                    </div>
                  </div>
                </div>
                <button className='w-10 h-10 hidden absolute top-4 right-4  bg-white text-gray-500 rounded-full shadow-md group-hover:inline-block'>
                  <span className='button-favorite-hover flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      fill='currentColor'
                    >
                      <path d='M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z'></path>
                    </svg>
                  </span>
                </button>
              </div>
            </Link>
            <Link to="/listing-detail" className='pr-10'>
              <div className='relative inline-flex flex-col font-light shadow-lg rounded-lg w-80 group my-10'>
                <div className='w-full h-40 overflow-hidden rounded-t-lg group-hover:transform group-hover:scale-120 transition-transform'>
                  <img
                    src={tourImg}
                    alt='Travel Image'
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='text-gray-700 p-4'>
                  <div className='pb-3 flex justify-between items-center'>
                    <label className='text-gray-500 text-lg uppercase'>
                      Bondhu Travel
                    </label>
                    <label className='text-gray-500 text-lg uppercase'>
                      20-08-2023
                    </label>
                  </div>
                  <h1 className='text-xl break-all leading-tight overflow-hidden max-h-14 relative bg-white'>
                    Cox's Bazar
                  </h1>
                  <div className='flex items-center mt-4'>
                    <div className='inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-1 px-2 rounded-full'>
                      <span className='text-xs'>4.3</span>
                      <i className='material-icons text-xs ml-1'>star</i>
                    </div>
                    <div className='text-gray-500 ml-2'>(371 Reviews)</div>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'>3</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                      <span className='font-light text-2xl text-gray-400'>
                        /
                      </span>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'> 2</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className=' flex items-center gap-[6px]'>
                      <span className='w-[16px] font-light'>
                        <svg
                          className='font-light icon flat-color'
                          fill='#000000'
                          width='24px'
                          height='24px'
                          viewBox='0 0 0.72 0.72'
                          id='taka'
                          data-name='Flat Color'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            id='primary'
                            d='M0.559 0.364A0.117 0.117 0 0 0 0.491 0.301a0.03 0.03 0 0 0 -0.019 0.057 0.055 0.055 0 0 1 0.033 0.076L0.452 0.553A0.08 0.08 0 0 1 0.3 0.52V0.36h0.06a0.03 0.03 0 0 0 0 -0.06H0.3V0.18A0.12 0.12 0 0 0 0.18 0.06a0.03 0.03 0 0 0 0 0.06 0.06 0.06 0 0 1 0.06 0.06V0.3H0.18a0.03 0.03 0 0 0 0 0.06h0.06v0.161a0.14 0.14 0 0 0 0.267 0.057L0.559 0.459a0.117 0.117 0 0 0 0 -0.095Z'
                          />
                        </svg>
                      </span>
                      <p className='text-2xl'>3500</p>
                    </div>
                  </div>
                </div>
                <button className='w-10 h-10 hidden absolute top-4 right-4  bg-white text-gray-500 rounded-full shadow-md group-hover:inline-block'>
                  <span className='button-favorite-hover flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      fill='currentColor'
                    >
                      <path d='M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z'></path>
                    </svg>
                  </span>
                </button>
              </div>
            </Link>
            <Link to="/listing-detail" className='pr-10'>
              <div className='relative inline-flex flex-col font-light shadow-lg rounded-lg w-80 group my-10'>
                <div className='w-full h-40 overflow-hidden rounded-t-lg group-hover:transform group-hover:scale-120 transition-transform'>
                  <img
                    src={tourImg}
                    alt='Travel Image'
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='text-gray-700 p-4'>
                  <div className='pb-3 flex justify-between items-center'>
                    <label className='text-gray-500 text-lg uppercase'>
                      Bondhu Travel
                    </label>
                    <label className='text-gray-500 text-lg uppercase'>
                      20-08-2023
                    </label>
                  </div>
                  <h1 className='text-xl break-all leading-tight overflow-hidden max-h-14 relative bg-white'>
                    Cox's Bazar
                  </h1>
                  <div className='flex items-center mt-4'>
                    <div className='inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-1 px-2 rounded-full'>
                      <span className='text-xs'>4.3</span>
                      <i className='material-icons text-xs ml-1'>star</i>
                    </div>
                    <div className='text-gray-500 ml-2'>(371 Reviews)</div>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'>3</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                      <span className='font-light text-2xl text-gray-400'>
                        /
                      </span>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'> 2</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className=' flex items-center gap-[6px]'>
                      <span className='w-[16px] font-light'>
                        <svg
                          className='font-light icon flat-color'
                          fill='#000000'
                          width='24px'
                          height='24px'
                          viewBox='0 0 0.72 0.72'
                          id='taka'
                          data-name='Flat Color'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            id='primary'
                            d='M0.559 0.364A0.117 0.117 0 0 0 0.491 0.301a0.03 0.03 0 0 0 -0.019 0.057 0.055 0.055 0 0 1 0.033 0.076L0.452 0.553A0.08 0.08 0 0 1 0.3 0.52V0.36h0.06a0.03 0.03 0 0 0 0 -0.06H0.3V0.18A0.12 0.12 0 0 0 0.18 0.06a0.03 0.03 0 0 0 0 0.06 0.06 0.06 0 0 1 0.06 0.06V0.3H0.18a0.03 0.03 0 0 0 0 0.06h0.06v0.161a0.14 0.14 0 0 0 0.267 0.057L0.559 0.459a0.117 0.117 0 0 0 0 -0.095Z'
                          />
                        </svg>
                      </span>
                      <p className='text-2xl'>3500</p>
                    </div>
                  </div>
                </div>
                <button className='w-10 h-10 hidden absolute top-4 right-4  bg-white text-gray-500 rounded-full shadow-md group-hover:inline-block'>
                  <span className='button-favorite-hover flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      fill='currentColor'
                    >
                      <path d='M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z'></path>
                    </svg>
                  </span>
                </button>
              </div>
            </Link>
            <Link to="/listing-detail" className='pr-10'>
              <div className='relative inline-flex flex-col font-light shadow-lg rounded-lg w-80 group my-10'>
                <div className='w-full h-40 overflow-hidden rounded-t-lg group-hover:transform group-hover:scale-120 transition-transform'>
                  <img
                    src={tourImg}
                    alt='Travel Image'
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='text-gray-700 p-4'>
                  <div className='pb-3 flex justify-between items-center'>
                    <label className='text-gray-500 text-lg uppercase'>
                      Bondhu Travel
                    </label>
                    <label className='text-gray-500 text-lg uppercase'>
                      20-08-2023
                    </label>
                  </div>
                  <h1 className='text-xl break-all leading-tight overflow-hidden max-h-14 relative bg-white'>
                    Cox's Bazar
                  </h1>
                  <div className='flex items-center mt-4'>
                    <div className='inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-1 px-2 rounded-full'>
                      <span className='text-xs'>4.3</span>
                      <i className='material-icons text-xs ml-1'>star</i>
                    </div>
                    <div className='text-gray-500 ml-2'>(371 Reviews)</div>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'>3</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                      <span className='font-light text-2xl text-gray-400'>
                        /
                      </span>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'> 2</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className=' flex items-center gap-[6px]'>
                      <span className='w-[16px] font-light'>
                        <svg
                          className='font-light icon flat-color'
                          fill='#000000'
                          width='24px'
                          height='24px'
                          viewBox='0 0 0.72 0.72'
                          id='taka'
                          data-name='Flat Color'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            id='primary'
                            d='M0.559 0.364A0.117 0.117 0 0 0 0.491 0.301a0.03 0.03 0 0 0 -0.019 0.057 0.055 0.055 0 0 1 0.033 0.076L0.452 0.553A0.08 0.08 0 0 1 0.3 0.52V0.36h0.06a0.03 0.03 0 0 0 0 -0.06H0.3V0.18A0.12 0.12 0 0 0 0.18 0.06a0.03 0.03 0 0 0 0 0.06 0.06 0.06 0 0 1 0.06 0.06V0.3H0.18a0.03 0.03 0 0 0 0 0.06h0.06v0.161a0.14 0.14 0 0 0 0.267 0.057L0.559 0.459a0.117 0.117 0 0 0 0 -0.095Z'
                          />
                        </svg>
                      </span>
                      <p className='text-2xl'>3500</p>
                    </div>
                  </div>
                </div>
                <button className='w-10 h-10 hidden absolute top-4 right-4  bg-white text-gray-500 rounded-full shadow-md group-hover:inline-block'>
                  <span className='button-favorite-hover flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      fill='currentColor'
                    >
                      <path d='M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z'></path>
                    </svg>
                  </span>
                </button>
              </div>
            </Link>
            <Link to="/listing-detail" className='pr-10'>
              <div className='relative inline-flex flex-col font-light shadow-lg rounded-lg w-80 group my-10'>
                <div className='w-full h-40 overflow-hidden rounded-t-lg group-hover:transform group-hover:scale-120 transition-transform'>
                  <img
                    src={tourImg}
                    alt='Travel Image'
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='text-gray-700 p-4'>
                  <div className='pb-3 flex justify-between items-center'>
                    <label className='text-gray-500 text-lg uppercase'>
                      Bondhu Travel
                    </label>
                    <label className='text-gray-500 text-lg uppercase'>
                      20-08-2023
                    </label>
                  </div>
                  <h1 className='text-xl break-all leading-tight overflow-hidden max-h-14 relative bg-white'>
                    Cox's Bazar
                  </h1>
                  <div className='flex items-center mt-4'>
                    <div className='inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-1 px-2 rounded-full'>
                      <span className='text-xs'>4.3</span>
                      <i className='material-icons text-xs ml-1'>star</i>
                    </div>
                    <div className='text-gray-500 ml-2'>(371 Reviews)</div>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'>3</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                      <span className='font-light text-2xl text-gray-400'>
                        /
                      </span>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'> 2</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className=' flex items-center gap-[6px]'>
                      <span className='w-[16px] font-light'>
                        <svg
                          className='font-light icon flat-color'
                          fill='#000000'
                          width='24px'
                          height='24px'
                          viewBox='0 0 0.72 0.72'
                          id='taka'
                          data-name='Flat Color'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            id='primary'
                            d='M0.559 0.364A0.117 0.117 0 0 0 0.491 0.301a0.03 0.03 0 0 0 -0.019 0.057 0.055 0.055 0 0 1 0.033 0.076L0.452 0.553A0.08 0.08 0 0 1 0.3 0.52V0.36h0.06a0.03 0.03 0 0 0 0 -0.06H0.3V0.18A0.12 0.12 0 0 0 0.18 0.06a0.03 0.03 0 0 0 0 0.06 0.06 0.06 0 0 1 0.06 0.06V0.3H0.18a0.03 0.03 0 0 0 0 0.06h0.06v0.161a0.14 0.14 0 0 0 0.267 0.057L0.559 0.459a0.117 0.117 0 0 0 0 -0.095Z'
                          />
                        </svg>
                      </span>
                      <p className='text-2xl'>3500</p>
                    </div>
                  </div>
                </div>
                <button className='w-10 h-10 hidden absolute top-4 right-4  bg-white text-gray-500 rounded-full shadow-md group-hover:inline-block'>
                  <span className='button-favorite-hover flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      fill='currentColor'
                    >
                      <path d='M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z'></path>
                    </svg>
                  </span>
                </button>
              </div>
            </Link>
            <Link to="/listing-detail" className='pr-10'>
              <div className='relative inline-flex flex-col font-light shadow-lg rounded-lg w-80 group my-10'>
                <div className='w-full h-40 overflow-hidden rounded-t-lg group-hover:transform group-hover:scale-120 transition-transform'>
                  <img
                    src={tourImg}
                    alt='Travel Image'
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='text-gray-700 p-4'>
                  <div className='pb-3 flex justify-between items-center'>
                    <label className='text-gray-500 text-lg uppercase'>
                      Bondhu Travel
                    </label>
                    <label className='text-gray-500 text-lg uppercase'>
                      20-08-2023
                    </label>
                  </div>
                  <h1 className='text-xl break-all leading-tight overflow-hidden max-h-14 relative bg-white'>
                    Cox's Bazar
                  </h1>
                  <div className='flex items-center mt-4'>
                    <div className='inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-1 px-2 rounded-full'>
                      <span className='text-xs'>4.3</span>
                      <i className='material-icons text-xs ml-1'>star</i>
                    </div>
                    <div className='text-gray-500 ml-2'>(371 Reviews)</div>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'>3</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                      <span className='font-light text-2xl text-gray-400'>
                        /
                      </span>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'> 2</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className=' flex items-center gap-[6px]'>
                      <span className='w-[16px] font-light'>
                        <svg
                          className='font-light icon flat-color'
                          fill='#000000'
                          width='24px'
                          height='24px'
                          viewBox='0 0 0.72 0.72'
                          id='taka'
                          data-name='Flat Color'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            id='primary'
                            d='M0.559 0.364A0.117 0.117 0 0 0 0.491 0.301a0.03 0.03 0 0 0 -0.019 0.057 0.055 0.055 0 0 1 0.033 0.076L0.452 0.553A0.08 0.08 0 0 1 0.3 0.52V0.36h0.06a0.03 0.03 0 0 0 0 -0.06H0.3V0.18A0.12 0.12 0 0 0 0.18 0.06a0.03 0.03 0 0 0 0 0.06 0.06 0.06 0 0 1 0.06 0.06V0.3H0.18a0.03 0.03 0 0 0 0 0.06h0.06v0.161a0.14 0.14 0 0 0 0.267 0.057L0.559 0.459a0.117 0.117 0 0 0 0 -0.095Z'
                          />
                        </svg>
                      </span>
                      <p className='text-2xl'>3500</p>
                    </div>
                  </div>
                </div>
                <button className='w-10 h-10 hidden absolute top-4 right-4  bg-white text-gray-500 rounded-full shadow-md group-hover:inline-block'>
                  <span className='button-favorite-hover flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      fill='currentColor'
                    >
                      <path d='M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z'></path>
                    </svg>
                  </span>
                </button>
              </div>
            </Link>
            <Link to="/listing-detail" className='pr-10'>
              <div className='relative inline-flex flex-col font-light shadow-lg rounded-lg w-80 group my-10'>
                <div className='w-full h-40 overflow-hidden rounded-t-lg group-hover:transform group-hover:scale-120 transition-transform'>
                  <img
                    src={tourImg}
                    alt='Travel Image'
                    className='w-full h-full object-cover object-top'
                  />
                </div>
                <div className='text-gray-700 p-4'>
                  <div className='pb-3 flex justify-between items-center'>
                    <label className='text-gray-500 text-lg uppercase'>
                      Bondhu Travel
                    </label>
                    <label className='text-gray-500 text-lg uppercase'>
                      20-08-2023
                    </label>
                  </div>
                  <h1 className='text-xl break-all leading-tight overflow-hidden max-h-14 relative bg-white'>
                    Cox's Bazar
                  </h1>
                  <div className='flex items-center mt-4'>
                    <div className='inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-1 px-2 rounded-full'>
                      <span className='text-xs'>4.3</span>
                      <i className='material-icons text-xs ml-1'>star</i>
                    </div>
                    <div className='text-gray-500 ml-2'>(371 Reviews)</div>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'>3</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                      <span className='font-light text-2xl text-gray-400'>
                        /
                      </span>
                      <div className='flex items-center '>
                        <span className='font-light text-2xl'> 2</span>{' '}
                        <span className='w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                            fill='currentColor'
                          >
                            <path d='M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className=' flex items-center gap-[6px]'>
                      <span className='w-[16px] font-light'>
                        <svg
                          className='font-light icon flat-color'
                          fill='#000000'
                          width='24px'
                          height='24px'
                          viewBox='0 0 0.72 0.72'
                          id='taka'
                          data-name='Flat Color'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            id='primary'
                            d='M0.559 0.364A0.117 0.117 0 0 0 0.491 0.301a0.03 0.03 0 0 0 -0.019 0.057 0.055 0.055 0 0 1 0.033 0.076L0.452 0.553A0.08 0.08 0 0 1 0.3 0.52V0.36h0.06a0.03 0.03 0 0 0 0 -0.06H0.3V0.18A0.12 0.12 0 0 0 0.18 0.06a0.03 0.03 0 0 0 0 0.06 0.06 0.06 0 0 1 0.06 0.06V0.3H0.18a0.03 0.03 0 0 0 0 0.06h0.06v0.161a0.14 0.14 0 0 0 0.267 0.057L0.559 0.459a0.117 0.117 0 0 0 0 -0.095Z'
                          />
                        </svg>
                      </span>
                      <p className='text-2xl'>3500</p>
                    </div>
                  </div>
                </div>
                <button className='w-10 h-10 hidden absolute top-4 right-4  bg-white text-gray-500 rounded-full shadow-md group-hover:inline-block'>
                  <span className='button-favorite-hover flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      fill='currentColor'
                    >
                      <path d='M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z'></path>
                    </svg>
                  </span>
                </button>
              </div>
            </Link>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TourCardSlider;
