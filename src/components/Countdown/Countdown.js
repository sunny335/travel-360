// Countdown.js
import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDown = new Date('01/25/2024').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      setDays(Math.floor(distance / day));
      setHours(Math.floor((distance % day) / hour));
      setMinutes(Math.floor((distance % hour) / minute));
      setSeconds(Math.floor((distance % minute) / second));

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex h-[106px]'>
      <div className='bg-slate-500 py-2 px-8 text-white relative z-[1] after:z-[2] after:absolute after:w-10 after:right-[-10px] after:rotate-45 after:h-10 after:top-[30%] after:bg-slate-500 '>
        <p className='uppercase text-center text-sm'>DEPARTURE ON</p>
        <p className='uppercase text-center'>
          <span className='text-lg'>25 jan</span> <br />
          <span className='text-4xl'>2024</span>
        </p>
      </div>
      <div className='bg-gray-200 py-2  px-10 rounded-sm max-w-fit w-full'>
        <div id='countdown' className='flex flex-col justify-center items-center'>
          <div className='flex  justify-center items-center gap-8  h-auto'>
            <div>
              <p className='text-center text-4xl font-light' id='days'>
                {days}
              </p>
              <p className='text-center text-lg '>Days</p>
            </div>
            <div>
              <p className='text-center text-4xl font-light' id='hours'>
                {hours}
              </p>
              <p className='text-center text-lg'>Hours</p>
            </div>
            <div>
              <p className='text-center text-4xl font-light' id='minutes'>
                {minutes}
              </p>
              <p className='text-center text-lg'>Minutes</p>
            </div>
            <div>
              <p className='text-center text-4xl font-light' id='seconds'>
                {seconds}
              </p>
              <p className='text-center text-lg'>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
