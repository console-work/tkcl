'use client';

import React from 'react';
import Image from 'next/image';
import Heading from '../heading/heaDing';

const Visualization = () => {
    return (
        <div className='bg-[#f4f6f0] py-8'>
            <div className='2xl:container 2xl:mx-auto'>
                <div className='flex justify-end'>
                    <div className="relative w-[80%] md:w-[60%] h-auto">
                        <Image
                            src="/img/3d/aav.svg"
                            alt="Architectural Visualization"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            priority={true}
                        />
                    </div>
                </div>
            </div>
            <Heading
                className="pt-12 pb-7"
                titleClassName="w-[1500px]"
                title="ARCHITECTURAL VISUALIZATION"
            />
        </div>
    );
};

export default Visualization;
