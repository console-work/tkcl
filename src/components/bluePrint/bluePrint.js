
'use client'
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";


const BluePrint = () => {
    return (
        <div>
            <div className='flex justify-center gap-7 mb-5 '>
                <h1 className='w-[80px] sm:w-[400px] border-b border-[#7C9C30]'></h1>
                <h1 className='text-[28px] md:text-[40px] -mb-2 md:-mb-4 font-bold'>2D BLUE PRINT</h1>
                <h1 className='w-[80px] sm:w-[400px] border-b border-[#7C9C30]'></h1>
            </div>
            <div className='container mx-auto pt-10 pb-10 md:pb-10'>
                <div className='flex  justify-center items-center  '>
                    <div>
                        {/* <img loading="lazy" src={tree} 
                        width={950}
                        alt='integration photo'
                        /> */}
                        {/* <LazyLoadImage
                            src={"/img/tree.webp"}
                            // width={950}
                            alt='integration photo'
                            className="w-full"
                            // effect="blur"
                        /> */}
                        <div className="w-full">
      <Image
        src="/img/tree.webp" // Make sure this path is correct
        alt="Integration photo"
        width={1600}
        height={900}
        className="w-full h-auto object-cover"
      />
    </div>
                    </div>

                </div>

                <div className="mt-10">

                    <p className='text-xs md:text-sm text-justify px-4 md:px-[30px]'>{`The KOW Company exemplifies a commitment to transparent and efficient asset management within the organization, fostering transparency for clients. Leveraging advanced technologies and robust systems, KOW ensures a seamless process that allows clients full visibility into asset management procedures. Through comprehensive reporting mechanisms and real-time tracking, clients can monitor the status, utilization, and performance of their assets.`}</p>



                </div>

            </div>
        </div>
    );
};

export default BluePrint;