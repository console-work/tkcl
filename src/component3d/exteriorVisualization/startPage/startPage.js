'use client'
import Image from 'next/image';
import React from 'react';

const StartPage = () => {
    return (
        <div className='bg-[url("/img/3d/bg-2.webp")] overflow-hidden bg-cover min-h-screen 2xl:h-[600px] pb-20 pt-32 md:pb-0 md:pt-0 flex justify-center items-center'>
            <div className='container mx-auto'>
            <div className='flex relative justify-center px-2 md:px-0'>
      <div className='relative z-10'>
        <h3 className='text-5xl text-[80px] md:text-[95px] leading-[60px] font-bold md:leading-[80px]'>
          EXTERIOR
        </h3>
        <h3 className='text-5xl text-[50px] md:text-[60px] md:leading-[85px] pb-4 text-[#8abc8b] font-bold'>
          VISUALIZATION
        </h3>

        {/* Green Ball Image */}
        <div className="absolute -top-[70px] md:-top-[50px] -right-[65px] w-[120px]">
          <Image
            src='/img/3d/Green-Ball.png'
            alt="green-ball"
            layout="intrinsic"
            width={120}  // Adjust the width based on your design
            height={120} // Adjust the height based on your design
            priority={true} // Optional, if you want to preload the image
          />
        </div>
      </div>

      {/* EV Image */}
      <div className="absolute left-0 -top-[150px] md:-top-[170px] xl:-top-[180px] 2xl:-top-[250px] z-9">
        <Image
          src='/img/3d/EV.webp'
          alt="ev"
          layout="intrinsic"
          width={700}  // Adjust the width based on your design
          height={500} // Adjust the height based on your design
          className="w-[360px] md:w-[500px] xl:w-[600px] 2xl:w-[700px]"
          priority={true} // Optional, if you want to preload the image
        />
      </div>
    </div>
            </div>
        </div>
    );
};

export default StartPage;