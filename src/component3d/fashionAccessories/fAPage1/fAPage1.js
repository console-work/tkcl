'use client'

import { useEffect, useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import Image from 'next/image';

const FAPage1 = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1024);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleDivs = [
    {
      id: 1,
      text: "fashion Accessories",
      text2: "01 JAN, 2023",
      imageUrl: "/img/Fashion Accessories.webp",
      imageUrl2: "/img/3d/slider/view.webp",
    },
  ];

  useEffect(() => {
    setHasMounted(true);
    setScreenWidth(window.innerWidth);
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
    if (!hasMounted) return [];
    const startIndex = currentIndex === 0 ? visibleDivs.length - 1 : currentIndex - 1;
    return [visibleDivs[startIndex]];
  };

  if (!hasMounted) return null; // avoid hydration mismatch

  return (
    <div>
      <div className="2xl:container mx-auto my-1">
        {getVisibleDivs().map((div) => (
          <div className="relative" key={div.id}>
             <div className="relative w-full h-[250px] sm:h-[500px] xl:h-[800px]">
  <Image
    src={div.imageUrl}
    alt={div.text}
    fill
    className="object-cover"
    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1280px"
    priority
  />
</div>
            <div className="flex justify-between">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAPage1;
