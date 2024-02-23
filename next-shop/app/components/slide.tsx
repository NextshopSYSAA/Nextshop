'use client'
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


const images = [
  {
    src: 'https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-52..v1696534815.jpg',
    alt: 'Description for image 1',
  },
  {
    src: 'https://pckumar.in/wp-content/uploads/2022/08/custom-pc-bangalore-e1659900405493-1024x525.jpeg',
    alt: 'Description for image 2',
  },
  {
    src: 'https://johnlewis.scene7.com/is/image/JohnLewis/mobiles-nav-card-apple2-200323',
    alt: 'Description for image 3',
  },
];
interface Image{
  images:[]
  src:string;
  alt:string
}

import React from 'react'

const Slide = ({images:Array}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  return (
    <div className="h-[21.5rem] w-[58.75rem]  ml-16 mt-12 py-1 px-1 relative ">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full h-full  bg-center bg-cover duration-500 flex overflow-hidden rounded-lg m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <img
                  key={image.index}
                  src={image.src}
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Slide


 