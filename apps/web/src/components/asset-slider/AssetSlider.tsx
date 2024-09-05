'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Key, useState } from 'react';

const AssetSlider = ({ assets }: any) => {
  const [showModal, setShowModal] = useState(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true
  };

  return (
    <Modal
      showModal={showModal}
      setShowModal={() => setShowModal((state) => !state)}
    >
      <div
        className="mb-8 container"
        onClick={() => setShowModal((state) => !state)}
      >
        <Slider {...settings} >
          {assets?.map((asset: any, index: Key) => {
            if (asset?.contentType.includes('video')) {
              return (
                <video
                  controls
                  muted
                  autoPlay
                  className="w-full h-[500px] object-fit object-center"
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
                  <img
                    alt={''}
                    src={asset?.url}
                    key={index}
                    className="!w-screen md:w-full h-[500px] object-contain"
                  />
              );
            }
            return null;
          })}
        </Slider>
      </div>
    </Modal>
  );
};

const Modal = ({ showModal, setShowModal, children }: any) => {
  if (!showModal) return children;

  return (
    <div
      id="modalContainer"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 "
      onClick={setShowModal}
    >
      {children}
    </div>
  );
};

export default AssetSlider;
