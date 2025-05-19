
"use client";
import Image from "next/image";
import  Link  from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Integration = () => {
    return (
        <div id="integration" className="pb-16">
            <div className='flex justify-center gap-10 mt-6 mb-16 md:my-16'>
                <h2 className='w-[400px] border-b border-[#7C9C30]'></h2>
                <h2 className='text-[28px] md:text-[40px] -mb-2 md:-mb-4 font-bold'>INTEGRATION</h2>
                <h2 className='w-[400px] border-b border-[#7C9C30]'></h2>
            </div>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-2 '>
                    <div>
                        {/* <img loading="lazy" src={integration1}
                            width={270}
                            alt='integration photo'
                            className='shadow-gray-500 shadow-lg'
                        /> */}
<Image
  src="/img/integration1.webp"
  alt="integration photo"
  width={270}
  height={0}  
  className="shadow-gray-500 shadow-lg h-auto"
/>
                    </div>
                    <div>
                        {/* <img loading="lazy" src={integration2}
                            width={300}
                            alt='integration photo'
                            className='shadow-gray-500 shadow-lg'
                        /> */}
                        {/* <LazyLoadImage
                            src={"/img/integration2.webp"}
                            width={300}
                            alt='integration photo'
                            className='shadow-gray-500 shadow-lg'
                            // effect="blur"
                        /> */}
                        <Image
  src="/img/integration2.webp"
  alt="integration photo"
  width={300}
  height={0}  
  className="shadow-gray-500 shadow-lg"
/>
                    </div>
                    <div>
                        {/* <img loading="lazy" src={integration3}
                            width={270}
                            alt='integration photo'
                            className='shadow-gray-500 shadow-lg'
                        /> */}
                        {/* <LazyLoadImage
                            src={"/img/integration3.webp"}
                            width={270}
                            alt='integration photo'
                            className='shadow-gray-500 shadow-lg'
                            // effect="blur"
                        /> */}
                                              <Image
  src="/img/integration3.webp"
  alt="integration photo"
  width={270}
  height={0}  
  className="shadow-gray-500 shadow-lg h-auto"
/>
                    </div>
                </div>

                <div className="mt-10">

                    <p className='text-xs text-center md:text-sm px-[54px]'>{`In an era where innovative collaborations are the key to unlocking outstanding success, we're thrilled to introduce a groundbreaking partnership between Covision Media, Nureg GMBH, and The KOW Company. This powerful trio combines different realms of expertise to offer an unmatched 3D content production experience. Witness the future as Covision Media's AI-powered scanners, NUREG GmbH's unrivaled expertise in content production and photography studio services, and The KOW Company's post-production magic come together! `}</p>
                    <p className='text-xs md:text-sm text-center mt-5 mb-10 px-[52px] '>{`From the beginning to perfection, we are pushing boundaries, breaking limits, and shaping the future with every polygon. `}</p>
                    <div className='flex justify-center'>
                        <h3 className="block">
                        <Link href="/integrations-and-partnership" aria-label="intergration-btn" className='text-xs md:text-sm font-semibold text-white px-6 py-2 bg-[#7C9C30] rounded-3xl'>
                            Explore the 3D Content Production Solution
                        </Link>
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Integration;