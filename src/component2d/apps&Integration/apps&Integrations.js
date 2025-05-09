'use client';

import Image from 'next/image';
import Link from 'next/link';

const Integrations = () => {
  return (
    <div className="pt-10" id="apps">
      <div className="bg-[#B1CC40] pb-20 pt-20">
        <div className="pt-5 pb-20">
          <div className="relative border border-white">
            <h2 className="absolute flex -top-[12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#B1CC40] px-12 py-1 text-3xl md:text-4xl text-kow-text-black text-center font-bold">
                {`APPS & INTEGRATION`}
              </span>
            </h2>
          </div>
        </div>
        <div className="container mx-auto commonContainer">
          <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-12">
            <Link href="https://shopify.thekowcompany.com/Account/Login" target="_blank" rel="noreferrer">
              <div className="w-[140px] lg:w-[180px] cursor-pointer">
                <Image
                  src="/img/Apps/shopify_white.webp"
                  alt="shopify"
                  width={180}
                  height={180}
                  loading="lazy"
                />
              </div>
            </Link>
            <Link href="https://app.thekowcompany.com/Identity/Account/Login?ReturnUrl=%2F" target="_blank" rel="noreferrer">
              <div className="w-[140px] lg:w-[180px] cursor-pointer">
                <Image
                  src="/img/Apps/The-KOW-Company_white.webp"
                  alt="The KOW Company"
                  width={180}
                  height={180}
                  loading="lazy"
                />
              </div>
            </Link>
            <Link href="https://www.nureg.de/" target="_blank" rel="noreferrer">
              <div className="w-[140px] lg:w-[180px] cursor-pointer">
                <Image
                  src="/img/Apps/nureg_white.webp"
                  alt="nureg"
                  width={180}
                  height={180}
                  loading="lazy"
                />
              </div>
            </Link>
            <Link href="https://www.covisionmedialab.com/en" target="_blank" rel="noreferrer">
              <div className="w-[140px] lg:w-[180px] cursor-pointer">
                <Image
                  src="/img/Apps/covision-lab_white .webp"
                  alt="covision"
                  width={180}
                  height={180}
                  loading="lazy"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
