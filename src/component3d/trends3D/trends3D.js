// import { useState } from "react";

// import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
// import { Link } from "react-router-dom";
// import Heading from "../Heading/Heading";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { LocalDataFor3D } from "../../localData/localData";
// const Trends3D = () => {
//   const [visibleDivs, setVisibleDivs] = useState(LocalDataFor3D);
//   // const [visibleDivs, setVisibleDivs] = useState([
//   //   {
//   //     id: 1,
//   //     text: "Photography Tips for Beginners",
//   //     text2: "01 JAN, 2023",
//   //     button: "Read More",
//   //     imageUrl: "/img/3d/3d-blog-1.webp",
//   //   },
//   //   {
//   //     id: 2,
//   //     text: "Top 8 Food Photography Tips For Beginners",
//   //     button: "Read More",
//   //     text2: "01 JAN, 2023",
//   //     imageUrl: "/img/3d/3d-blog-2.webp",
//   //   },
//   //   {
//   //     id: 3,
//   //     text: "Easy Product Photography Solutions for Small Business",
//   //     button: "Read More",
//   //     text2: "01 JAN, 2023",
//   //     imageUrl: "/img/3d/3d-blog-3.webp",
//   //   },
//   // ]);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === visibleDivs.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? visibleDivs.length - 1 : prevIndex - 1
//     );
//   };

//   const getVisibleDivs = () => {
//     const endIndex =
//       currentIndex + 1 >= visibleDivs.length ? 0 : currentIndex + 1;
//     const middleIndex = currentIndex;
//     const startIndex =
//       currentIndex === 0 ? visibleDivs.length - 1 : currentIndex - 1;

//     return window.screen.width <= 767
//       ? [visibleDivs[startIndex]]
//       : window.screen.width <= 1025
//         ? [visibleDivs[startIndex], visibleDivs[middleIndex]]
//         : [
//           visibleDivs[startIndex],
//           visibleDivs[middleIndex],
//           visibleDivs[endIndex],
//         ];
//   };

//   return (
//     <div id="3d-trends" className="pt-4">
//       <Heading className="pt-5 pb-12 " titleClassName="w-[500px]" title="3D TRENDS" />
//       <div className="container mx-auto">
//         <div className="flex justify-center items-center gap-5 ">
//           <button aria-label="prev-btn" onClick={handlePrev}>
//             <MdArrowBackIosNew className="text-3xl -mt-16" />
//           </button>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-2  w-[280px] sm:w-full">
//             {getVisibleDivs() &&
//               getVisibleDivs().map((div, index) => (
//                 <Link  aria-label="blog"  key={index} to={`/3d/industry-trends-details/${div.id}`}>
//                   {/* Wrap the div with Link component */}
//                   <div className="flex-col items-center justify-center">
//                     <div className="h-auto md:h-[220px] xl:h-[280px] flex">
//                       <img 
//                         className="w-full min-h-full"
//                         src={div.thumb}
//                         alt={div.title}
//                       />
//                       {/* <LazyLoadImage
//                         className=" w-full min-h-full"
//                         src={div.thumb}
//                         alt={div.title}
//                         effect="blur" /> */}
//                     </div>
//                     <div className="flex flex-col items-center gap-2 pt-5 pb-10">
//                       <div className="flex justify-center items-center gap-2 ">
//                         <p className="text-[12px] font-semibold">
//                           {div.title}  | <span className="text-[10px] font-normal">{div.date}</span>
//                         </p>
//                         {/* <p className="text-[9px] w-[70px]">{div.date}</p> */}
//                       </div>
//                       <button className="bg-[#B1CC40] px-6 py-1 rounded-3xl font-semibold text-[10px]">
//                         {/* {div.button} */}
//                         Read More
//                       </button>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//           <button aria-label="next-btn" onClick={handleNext}>
//             <MdArrowForwardIos className="text-3xl -mt-16" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trends3D;
