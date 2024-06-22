'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@core-ui';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { track } from '@vercel/analytics';

const purpose = ['Developer', 'Student', 'Recruiter', 'Employer'];

const WelcomePrompt = () => {
  const [showChild, setShowChild] = useState(false);
  const [selectedValue, setSelected] = useState('');

  // Wait until after client-side hydration to show
  useEffect(() => {
    const getCookie = (cname: string) => {
      const name = cname + '=';
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    };

    if (!getCookie('visited')) {
      setShowChild(true);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!showChild) {
    return null;
  }

  const handleChange = (item: string) => {
    setSelected(item);
    track('Visitor', { type: item });
  };

  const handleClick = () => {
    setShowChild(false);
    document.body.style.overflow = 'auto';
    document.cookie = 'visited=true';
    document.cookie = `visitor_type=${selectedValue}`;
  };

  return (
    <motion.dialog
      open={false}
      className="fixed top-0 h-full w-full z-50 bg-[rgba(21,21,21,0.5)] backdrop-blur-sm grid place-items-center"
    >
      <div className="bg-white w-[90%] h-[90%] md:h-auto md:w-[40%] rounded-md shadow-md grid grid-rows-[40%_1fr] grid-cols-1 md:grid-rows-1 md:grid-cols-[40%_1fr] ">
        <div className="h-full w-full relative border-inherit">
          <Image
            src={'/images/preview.png'}
            alt="preview"
            className="!h-full object-fill rounded-t-md md:rounded-l-md md:rounded-tr-none"
            fill
          />
        </div>
        <div className="p-6">
          <div className="grid justify-center text-center w-full px-4 mb-8">
            <span className="text-2xl">Welcome to Proboard</span>
          </div>
          <div>
            <p>Select what describes you</p>
            <div className="mt-4">
              {purpose.map((item) => (
                <span
                  key={item}
                  className={`mr-2 border-2 py-2 px-4 border-black inline-block rounded-full mb-4 cursor-pointer hover:bg-secondary hover:text-white hover:border-white ${
                    selectedValue === item
                      ? 'bg-secondary border-secondary text-white'
                      : ''
                  }`}
                  role="button"
                  onClick={() => handleChange(item)}
                >
                  {item}
                </span>
              ))}
            </div>
            <span className="my-2 text-sm block">
              Unlock a better experience: Your input enhances our Proboard app
              for you!
            </span>
          </div>
          <div className="my-4 grid place-content-end">
            <Button
              className="bg-secondary text-white !px-10 h-[44px] rounded-full text-lg disabled:bg-secondary/20 disabled:border disabled:hover:shadow-none disabled:text-gray-600"
              disabled={Boolean(selectedValue === '')}
              onClick={handleClick}
            >
              Okay
            </Button>
          </div>
        </div>
      </div>
    </motion.dialog>
  );
};

export default WelcomePrompt;
