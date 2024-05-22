'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Key } from 'react';

const AssetSlider = ({ assets }: any) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <div className='mb-8 w-full'>
    <Slider {...settings}>
      {assets?.map((asset: any, index: Key) => {
        if (asset?.contentType.includes('video')) {
          return (
            <video
              controls
              muted
              autoPlay
              className="w-full h-[500px] object-fit object-left"
              key={index}
            >
              <source src={asset?.url} type="video/mp4" />
              <source src={asset?.url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          );
        }

        if (asset?.contentType.includes('image')) {
          return (
            <Image
              width={800}
              height={400}
              alt={''}
              src={asset?.url}
              key={index}
              className='h-[400px] !w-full md:w-auto object-contain'
            />
          );
        }
        return null;
      })}
    </Slider>
    </div>
  );
};

export default AssetSlider;
