'use client'

import React from 'react';
import Image from 'next/image';

const StartPage = () => {
    return (
        <div className='bg-[url("/img/3d/bg-2.webp")] overflow-hidden bg-cover min-h-screen 2xl:h-[600px] pb-20 pt-32 md:pb-0 md:pt-0 flex justify-center items-center'>
            <div className='container mx-auto'>
                <div className='flex relative justify-center px-2 md:px-0'>
                    <div className='relative z-10'>
                        <h3 className='text-5xl text-[80px] md:text-[95px] leading-[60px] font-bold md:leading-[80px]'>
                            PACKAGING
                        </h3>
                        {/* <h3 className='text-5xl text-[50px] md:text-[60px] md:leading-[85px] pb-4 text-[#8abc8b] font-bold'>VISUALIZATION</h3> */}
                        <Image 
                            alt="green-ball" 
                            className='absolute -top-[70px] md:-top-[50px] -right-[65px] w-[120px]' 
                            src='/img/3d/Green-Ball.png' 
                            width={120} 
                            height={120} 
                            loading="lazy"
                        />
                    </div>
                    <Image
                        alt='ev'
                        className='absolute left-0 -top-[150px] md:-top-[170px] xl:-top-[180px] 2xl:-top-[250px] h-[360px] md:h-auto w-[360px] md:w-[500px] xl:w-[600px] 2xl:w-[700px] z-9'
                        src='/img/3d/EV.webp'
                        width={700} 
                        height={700}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default StartPage;
