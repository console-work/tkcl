'use client';
import { useState, useEffect } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import Image from 'next/image';

const EVPage3 = () => {
  const [visibleDivs, setVisibleDivs] = useState([

    {
      id: 2,
      text: 'YOUR PROJECT TITLE',
      text2: '01 JAN, 2023',
      imageUrl: '/img/3d/slider/exterior archviz 2.webp',
      imageUrl2: '/img/3d/slider/view.webp',
    }
  
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    // Let hydration complete first
    setClientReady(true);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === visibleDivs.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? visibleDivs.length - 1 : prev - 1
    );
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === visibleDivs.length - 1;

  if (!clientReady) return null; // avoid hydration mismatch

  return (
    <div>
      <div className="2xl:container mx-auto my-1">
        {visibleDivs.length > 0 && (
          <div className="relative" key={visibleDivs[currentIndex].id}>
            {/* Main Image */}
            <div className="w-full h-full 2xl:h-[800px] relative evPageImgResponsive">
              <Image
                src={visibleDivs[currentIndex].imageUrl}
                alt={visibleDivs[currentIndex].text}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Navigation Buttons */}
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

            {/* Optional Caption */}
            {/* <div className="flex justify-center items-center gap-3 absolute bottom-0 md:bottom-8 left-[15%]">
              <div className="w-8 md:w-16 relative h-8 md:h-16">
                <Image src={visibleDivs[currentIndex].imageUrl2} alt="preview" fill />
              </div>
              <div>
                <p className="font-semibold text-base md:text-2xl text-black">
                  {visibleDivs[currentIndex].text}{" "}
                  <span className="text-green-500 font-light">|</span>
                </p>
              </div>
              <div>
                <p className="text-[9px] md:text-base text-black">
                  {visibleDivs[currentIndex].text2}
                </p>
              </div>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default EVPage3;
