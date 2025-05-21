'use client'
import Image from 'next/image';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ServiceList = ({ icon, title, description, divider = false }) => {
    return (
        <div className='flex flex-col md:flex-row items-center md:items-end justify-center gap-7 md:gap-32'>
            {divider && <div className='w-[90%] md:w-[2px] h-[2px] md:h-20 bg-gradient-to-t from-[#4f9e75]  to-[#cddcc8]'></div>}
            <div className='flex flex-col justify-center items-center '>
                <div>
                <Image 
                src={icon} 
                alt="service icon" 
                className="w-full h-full" 
                width={500}  // Set a specific width for optimization
                height={500} // Set a specific height for optimization
            />
                    {/* <LazyLoadImage
                        src={icon} alt='service icon'
                        effect="blur" /> */}
                </div>
                <div className='flex flex-col items-center md:gap-5'>
                    <h3 style={{fontWeight:'500',textAlign:'center'}}>{title}</h3>
                    <p className='w-[150px] text-center'>{description}</p>
                </div>
            </div>
            {divider && <div className='w-[90%] md:w-[2px] h-[2px] md:h-20 bg-gradient-to-t from-[#4f9e75]  to-[#cddcc8]'></div>}
        </div>
    );
};

export default ServiceList;