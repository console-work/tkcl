// import React, { useState } from 'react';
'use client'
import  Link  from 'next/link';
import Heading from "../heading/heaDing";
import { LazyLoadImage } from "react-lazy-load-image-component";
const VisualizationSliderStatic = () => {
  return (
    <div className="bg-[#f1f4ed] py-3">
      <Heading
        className="pt-12 pb-10"
        titleClassName="w-[1500px]"
        title="ARCHITECTURAL VISUALIZATION"
      />
      <div className="2xl:container mx-auto">
        <div className="flex flex-col md:flex-row justify-items-center justify-center ">
          <Link aria-label="Interior visualization" href="/interior-visualization">
            <div className="  mx-2 cursor-pointer ">
              <div>
                <img
                  src="/img/3d/slider/IV.webp"
                  className="w-full h-full object-cover "
              />
                {/* <LazyLoadImage
                  src="/img/3d/slider/IV.webp"
                  className="w-full h-full object-cover "
                  effect="blur" /> */}
              </div>
              <div className="w-full flex gap-3 pt-2 justify-center ">
                <h2 className="text-black font-semibold">
                  INTERIOR VISUALIZATION
                </h2>
                <img alt='view' loading="lazy" className="h-6 z-30" src="/img/3d/slider/view.webp" />
              </div>
            </div>
          </Link>
          <Link aria-label="Exterior visualization" href="/exterior-visualization">
            <div className=" mx-2 cursor-pointer">
              <div>
                <img
                  src="/img/3d/slider/EV.webp"
                  className="w-full h-full object-cover "
                />
                {/* <LazyLoadImage
                  src="/img/3d/slider/EV.webp"
                  className="w-full h-full object-cover "
                  effect="blur" /> */}
              </div>
              <div className="w-full flex gap-3  justify-center pt-2 ">
                <h2 className="text-black font-semibold">
                  EXTERIOR VISUALIZATION
                </h2>
                <img alt='view' loading="lazy" className="h-6 z-30" src="/img/3d/slider/view.webp" />
              </div>
            </div>
          </Link>
          <Link aria-label="Interior visualization" href="/interior-visualization">
            <div className=" mx-2 cursor-pointer">
              <div>
                <img
                  src="/img/3d/slider/VR.webp"
                  className="w-full h-full object-cover opacity-90"
                />
                {/* <LazyLoadImage
                  src="/img/3d/slider/VR.webp"
                  className="w-full h-full object-cover opacity-90"
                  effect="blur" /> */}
              </div>
              <div className="w-full flex gap-3 justify-center pt-2 ">
                <h2 className="text-black font-semibold">VR RENDERING</h2>
                <img alt='view' loading="lazy" className="h-6 z-30" src="/img/3d/slider/view.webp" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisualizationSliderStatic;
