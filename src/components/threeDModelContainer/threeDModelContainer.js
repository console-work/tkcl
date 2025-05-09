'use client'
import React, { Suspense, lazy } from "react";
// import ViewModel from '../ViewModel/ViewModel';
import  Link  from "next/link";
import Image from "next/image";
import holosnap  from '../../../public/img/Holosnap-Logo_H_Color.webp'
// import ShoeModel from '../../component3d/ProductVisualization3d/Furniture/Model/ShoeModel';

// const ShoeModel = lazy(() =>
//   import("../../component3d/ProductVisualization3d/Furniture/Model/ShoeModel")
// );

const ThreeDModelContainer = () => {
  return (
    <>
      <div className="py-10 w-full bg-gray-200 flex items-center">
        <div className="container mx-auto ">
          <div className="flex lg:flex-row flex-col gap-1 items-center justify-center">
            <div className="flex flex-col md:flex-row justify-center justify-items-center items-center gap-5  md:gap-10 w-full  px-16">
              <div className="mb-10">
              <div className="relative w-full h-full">
  <Image
    src={holosnap}
    alt="Holosnap Logo"
   
    className="object-contain"
    sizes="100vw"
    priority={false} // or remove to enable default lazy loading
  />
</div>
              </div>

              <div className="flex flex-col justify-items-center md:pt-10 items-center">
              <p className="text-black text-justify">
              HoloSnap is an innovative software that transforms ordinary images into detailed 3D models with ease. Using advanced AI and computer vision, HoloSnap extracts depth and spatial data from photos, allowing users to create lifelike 3D representations without the need for complex modeling skills. Ideal for designers, architects, game developers, and 3D enthusiasts, HoloSnap streamlines the process of turning 2D visuals into immersive, interactive 3D models. Whether for virtual reality, augmented reality, or digital content creation, HoloSnap offers a powerful and user-friendly solution for 3D modeling from images. 
              </p>
              <div className="flex justify-center mt-3 md:mt-6 mb-5 md:mb-0">
                <Link aria-label="contact-us" href="/contact-us">
                  <button className="text-xs   md:text-sm font-semibold text-white px-6 py-2 bg-[#7C9C30] rounded-3xl">
                    Explore Holosnap
                  </button>
                </Link>
              </div>
              </div>
            </div>
            
            {/* <div className='h-[320px] md:h-[500px] w-full md:w-[570px]'>
                            <Suspense fallback={<div className='flex justify-center  items-center'>
                               
                                <img loading="lazy" className='md:mt-16 md:ml-2' src='/img/shoeLogo.webp' />
                            </div>}>
                                <ShoeModel />
                            </Suspense>
                            
                        </div> */}
          </div>
          
        </div>
       
      </div>
    </>
  );
};

export default ThreeDModelContainer;
