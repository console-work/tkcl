'use client'
import Image from 'next/image'; // Import Image from Next.js
import order1 from "../../images/order1.png";
import order2 from "../../images/order2.png";
import order3 from "../../images/order3.png";
import order4 from "../../images/order4.png";
import order5 from "../../images/order5.png";
import order6 from "../../images/order6.png";
import arrow from "../../assets/arrow.png";
import arrow3 from "../../images/arrow3.png";
import Heading2D from "../../component3d/heading/heading2D";

const OrderGuide = () => {
  return (
    <div className="bg-white" id="order-guide">
      <div className="2xl:container mx-auto commonContainer">
        <div className="flex justify-center w-full transition-all duration-300">
          <video
            id="productVideo"
            width="100%"
            height="auto"
            playsInline autoPlay muted loop
          >
            <source src="/video/A4Tech_Headphone_Animation_3.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <div className="pt-5 pb-5">
        <Heading2D
          className="pt-6 pb-7"
          titleClassName="w-[800px]"
          title="ORDER GUIDE"
        />
      </div>

      <div className="container mx-auto commonContainer commonContainerOrder">
        <div className="pt-7 pb-10">
          <div className="grid grid-cols-2 mr-5 gap-6 sm:grid-cols-3 sm:px-16 sm:gap-12 lg:grid-cols-4 xl:grid-cols-6 lg:gap-8 lg:px-16 xl:px-4 justify-items-center">
            <div className="bg-[#B1CC40] w-[140px] h-[130px] p-3 rounded-md border-2 border-white shadow-lg relative">
              <div>
                <Image
                  alt="order-1"
                  src={order1}
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="border-b-2 border-white w-16 pb-2 mb-1 text-white font-semibold text-[16px] pt-2">
                STEP 1:
              </h3>
              <h5 className="text-[10px] font-semibold">Sign In</h5>
              <div className="absolute -top-[15px] -left-[14px] w-[190px]">
                <Image
                  alt="arrow"
                  src={arrow}
                  width={190}
                  height={40}
                />
              </div>
            </div>
            <div className="bg-[#B1CC40] w-[140px] h-[130px] p-3 rounded-md border-2 border-white shadow-lg relative">
              <div>
                <Image
                  alt="order-2"
                  src={order2}
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="border-b-2 border-white w-16 pb-2 mb-1 text-white font-semibold text-[16px] pt-2">
                STEP 2:
              </h3>
              <h5 className="text-[10px] font-semibold">Choose your</h5>
              <h5 className="text-[10px] font-semibold">preferred subscription plan</h5>
              <div className="absolute -top-[15px] -left-[14px] w-[190px]">
                <Image
                  alt="arrow"
                  src={arrow}
                  width={190}
                  height={40}
                />
              </div>
            </div>
            <div className="bg-[#B1CC40] w-[140px] h-[130px] p-3 rounded-md border-2 border-white shadow-lg relative">
              <div>
                <Image
                  alt="order-3"
                  src={order3}
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="border-b-2 border-white w-16 pb-2 mb-1 text-white font-semibold text-[16px] pt-2">
                STEP 3:
              </h3>
              <h5 className="text-[10px] font-semibold">Go to your</h5>
              <h5 className="text-[10px] font-semibold">account to place an order</h5>
              <div className="absolute -top-[15px] -left-[14px] w-[190px]">
                <Image
                  alt="arrow"
                  src={arrow}
                  width={190}
                  height={40}
                />
              </div>
            </div>
            <div className="bg-[#B1CC40] w-[140px] h-[130px] p-3 rounded-md border-2 border-white shadow-lg relative">
              <div>
                <Image
                  alt="order-4"
                  src={order4}
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="border-b-2 border-white w-16 pb-2 mb-1 text-white font-semibold text-[16px] pt-2">
                STEP 4:
              </h3>
              <h5 className="text-[10px] font-semibold">Upload your</h5>
              <h5 className="text-[10px] font-semibold">images you want us to edit</h5>
              <div className="absolute -top-[15px] -left-[14px] w-[190px]">
                <Image
                  alt="arrow"
                  src={arrow}
                  width={190}
                  height={40}
                />
              </div>
            </div>
            <div className="bg-[#B1CC40] w-[140px] h-[130px] p-3 rounded-md border-2 border-white shadow-lg relative">
              <div>
                <Image
                  alt="order-5"
                  src={order5}
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="border-b-2 border-white w-16 pb-2 mb-1 text-white font-semibold text-[16px] pt-2">
                STEP 5:
              </h3>
              <h5 className="text-[10px] font-semibold">The best photo editor</h5>
              <h5 className="text-[10px] font-semibold">process the photos for you</h5>
              <div className="absolute -top-[15px] -left-[14px] w-[190px]">
                <Image
                  alt="arrow"
                  src={arrow}
                  width={190}
                  height={40}
                />
              </div>
            </div>
            <div className="bg-[#B1CC40] w-[140px] h-[130px] p-3 rounded-md border-2 border-white shadow-lg relative">
              <div>
                <Image
                  alt="order-6"
                  src={order6}
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="border-b-2 border-white w-16 pb-2 mb-1 text-white font-semibold text-[16px] pt-2">
                STEP 6:
              </h3>
              <h5 className="text-[10px] font-semibold">Download the edited photos</h5>
              <div className="absolute -top-[15px] -left-[14px] w-[164px]">
                <Image
                  alt="arrow"
                  src={arrow3}
                  width={164}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderGuide;
