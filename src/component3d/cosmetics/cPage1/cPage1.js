"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const CPage1 = () => {
  const [visibleDivs] = useState([
    {
      id: 1,
      text: "YOUR PROJECT TITLE",
      text2: "01 JAN, 2023",
      imageUrl: "/img/Cosmetics-update.webp",
      imageUrl2: "/img/3d/slider/view.webp",
    },
    // Add more if needed
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [clientOnlyDivs, setClientOnlyDivs] = useState([]);

  useEffect(() => {
    const startIndex =
      currentIndex === 0 ? visibleDivs.length - 1 : currentIndex - 1;

    const filteredDivs =
      window.innerWidth <= 1025
        ? [visibleDivs[startIndex]]
        : [visibleDivs[startIndex]];

    setClientOnlyDivs(filteredDivs);
  }, [currentIndex, visibleDivs]);

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

  return (
    <div>
      <div className="2xl:container mx-auto my-1">
        {clientOnlyDivs.map((div) => (
          <div className="relative" key={div.id}>
            <div className="relative w-full h-[300px] sm:h-[400px] xl:h-[800px]">
              <Image
                src={div.imageUrl}
                alt={div.text}
                fill
                className="object-content"
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
        ))}
      </div>
    </div>
  );
};

export default CPage1;
