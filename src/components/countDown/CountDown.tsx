'use client';
import { useState, useEffect } from 'react';

const DealCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-10-31T23:59:59'); // Example expiry date
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=' flex gap-4 items-center'>
      <div className=' flex flex-col gap-2  items-center border border-gray-400 p-2 px-4 rounded-lg flex-wrap'>
        <span className='font-semibold text-2xl'>{timeLeft.days}</span>
        <span className=''>days</span>
      </div>
      <div className=' flex flex-col gap-2  items-center border border-gray-400 p-2 px-4 rounded-lg'>
        <span className='font-semibold text-2xl'>{timeLeft.hours}</span>
        <span>hours</span>
      </div>
      <div className=' flex flex-col gap-2  items-center border border-gray-400 p-2 px-4 rounded-lg'>
        <span className='font-semibold text-2xl'>{timeLeft.minutes}</span>
        <span>minutes</span>
      </div>
      <div className=' flex flex-col gap-2  items-center border border-gray-400 p-2 px-4 rounded-lg'>
        <span className='font-semibold text-2xl'>{timeLeft.seconds}</span>
        <span>seconds</span>
      </div>
    </div>
  );
};

export default DealCountdown;
