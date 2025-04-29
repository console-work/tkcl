'use client';
import { GoHomeFill } from "react-icons/go";
import logo from "../../images/logo3.png";
import { CgMenuGridO } from "react-icons/cg";
import  Link  from 'next/link';
import { useEffect, useRef, useState } from "react";

import { RiArrowDownSFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";



import MegaMenu from "./megaMenu";
import MegaNavbar from "./megaNavbar";


const Navbar3D = () => {
  const [getMenuBool, setMenuBool] = useState(false);
  const menuRef = useRef(null);
  const [showDiv, setShowDiv] = useState(false);
  const [showDivSubMenu, setShowDivSubMenu] = useState(false);
  const [activeSubChild, setActiveSubChild] = useState("");
  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };
  const toggleSubchild = (id) => {
    activeSubChild === id ? setActiveSubChild("") : setActiveSubChild(id);
  };

  const fileUrl = "/Creative-Showcase-ios.pdf"; // Update this path

  const openPDFInNewTab = () => {
    const newWindow = window.open(fileUrl, "_blank");
    if (newWindow) {
      // Create a simpler loader element
      const loader = document.createElement("div");
      loader.innerText = "Loading...";
      loader.className = "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded";
      newWindow.document.body.appendChild(loader);
  
      newWindow.onload = () => {
        // Remove the loader as soon as the new window's content is loaded
        newWindow.document.body.removeChild(loader);
  
        // Add the download button after the content is loaded
        const downloadButton = newWindow.document.createElement("button");
        downloadButton.innerText = "Download PDF";
        downloadButton.onclick = () => {
          const link = document.createElement('a');
          link.href = fileUrl;
          link.download = 'downloaded-file.pdf';
          link.click();
        };
        
      };
    }
  };
  
  
  // Assuming saveAs function is defined or imported from FileSaver.js
  // You can use FileSaver.js library to handle the saveAs function
  // <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
  

  return (
    <>
      <div className="relative z-50">
        {/* <div className="bg-[#DEE2E2] font-sans w-full min-h-screen m-0"> */}
        <div
          ref={menuRef}
          className={`fixed left-0 w-full top-0 z-[999] bg-[#DBE5D8] shadow-xl md:shadow-none  bg-[length:100%_100%] ${
            showDiv && `bg-[url("/img/3d/bg_3.webp")] h-[310px]`
          }  ${getMenuBool && `bg-[url("/img/3d/bg_3.webp")]`}`}
        >
          <MegaNavbar />
          <div className="container mx-auto ">
            <div className="hidden lg:flex items-center justify-between gap-3">
              <Link aria-label="Home" href={"/"}>
                <img
                  loading="lazy"
                  className="w-[80px] h-[45px]"
                  src={logo.src}
                  alt="logo"
                />
              </Link>
              {/* --------------------------------------For Large Screen------------------------------------------ */}
              {/* <div className="hidden md:flex sm:items-center md:gap-1 lg:gap-8 xl:gap-12"> */}
              <div className="flex gap-24 items-center relative">
                <button
                  onClick={toggleDiv}
                  className="relative text-gray-800 text-xl lg:text-sm font-medium flex gap-1 items-center"
                >
                  SERVICES
                  {/* <span><RiArrowDownSFill /></span> */}
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                  {showDiv && (
                    <div className="absolute w-full mt-4 -ml-1">
                      <MegaMenu />
                    </div>
                  )}
                </button>
                <Link
                  aria-label="3d-trends"
                  href="/3d#3d-trends"
                  className="text-gray-800 text-xl lg:text-sm font-medium"
                >
                  3D TRENDS
                </Link>
                <Link
                  aria-label="Contact-us"
                  href="/contact-us"
                  className="text-gray-800 text-xl lg:text-sm font-medium"
                >
                  CONTACT US
                </Link>
                
                <Link
                  aria-label="Contact-us"
                  href="/career"
                  // target="_blank"
                  className="text-gray-800 text-xl lg:text-sm font-medium"
                >
                  CAREER
                </Link>
                {/* <Link
                  aria-label="creative-showcase"
                  href={"/3d/creative-showcase"}
                  className="text-gray-800 text-xl lg:text-sm font-medium uppercase"
                >
                  Creative Showcase
                </Link> */}
                <Link
                  aria-label="Subscribe"
                  href={"/3d#subscribe"}
                  className="text-gray-800 text-xl lg:text-sm border-2 rounded-3xl px-4 py-1 border-[#7C9C30] font-medium"
                  rel="noreferrer"
                >
                  SUBSCRIBE
                </Link>
                <Link
                  aria-label="Book A Call"
                  href="/book-a-call"
                  className="text-gray-800 text-xl lg:text-sm border-2 rounded-3xl px-4 py-1 border-[#7C9C30] font-medium"
                  rel="noreferrer"
                >
                  Book A Call
                </Link>
                {/* <Link href="/" className="text-gray-800 text-[26px] lg:text-[32px]font-medium"><GoHomeFill />
                                </Link> */}
              </div>
            </div>

            <div className={`flex items-center justify-between lg:hidden`}>
              <Link aria-label="Home" href={"/"}>
                <img
                  loading="lazy"
                  src={logo}
                  width={80}
                  height={40}
                  alt="logo"
                />
              </Link>
              <CgMenuGridO
                onClick={() => setMenuBool(!getMenuBool)}
                className="text-[32px]  cursor-pointer"
              />
            </div>
          </div>
          {/* -----------------------------------For Mobile--------------------------------------- */}
          {getMenuBool && (
            <div className="block lg:hidden pt-2 ">
              <div className="container mx-auto">
                <div className="flex flex-col text-center gap-4">
                  <button
                    className={`flex flex-col group gap-1 transition-all duration-300 text-gray-800 text-base border-b-2 border-[#376f50] font-semibold hover:bg-[#376f50] hover:border-b-2 hover:border-[#7C9C30] hover:text-white ${
                      showDivSubMenu &&
                      `bg-[#376f50] border-b-2 border-[#7C9C30] text-white`
                    }`}
                  >
                    <sapn
                      onClick={() => setShowDivSubMenu(!showDivSubMenu)}
                      className="py-3 flex self-baseline mx-auto items-center w-full  justify-center"
                    >
                      SERVICES{" "}
                      <span>
                        <IoMdArrowDropdown />
                      </span>
                    </sapn>
                    {showDivSubMenu && (
                      <ul className="flex flex-col font-normal w-full bg-[#2f6246]">
                        <li
                          onClick={() => toggleSubchild("architectural")}
                          className="flex flex-col items-center justify-center"
                        >
                          <span className="py-3 flex items-center justify-center w-full">
                            ARCHITECTURAL VISUALIZATION{" "}
                            <span>
                              <IoMdArrowDropdown />
                            </span>
                          </span>
                          <ul
                            className={`bg-[#244a35] w-full flex flex-col ${
                              activeSubChild == "architectural"
                                ? "block"
                                : "hidden"
                            }`}
                          >
                            <li className="py-3 hover:bg-[#173123]">
                              <Link href={"/exterior-visualization"}>
                                Exterior Visualization
                              </Link>
                            </li>
                            <li className="py-3 hover:bg-[#173123]">
                              <Link href={"/interior-visualization"}>
                                Interior Visualization
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          onClick={() => toggleSubchild("product")}
                          className="flex flex-col items-center justify-center"
                        >
                          <span className="py-3 flex items-center justify-center w-full">
                            PRODUCT VISUALIZATION{" "}
                            <span>
                              <IoMdArrowDropdown />
                            </span>
                          </span>
                          <ul
                            className={`bg-[#244a35] w-full flex flex-col ${
                              activeSubChild == "product" ? "block" : "hidden"
                            }`}
                          >
                            <li className="py-3 hover:bg-[#173123]">
                              <Link href={"/furniture"}>Furnitures</Link>
                            </li>
                            <li className="py-3 hover:bg-[#173123]">
                              <Link href={"/fashion-accessories"}>
                                Fashion Accessories
                              </Link>
                            </li>
                            <li className="py-3 hover:bg-[#173123]">
                              <Link href={"/cosmetics"}>Cosmetics</Link>
                            </li>
                            <li className="py-3 hover:bg-[#173123]">
                              <Link href={"/packaging"}>Packaging</Link>
                            </li>
                            <li className="py-3 hover:bg-[#173123]">
                              <Link href={"/tech-equipments"}>
                                Tech Equipments
                              </Link>
                            </li>
                            <li className="py-3 hover:bg-[#173123]">
                              <Link href={"/tech-accessories"}>
                                Tech Accessories
                              </Link>
                            </li>
                          </ul>
                        </li>

                        {/* <li onClick={() => setActiveSubChild("product")} className="flex flex-col"><a href="" className="py-3 hover:bg-[#244a35]">PRODUCT VISUALIZATION</a></li> */}
                      </ul>
                    )}
                  </button>

                  <Link
                    aria-label="3d-trends"
                    onClick={() => setMenuBool(false)}
                    href="/3d#3d-trends"
                    className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#376f50] font-semibold py-3 hover:bg-[#376f50] hover:border-b-2 hover:border-[#7C9C30] hover:text-white"
                  >
                    3D TRENDS
                  </Link>
                  <Link
                    aria-label="Contact-us"
                    onClick={() => setMenuBool(false)}
                    href="/contact-us"
                    className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#376f50] font-semibold py-3 hover:bg-[#376f50] hover:border-b-2 hover:border-[#7C9C30] hover:text-white"
                  >
                    CONTACT US
                  </Link>
                  {/* {isIOS && (
                    <button
                      aria-label="Creative-Showcase"
                      onClick={openPDFInNewTab}
                      className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#376f50] font-semibold py-3 hover:bg-[#376f50] hover:border-b-2 hover:border-[#7C9C30] hover:text-white uppercase"
                    >
                      creative showcase
                    </button>
                  )}
                 {
                  !isIOS && (
                    <Link
                    aria-label="Creative-Showcase"
                    onClick={() => setMenuBool(false)}
                    href="/3d/creative-showcase"
                    className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#376f50] font-semibold py-3 hover:bg-[#376f50] hover:border-b-2 hover:border-[#7C9C30] hover:text-white"
                  >
                    CREATIVE SHOWCASE
                  </Link>
                 )} */}
                  <Link
                    aria-label="Subscribe"
                    onClick={() => setMenuBool(false)}
                    href={"/3d#subscribe"}
                    className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#376f50] font-semibold py-3 hover:bg-[#376f50] hover:border-b-2 hover:border-[#7C9C30] hover:text-white"
                  >
                    SUBSCRIBE
                  </Link>
                  <Link
                    aria-label="Book A Call"
                    href="/book-a-call"
                    className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#376f50] font-semibold py-3 hover:bg-[#376f50] hover:border-b-2 hover:border-[#7C9C30] hover:text-white"
                  >
                    Book A Call
                  </Link>
                  
                  <Link
                    aria-label="Career"
                    href="/career"
                    className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#376f50] font-semibold py-3 hover:bg-[#376f50] hover:border-b-2 hover:border-[#7C9C30] hover:text-white"
                  >
                    CAREER
                  </Link>
                  {/* <Link onClick={() => setMenuBool(false)} href="/" className="transition-all duration-300 flex flex-col items-center text-gray-800 text-[32px] border-b-2 py-3 hover:bg-[#376f50] border-[#376f50] font-semibold hover:border-b-2 hover:border-[#7C9C30] hover:text-white"><GoHomeFill /></Link> */}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* menu of any where click on screen  */}
        {showDiv && (
          <div
            onClick={toggleDiv}
            className="fixed -z-1 top-0 left-0 w-full h-full"
          ></div>
        )}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Navbar3D;
