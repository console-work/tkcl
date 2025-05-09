'use client';

import { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

const IVPage2 = () => {
  const [visibleDivs, setVisibleDivs] = useState([
    
    
    {
      id: 3,
      text: "YOUR PROJECT TITLE",
      text2: "01 JAN, 2023",
      imageUrl: "/img/3d/slider/PERSIAN BLUE COOL SUNRISE COMPACT ECOMMERCE .webp",
      imageUrl2: "/img/3d/slider/view.webp",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Run only on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === visibleDivs.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? visibleDivs.length - 1 : prev - 1));
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === visibleDivs.length - 1;

  if (!isClient) return null; // Prevent hydration error

  const currentItem = visibleDivs[currentIndex];

  return (
    <div className="2xl:container mx-auto mb-2">
      <div className="relative" key={currentItem.id}>
        <div className="relative w-full h-[400px] md:h-[600px] 2xl:h-[800px]">
          <Image
            src={currentItem.imageUrl}
            alt={currentItem.text}
            fill
            priority
            className="object-cover"
            sizes="100vw"
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
  );
};

export default IVPage2;
