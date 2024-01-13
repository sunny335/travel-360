import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosGlobe, IoMdSearch, IoMdPerson } from 'react-icons/io';
import logo from '../assets/travel-logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  const user = false;
  const [active, setActive] = useState(0);
  const menus = [
    'Home',

    'Destinations',

    'Offers',

  ];
  return (
    <div className=' absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10'>
      <Link to='/' className='  flex items-center gap-2 font-medium tracking-[4px]'>
        <img className='max-w-[160px] w-full' src={logo}alt="" srcset="" />
      </Link>
      <ul className=' flex flex-wrap items-center gap-3 text-base md:gap-10'>
        {menus.map((menu, index) => {
          return (
            <motion.li
              layout
              key={index}
              className={` ${
                active == index && ' border-b-2 border-b-yellow-500'
              } inline-block cursor-pointer  border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2  hover:text-white`}
            >
              {menu}
            </motion.li>
          );
        })}
        <div className=' flex items-center gap-6'>
          <div className='flex items-center border-[2px] border-yellow-500 rounded-lg  h-[40px] w-[250px] pr-1 pl-2 text-yellow-500 text-xl py-1'>
            <input className='bg-transparent focus:outline-none max-w-[220px] w-full' type="search" />
            <button className='bg-yellow-500 h-[30px] max-w-[30px] w-full rounded-md flex justify-center items-center'>
                  <IoMdSearch className=' text-lg text-white' />
         </button>
         </div>
          <div>
            {
              user ? <IoMdPerson className=' text-lg ' /> : <div className='flex items-center justify-center gap-6'>

                <Link to='sign-in' className='flex justify-center items-center uppercase bg-yellow-500 h-[40px] w-[100px] text-base hover:border-[2px] hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500'>Signin</Link>
                <Link to='sign-up' className='flex justify-center items-center uppercase border-[2px] border-yellow-500  text-yellow-500 w-[100px] h-[40px] text-base hover:bg-yellow-500 hover:text-white'>signup</Link>
              </div>
            }
         </div>
        </div>
      </ul>
    </div>
  );
};

export default Header;
