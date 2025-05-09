'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const EVPage4 = () => {
  const [visibleDivs, setVisibleDivs] = useState([
 
    {
      id: 2,
      text: "YOUR PROJECT TITLE",
      text2: "01 JAN, 2023",
      imageUrl: "/img/3d/slider/exterior archviz 1.webp",
      imageUrl2: "/img/3d/slider/view.webp",
    }
  
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth); // Update screen width after client-side load
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
    if (screenWidth <= 641) {
      return [visibleDivs[currentIndex]];
    }
    if (screenWidth <= 1025) {
      return [visibleDivs[currentIndex]];
    }
    return [visibleDivs[currentIndex]];
  };

  return (
    <div>
      <div className="2xl:container mx-auto">
        {getVisibleDivs() &&
          getVisibleDivs().map((div) => (
            <div className="relative" key={div.id}>
              <div className="evPageImgResponsive">
                <Image
                  src={div.imageUrl}
                  alt={div.text}
                  layout="responsive"
                  width={800} // Adjust width
                  height={600} // Adjust height
                  className="w-full h-full 2xl:h-[800px] object-cover"
                />
              </div>
              {/* <div className="flex justify-between ">
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

export default EVPage4;
