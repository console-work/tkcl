'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const FPage1 = () => {
  const [visibleDivs, setVisibleDivs] = useState([
    {
      id: 1,
      text: 'furniture',
      text2: '01 JAN, 2023',
      imageUrl: '/img/Furniture.webp',
      imageUrl2: '/img/3d/slider/view.webp',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false); // to check if it's running on the client side

  // Set client flag on mount to prevent window-related code from running on the server
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === visibleDivs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? visibleDivs.length - 1 : prevIndex - 1
    );
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === visibleDivs.length - 1;

  const getVisibleDivs = () => {
    if (!isClient) return []; // return empty array if not client-side

    const startIndex = currentIndex === 0 ? visibleDivs.length - 1 : currentIndex - 1;

    return window.innerWidth <= 641
      ? [visibleDivs[startIndex]]
      : window.innerWidth <= 1025
      ? [visibleDivs[startIndex]]
      : [visibleDivs[startIndex]];
  };

  return (
    <div>
      <div className="2xl:container mx-auto my-1">
        {getVisibleDivs() &&
          getVisibleDivs().map((div) => (
            <div className="relative" key={div.id}>
              <div>
                <Image
                   className="object-cover w-full h-auto" // responsive এবং cover mode
                  src={div.imageUrl}
                  alt={div.text}
                  width={800} // Set the width for optimization
                  height={800} // Set the height for optimization
                  priority
                />
              </div>
              {/* <div className="flex justify-between">
                {!isPrevDisabled && (
                  <button onClick={handlePrev}>
                    <MdArrowBackIosNew className="text-4xl text-white bg-[#574F45] rounded-full p-1 absolute left-[10%] top-[50%]" />
                  </button>
                )}
                {!isNextDisabled && (
                  <button onClick={handleNext}>
                    <MdArrowForwardIos className="text-4xl text-white bg-[#574F45] rounded-full p-1 absolute right-[10%] top-[50%]" />
                  </button>
                )}
              </div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FPage1;
