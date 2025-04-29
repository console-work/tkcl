// 'use client'
// import  Link  from "next/link";


// // import { MdOutlineArrowForwardIos,MdOutlineArrowBackIos  } from "react-icons/md";

// const IndustryTrends = () => {
//   return (
//     <div id="trends">
//       <div className="flex justify-center gap-7 mb-5">
//         <h1 className="w-[50px] sm:w-[400px] border-b border-[#7C9C30]"></h1>
//         <h1 className="text-[28px] md:text-[40px] -mb-2 md:-mb-4 text-center font-bold">
//           INDUSTRY TRENDS
//         </h1>
//         <h1 className="w-[50px] sm:w-[400px] border-b border-[#7C9C30]"></h1>
//       </div>
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:px-28 md:grid md:grid-cols-2  justify-items-center justify-center gap-3 pt-10 md:pt-20 ">
//           <Link  aria-label="2d industry trends" className="flex w-full flex-col" href={"/blog/tag/2d"}>
//             <div className="relative">
//             <div className="flex flex-col justify-center overflow-hidden w-full md:h-[210px] xl:h-[270px] 2xl:h-[320px] relative">
//                 {/* <img className="w-full md:w-full md:h-auto lg:w-full lg:h-auto h-auto" loading="lazy"  src={LocalDataFor2D[0].thumb} alt="trends photo" /> */}

//                 <div className="absolute flex gap-2 items-end right-0 bottom-0">
//                   <h1 className="text-white text-[26px]">2D</h1>
//                   <h1 className="w-[110px]  border-b border-white mb-[10px]"></h1>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-items-center pt-5 gap-3">
//                   <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center gap-3 ">
//                   <h1 className="text-sm">
//                  {LocalDataFor2D[0].title} | <span className="text-xs">{LocalDataFor2D[0].date}</span>
//                   </h1>
//                   </div>
//                   <div className="flex justify-center items-center">
//                     <h2
//                       className="text-xs font-medium text-white px-12 py-1 bg-[#7C9C30] rounded-3xl"
//                     >
//                       See More
//                     </h2>
//                   </div>
//               </div>
//               {/* <MdOutlineArrowBackIos className='absolute left-0 font-semibold bottom-20 text-white text-2xl'/> */}
//             </div>
//           </Link>
//           <Link aria-label="3d industry trends" href={"/blog/tag/3d"} className="flex flex-col w-full">
//             <div className="relative ">
//               <div className="flex flex-col justify-center overflow-hidden w-full md:h-[210px] xl:h-[270px] 2xl:h-[320px] relative">
//                 {/* <img className="w-full md:w-full md:h-auto lg:w-full lg:h-auto h-auto" loading="lazy" src={LocalDataFor3D[0].thumb} alt="trends photo" /> */}

//                 <div className="absolute flex gap-2 items-end right-0 bottom-0">
//                   <h1 className="text-white text-[26px]">3D</h1>
//                   <h1 className="w-[110px]  border-b border-white mb-[12px] "></h1>
//                 </div>
//               </div>

//               {/* <MdOutlineArrowForwardIos className='absolute right-0 font-semibold bottom-20 text-white text-2xl' /> */}
//               <div className="flex flex-col justify-items-center pt-5 gap-3">
//                 <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center gap-3 ">
//                   <h1 className="text-sm">
//                     {LocalDataFor3D[0].title} | <span className="text-xs">{LocalDataFor3D[0].date}</span>
//                   </h1>
//                 </div>
//                 <div className="flex justify-center items-center">
//                   <h2
//                     className="text-xs font-medium text-white px-12 py-1 bg-[#7C9C30] rounded-3xl"
//                   >
//                     See More
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustryTrends;

'use client';
import Link from 'next/link';

// Import JSON data for 2D and 3D blogs
import LocalDataFor2D from '../../../public/data/blog2D.json';
import LocalDataFor3D from '../../../public/data/blog3D.json';

const IndustryTrends = () => {
  // Function to sort data by date in descending order
  const sortByDate = (data) => {
    return data.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  // Get the latest 2D and 3D blog entries
  const latest2DBlog = sortByDate(LocalDataFor2D)[0];
  const latest3DBlog = sortByDate(LocalDataFor3D)[0];

  return (
    <div id="trends">
      {/* Header Section */}
      <div className="flex justify-center gap-7 mb-5">
        <h1 className="w-[50px] sm:w-[400px] border-b border-[#7C9C30]"></h1>
        <h1 className="text-[28px] md:text-[40px] -mb-2 md:-mb-4 text-center font-bold">
          INDUSTRY TRENDS
        </h1>
        <h1 className="w-[50px] sm:w-[400px] border-b border-[#7C9C30]"></h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:px-28 md:grid md:grid-cols-2 justify-items-center justify-center gap-3 pt-10 md:pt-20">
          {/* 2D Trends Section */}
          {latest2DBlog && (
            <Link aria-label="2d industry trends" className="flex w-full flex-col" href="/blog/tag/2d">
              <div className="relative">
                {/* Image Container */}
                <div className="flex flex-col justify-center overflow-hidden w-full md:h-[210px] xl:h-[270px] 2xl:h-[320px] relative">
                  <img
                    className="w-full h-full object-cover"
                    src={latest2DBlog.thumb}
                    alt={`${latest2DBlog.title} thumbnail`}
                  />
                  <div className="absolute flex gap-2 items-end right-0 bottom-0">
                    <h1 className="text-white text-[26px]">2D</h1>
                    <h1 className="w-[110px] border-b border-white mb-[10px]"></h1>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-items-center pt-5 gap-3">
                  <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center gap-3">
                    <h1 className="text-sm">
                      {latest2DBlog.title} |{' '}
                      <span className="text-xs">{latest2DBlog.date}</span>
                    </h1>
                  </div>
                  <div className="flex justify-center items-center">
                    <h2 className="text-xs font-medium text-white px-12 py-1 bg-[#7C9C30] rounded-3xl">
                      See More
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* 3D Trends Section */}
          {latest3DBlog && (
            <Link aria-label="3d industry trends" href="/blog/tag/3d" className="flex flex-col w-full">
              <div className="relative">
                {/* Image Container */}
                <div className="flex flex-col justify-center overflow-hidden w-full md:h-[210px] xl:h-[270px] 2xl:h-[320px] relative">
                  <img
                    className="w-full h-full object-cover"
                    src={latest3DBlog.thumb}
                    alt={`${latest3DBlog.title} thumbnail`}
                  />
                  <div className="absolute flex gap-2 items-end right-0 bottom-0">
                    <h1 className="text-white text-[26px]">3D</h1>
                    <h1 className="w-[110px] border-b border-white mb-[12px]"></h1>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-items-center pt-5 gap-3">
                  <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center gap-3">
                    <h1 className="text-sm">
                      {latest3DBlog.title} |{' '}
                      <span className="text-xs">{latest3DBlog.date}</span>
                    </h1>
                  </div>
                  <div className="flex justify-center items-center">
                    <h2 className="text-xs font-medium text-white px-12 py-1 bg-[#7C9C30] rounded-3xl">
                      See More
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustryTrends;