'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const EVPage2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenReady, setScreenReady] = useState(false);

  const visibleDivs = [
    {
      id: 1,
      text: "YOUR PROJECT TITLE",
      text2: "01 JAN, 2023",
      imageUrl: "/img/3d/slider/exterior archviz 4.webp",
      imageUrl2: "/img/3d/slider/view.webp",
    },
   
   
  ];

  useEffect(() => {
    setScreenReady(true); // Hydration-safe trigger
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

  if (!screenReady) return null; // Prevent hydration mismatch

  return (
    <div>
      <div className="2xl:container mx-auto my-1">
        <div className="relative" key={visibleDivs[currentIndex].id}>
          <div className="w-full h-full 2xl:h-[800px] relative evPageImgResponsive">
            <Image
              src={visibleDivs[currentIndex].imageUrl}
              alt={visibleDivs[currentIndex].text}
              fill
              className="object-cover"
              sizes="100vw"
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
      </div>
    </div>
  );
};

export default EVPage2;
