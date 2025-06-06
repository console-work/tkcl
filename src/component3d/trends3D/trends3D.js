'use client';

import { useState, useEffect } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';
import Heading from '../heading/heaDing';
import blog3DData from '../../../public/data/blog3D.json';
import Image from 'next/image';

const Trends3D = () => {
  const [visibleDivs, setVisibleDivs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(1920); // Default value

  // Prepare blog data with slugs
  useEffect(() => {
    const prepared = blog3DData
      .filter((item) => item?.title && item?.thumb) // Avoid broken entries
      .map((item) => ({
        ...item,
        title: item.title.trim(),
        thumb: item.thumb.trim(),
        slug: item.title
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, ''),
      }));
      
    setVisibleDivs(prepared);
  }, []);

  // Set screen width safely (avoids SSR window error)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
    }
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

  const getVisibleDivs = () => {
    if (!visibleDivs.length) return [];

    const endIndex =
      currentIndex + 1 >= visibleDivs.length ? 0 : currentIndex + 1;
    const middleIndex = currentIndex;
    const startIndex =
      currentIndex === 0 ? visibleDivs.length - 1 : currentIndex - 1;

    return screenWidth <= 767
      ? [visibleDivs[startIndex]]
      : screenWidth <= 1025
      ? [visibleDivs[startIndex], visibleDivs[middleIndex]]
      : [
          visibleDivs[startIndex],
          visibleDivs[middleIndex],
          visibleDivs[endIndex],
        ];
  };

  return (
    <div id="3d-trends" className="pt-4">
      <Heading className="pt-5 pb-12" titleClassName="w-[500px]" title="3D TRENDS" />
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-5">
          <button aria-label="prev-btn" onClick={handlePrev}>
            <MdArrowBackIosNew className="text-3xl -mt-16" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-2 w-[280px] sm:w-full">
            {getVisibleDivs().map((div, index) =>
              div?.slug ? (
                <Link key={index} href={`/blog/${div.slug}`} aria-label="3D Blog Detail">
                  <div className="flex-col items-center justify-center cursor-pointer">
                    <div className="h-auto md:h-[220px] xl:h-[280px] flex relative">
                      <Image
                        className="w-full min-h-full"
                        src={div.thumb}
                        alt={div.title}
                        width={500}  // You can adjust width and height based on your design
                        height={280} // Adjust as needed
                        loading="lazy"
                      />
                      <span className="text-[10px] font-normal blogposterdate">{div.date}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 pt-5 pb-10">
                      <div className="flex justify-center items-center gap-2">
                        <h3 className="text-[12px] font-semibold">
                          {div.title} 
                        </h3>
                      </div>
                      <button className="bg-[#B1CC40] px-6 py-1 rounded-3xl font-semibold text-[10px]">
                        Read More
                      </button>
                    </div>
                  </div>
                </Link>
              ) : null
            )}
          </div>

          <button aria-label="next-btn" onClick={handleNext}>
            <MdArrowForwardIos className="text-3xl -mt-16" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trends3D;
