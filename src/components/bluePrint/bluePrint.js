
'use client'
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";


const BluePrint = () => {
    return (
        <div>
            <div className='flex justify-center gap-7 mb-5 '>
                <div className='w-[80px] sm:w-[400px] border-b border-[#7C9C30]'></div>
                <h2 className='text-[28px] md:text-[40px] -mb-2 md:-mb-4 font-bold'>2D BLUE PRINT</h2>
                <div className='w-[80px] sm:w-[400px] border-b border-[#7C9C30]'></div>
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

                    <p className='text-xs md:text-sm text-justify px-4 md:px-[30px]'>{`The KOW Company always ensures that things are kept clear and efficient when it comes to managing assets. We focus on being transparent for our clients, making sure you always have an easy and clear insight into what’s going on. We use the latest technology and reliable systems to make things easy, providing clients with full insight into how we handle asset management. Clients can easily check the status, use, and performance of their assets with detailed reports and real-time monitoring. `}</p>



                </div>

            </div>
        </div>
    );
};

export default BluePrint;