'use client'
import  Link  from 'next/link';

const MegaMenu = () => {
  return (
    // <div className="h-[350px] w-full bg-[#DBE5D8]">
    //   <div className="">
    //     <div className="flex justify-center">
    //       <div className="flex flex-col  pt-20 relative">
    //         <h1 className="w-[1px] h-[40px] bg-[#AF8E56] absolute top-[40px] left-[70px]"></h1>
    //         <h1 className="w-[350px] h-[1px] bg-[#AF8E56]"></h1>
    //         <div className="flex justify-between ">
    //         <div className="flex flex-col items-center w-full gap-2 absolute top-[80px] left-[-174px]">
    //             <h1 className="w-[1px] h-[40px] bg-[#AF8E56]"></h1>
    //             <div className="relative">
    //               <div className="flex    gap-3 absolute top-[-3px] left-[-9px] ">
    //                 <div className=" w-5 h-5 border flex justify-center items-center border-[#D3B270] rounded-full">
    //                   <h1 className="w-[10px] h-[10px]  rounded-full bg-[#5BB55B]"></h1>
    //                 </div>
    //                 <div>
    //                   <p className="text-[14px] w-[300px] mb-3 -mt-[4px] font-semibold">
    //                   ARCHITECTURAL VISUALIZATION
    //                   </p>

    //                   <div className="flex flex-col gap-1 text-xs">
    //                     <Link>Visualization</Link>
    //                     <Link>Exterior Visualization</Link>
    //                     <Link>VR Rendering</Link>

    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex flex-col items-center w-full gap-2 absolute top-[80px] left-[175px]">
    //             <h1 className="w-[1px] h-[40px] bg-[#D3B270]"></h1>
    //             <div className="relative">
    //               <div className="flex    gap-3 absolute top-[-3px] left-[-9px] ">
    //                 <div className=" w-5 h-5 border flex justify-center items-center border-[#D3B270] rounded-full">
    //                   <h1 className="w-[10px] h-[10px]  rounded-full bg-[#5BB55B]"></h1>
    //                 </div>
    //                 <div>
    //                   <p className="text-[14px] w-[300px] mb-3 -mt-[4px] font-semibold">
    //                     PRODUCT VISUALIZATION
    //                   </p>

    //                   <div className="flex flex-col gap-1 text-xs">
    //                     <Link>Furnitures</Link>
    //                     <Link>Fashion Accessories</Link>
    //                     <Link>Cosmetics</Link>
    //                     <Link>Packaging</Link>
    //                     <Link>Tech Equipments</Link>
    //                     <Link>Tech Accessories</Link>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="w-[350px] relative ">
        <div className="flex flex-col  pt-20 relative">
          <h1 className="w-[1px] h-[40px] bg-[#AF8E56] absolute top-[40px] left-[70px]"></h1>
          <h1 className="w-[350px] h-[1px] bg-[#AF8E56]"></h1>
          <div className="flex justify-between ">
            <div className="flex flex-col items-center w-full gap-2 absolute top-[80px] left-[-174px]">
              <h1 className="w-[1px] h-[40px] bg-[#AF8E56]"></h1>
              <div className="relative">
                <div className="flex gap-3 absolute top-[-3px] left-[-9px] ">
                  <div className=" w-5 h-5 border flex justify-center items-center border-[#D3B270] rounded-full">
                    <h1 className="w-[10px] h-[10px] rounded-full bg-[#5BB55B]"></h1>
                  </div>
                  <div className="text-left">
                    <p className="text-[14px] w-[300px] mb-3 -mt-[4px] font-semibold">
                      ARCHITECTURAL VISUALIZATION
                    </p>
                    <div className="flex flex-col gap-1 text-xs">
                      <p className="hover:text-[#AF8E56] hover:underline cursor-default">Visualization</p>
                      <Link aria-label="exterior visualization" className="hover:text-[#AF8E56] hover:underline" href="/exterior-visualization">Exterior Visualization</Link>
                      <Link aria-label="interior visualization" className="hover:text-[#AF8E56] hover:underline" href="/interior-visualization">Interior Visualization</Link>
                      <p className="hover:text-[#AF8E56] hover:underline cursor-default">VR Rendering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full gap-2 absolute top-[80px] left-[175px]">
              <h1 className="w-[1px] h-[40px] bg-[#D3B270]"></h1>
              <div className="relative">
                <div className="flex    gap-3 absolute top-[-3px] left-[-9px] ">
                  <div className=" w-5 h-5 border flex justify-center items-center border-[#D3B270] rounded-full">
                    <h1 className="w-[10px] h-[10px]  rounded-full bg-[#5BB55B]"></h1>
                  </div>
                  <div className="text-left">
                    <p className="text-[14px] w-[300px] mb-3 -mt-[4px] font-semibold">
                      PRODUCT VISUALIZATION
                    </p>

                    <div className="flex flex-col gap-1 text-xs">
                      <Link aria-label="furnitures" className="hover:text-[#AF8E56] hover:underline" href={"/furniture"}>Furnitures</Link>
                      <Link aria-label="fashion" className="hover:text-[#AF8E56] hover:underline" href={"/fashion-accessories"}>Fashion Accessories</Link>
                      <Link aria-label="cosmetics" className="hover:text-[#AF8E56] hover:underline" href={"/cosmetics"}>Cosmetics</Link>
                      <Link aria-label="packaging" className="hover:text-[#AF8E56] hover:underline" href={"/packaging"}>Packaging</Link>
                      <Link aria-label="tech Equipments" className="hover:text-[#AF8E56] hover:underline" href={"/tech-equipments"}>Tech Equipments</Link>
                      <Link aria-label="tech Accessories" className="hover:text-[#AF8E56] hover:underline" href={"/tech-accessories"}>Tech Accessories</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
