'use client'
import Image from 'next/image';
import logo1 from "../../assets/16,500+.png";
import logo2 from "../../assets/365-Days.png";
import logo3 from "../../assets/12-Hours.png";
import logo4 from "../../assets/10+.png";

const BottomPart = () => {
  return (
    <div className="pt-20 md:pt-4">
      <div className="container mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 sm:px-32 sm:gap-8 md:grid-cols-4 md:px-10 lg:px-20 xl:px-52 justify-items-center">
         
          <div className="bg-white w-[140px] p-6 rounded-md shadow-slate-400 shadow-md relative">
            <h3 className="border-b-2 border-[#B1CC40] pb-4 mb-1 font-semibold">50,000+</h3>
            <h3 className="text-[12px] font-semibold">Images</h3>
            <h3 className="text-[12px] font-semibold">Processed Daily</h3>
            <div className="absolute top-[37px] -left-[35px]">
              <Image alt="logo" className="w-[60px]" src={logo1} width={60} height={60} />
            </div>
          </div>

          <div className="bg-white w-[140px] p-6 rounded-md shadow-slate-400 shadow-md relative">
            <h3 className="border-b-2 border-[#B1CC40] pb-4 mb-1 font-semibold">365 Days</h3>
            <h3 className="text-[12px] font-semibold">Dedicated</h3>
            <h3 className="text-[12px] font-semibold">Customer Support</h3>
            <div className="absolute top-[37px] -left-[35px]">
              <Image alt="logo" className="w-[60px]" src={logo2} width={60} height={60} />
            </div>
          </div>

          <div className="bg-white w-[140px] p-6 rounded-md shadow-slate-400 shadow-md relative">
            <h3 className="border-b-2 border-[#B1CC40] pb-4 mb-1 font-semibold">12 Hours</h3>
            <h3 className="text-[12px] font-semibold">or Less</h3>
            <h3 className="text-[12px] font-semibold">Delivery Time</h3>
            <div className="absolute top-[37px] -left-[35px]">
              <Image alt="logo" className="w-[60px]" src={logo3} width={60} height={60} />
            </div>
          </div>

          <div className="bg-white w-[140px] p-6 rounded-md shadow-slate-400 shadow-md relative">
            <h3 className="border-b-2 border-[#B1CC40] pb-4 mb-1 font-semibold">10</h3>
            <h3 className="text-[12px] font-semibold">Free</h3>
            <h3 className="text-[12px] font-semibold">Trial Images</h3>
            <div className="absolute top-[37px] -left-[35px]">
              <Image alt="logo" className="w-[60px]" src={logo4} width={60} height={60} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BottomPart;
