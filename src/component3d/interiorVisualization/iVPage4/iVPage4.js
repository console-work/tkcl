'use client';

import { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

const IVPage4 = () => {
  const [visibleDivs] = useState([
    {
      id: 1,
      text: "YOUR PROJECT TITLE",
      text2: "01 JAN, 2023",
      imageUrl: "/img/3d/slider/THE MINIMALIST WARM SUNSET LUXRIOUS.webp",
      imageUrl2: "/img/3d/slider/view.webp",
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this code runs only on the client
    setIsClient(true);
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

  if (!isClient) return null; // Prevent hydration mismatch

  const currentDiv = visibleDivs[currentIndex];

  return (
    <div className="2xl:container mx-auto">
      <div className="relative" key={currentDiv.id}>
        <div className="relative w-full h-[400px] md:h-[600px] 2xl:h-[800px]">
          <Image
            src={currentDiv.imageUrl}
            alt={currentDiv.text}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* <div className="flex justify-between">
          <button onClick={handlePrev}>
            <MdArrowBackIosNew className="text-4xl text-white bg-[#574F45] rounded-full p-1 absolute left-[10%] top-[50%]" />
          </button>
          <button onClick={handleNext}>
            <MdArrowForwardIos className="text-4xl text-white bg-[#574F45] rounded-full p-1 absolute right-[10%] top-[50%]" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default IVPage4;
