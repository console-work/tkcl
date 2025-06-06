'use client'

import { useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Image from 'next/image';

const PackPage1 = () => {
  const [visibleDivs, setVisibleDivs] = useState([
    {
      id: 1,
      text: "YOUR PROJECT TITLE",
      text2: "01 JAN, 2023",
      imageUrl: "/img/Packaging.webp",
      imageUrl2: "/img/3d/slider/view.webp",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial window width
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener
    };
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

  // Function to determine if next button should be disabled
  const isNextDisabled = currentIndex === visibleDivs.length - 1;

  const getVisibleDivs = () => {
    if (windowWidth <= 641) {
      return [visibleDivs[currentIndex]];
    }
    return [visibleDivs[currentIndex]];
  };

  return (
    <div>
      <div className="2xl:container mx-auto my-1">
        {getVisibleDivs().map((div) => (
          <div className="relative" key={div.id}>
            <div>
              <Image
                className="w-full h-full 2xl:h-[800px]"
                src={div.imageUrl}
                alt={div.text}
                width={800}
                height={800}
                layout="responsive"
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

export default PackPage1;
