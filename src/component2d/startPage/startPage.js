'use client'
import { useState } from "react";
import BottomPart from "./bottomPart";
import Link from "next/link";
import Image from "next/image"; // Importing next/image for optimized images

const StartPage = () => {
  const [playBool, setPlayBool] = useState(false);

  const playVideo = () => {
    setPlayBool(true);
    const video = document.getElementById("productVideo");
    video.play();
  };

  return (
    <div className="bg-[#DEE2E2] pt-2 pb-6 ">
      <div className="container mx-auto commonContainer">
        <div className="flex flex-col md:flex-row gap-0 md:gap-20 justify-between justify-items-center items-center  pt-[50px] md:pt-0">
          <div className=" h-80">
            <p className="text-[40px] text-center md:text-left">WE DO</p>
            <h1 className="border-b border-[#B1CC40] text-[40px] text-center md:text-left font-semibold -mt-4">
              IMAGE & VIDEO EDITING
            </h1>
            <h2 className="pt-5 text-[#959595] font-semibold">
              YOUR ONE-STOP CONTENT POST PRODUCTION SOLUTION
            </h2>
            <div className="pt-5 flex justify-center md:justify-start">
              <div className="rounded-3xl bg-white w-[260px] flex justify-between px-1 ">
                <Link aria-label="Free Trial" href="/contact-us">
                  <button className="bg-[#B1CC40] my-1 px-8 py-1 font-semibold rounded-3xl text-[13px]">
                    Free Trial
                  </button>
                </Link>
                <Link aria-label="Free Quote" href="/contact-us">
                  <button className=" my-2 px-10 rounded-3xl font-semibold text-[13px]">
                    Free Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="">
            <div className="relative h-full md:h-[515px] w-full flex justify-center">
              <div>
                {/* Replaced the regular <img> tag with <Image> from Next.js */}
                <Image
                  src={"/img/headphone.webp"} // Image source
                  alt="Headphone"
                  width={500} // width for optimization
                  height={300} // height for optimization
                  layout="intrinsic" // Maintain aspect ratio
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomPart />
    </div>
  );
};

export default StartPage;
