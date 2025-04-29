import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import Heading2D from "../../component3d/Heading/Heading2D";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { LocalDataFor2D } from "../../localData/localData2D";

const Blog2D = () => {
  const [visibleDivs2d, setVisibleDivs2d] = useState(LocalDataFor2D);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === visibleDivs2d.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? visibleDivs2d.length - 1 : prevIndex - 1
    );
  };

  const getVisibleDivs2d = () => {
    const endIndex =
      currentIndex + 1 >= visibleDivs2d.length ? 0 : currentIndex + 1;
    const middleIndex = currentIndex;
    const startIndex =
      currentIndex === 0 ? visibleDivs2d.length - 1 : currentIndex - 1;

    return window.screen.width <= 641
      ? [visibleDivs2d[startIndex]]
      : window.screen.width <= 1025
        ? [visibleDivs2d[startIndex], visibleDivs2d[middleIndex]]
        : [
          visibleDivs2d[startIndex],
          visibleDivs2d[middleIndex],
          visibleDivs2d[endIndex],
        ];
  };

  return (

    <div id="2d-trends" className="pt-8">
    
      <Heading2D
        className="pt-7 pb-12"
        titleClassName="w-[800px]"
        title="2D TRENDS"
      />
     <div className="container mx-auto">
        <div className="flex justify-center items-center gap-5 ">
          <button aria-label="prev-btn" onClick={handlePrev}>
            <MdArrowBackIosNew className="text-3xl -mt-16" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-2  w-[280px] sm:w-full">
            {getVisibleDivs2d() &&
              getVisibleDivs2d().map((div, index) => (
                <Link  aria-label="blog"  key={index} to={`/2d/industry-trends-details/${div.id}`}>
                  {/* Wrap the div with Link component */}
                  <div className="flex-col items-center justify-center">
                    <div className="h-auto md:h-[220px] xl:h-[280px] flex">
                      <img 
                        className="w-full min-h-full"
                        src={div.thumb}
                        alt={div.title}
                      />
                      {/* <LazyLoadImage
                        className=" w-full min-h-full"
                        src={div.thumb}
                        alt={div.title}
                        effect="blur" /> */}
                    </div>
                    <div className="flex flex-col items-center gap-2 pt-5 pb-10">
                      <div className="flex justify-center items-center gap-2 ">
                        <p className="text-[12px] font-semibold">
                          {div.title}  | <span className="text-[10px] font-normal">{div.date}</span>
                        </p>
                        {/* <p className="text-[9px] w-[70px]">{div.date}</p> */}
                      </div>
                      <button className="bg-[#B1CC40] px-6 py-1 rounded-3xl font-semibold text-[10px]">
                        {/* {div.button} */}
                        Read More
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <button aria-label="next-btn" onClick={handleNext}>
            <MdArrowForwardIos className="text-3xl -mt-16" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog2D;
