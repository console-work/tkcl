'use client';
import { GoHomeFill } from "react-icons/go";
import logo from "@/images/logo3.png";
import logoWhite from "@/images/logo2.png";
import { CgClose, CgFormatJustify, CgFormatRight, CgMenu, CgMenuGridO } from "react-icons/cg";
import Link from 'next/link'
import { useEffect, useState } from "react";


import { IoLanguage } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";


import "@/styles/navbar.css";
import GoogleTranslate from "../googleTranslate/googleTranslate";
import HeadlineModal from "./headlineModal";
import MegaNavbar from "./megaNavbar";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Language from "../language/language";

const NavbarHome = ({carearmenu}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [headlineText, setHeadlineText] = useState('');
  const [headline, setHeadline] = useState('');


  const [getMenuBool, setMenuBool] = useState(false);
  const [screenLeft, setScreenLeft] = useState(false);

  // useEffect(() => {
  //   // Function to check if an element is out of the viewport
  //   function isElementOutOfViewport(el) {
  //     var rect = el.getBoundingClientRect();
  //     return (
  //       rect.bottom < 0 ||
  //       rect.right < 0 ||
  //       rect.left > window.innerWidth ||
  //       rect.top > window.innerHeight
  //     );
  //   }

  //   // Function to handle the scroll event
  //   function handleScroll() {
  //     var myElement = document.getElementById("videoElement");

  //     if (isElementOutOfViewport(myElement)) {
  //       console.log("Element has left the screen.");
  //       setScreenLeft(true);
  //     } else {
  //       console.log("Element is still visible on the screen.");
  //       setScreenLeft(false);
  //     }
  //   }

  //   // Attach the handleScroll function to the scroll event
  //   window.addEventListener("scroll", handleScroll);

  //   // Optionally, you might want to also check the initial state
  //   window.addEventListener("load", handleScroll);
  // }, []);

  useEffect(() => {
    function isElementOutOfViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.bottom < 0 ||
        rect.right < 0 ||
        rect.left > window.innerWidth ||
        rect.top > window.innerHeight
      );
    }
  
    function handleScroll() {
      const myElement = document.getElementById("videoElement");
      if (!myElement) return;
  
      if (isElementOutOfViewport(myElement)) {
        setScreenLeft(true);
      } else {
        setScreenLeft(false);
      }
    }
  
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);
  
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);
  

  const handleHeadlineSubmit = () => {
    setHeadline(headlineText);
    setShowModal(false);
  };

  return (
    <>
      <div style={carearmenu && {background:"#DEE2E2"}}
        className={`menuActive  ${
          screenLeft && "bg-[#DEE2E2]"
        }  fixed w-full top-[0px] z-[999]  shadow-xl md:shadow-none`}
      >
        {/* {screenLeft && <MegaNavbar />} */}
        {screenLeft && (
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.2 }}
  >
    <MegaNavbar />
  </motion.div>
)}

        <div className="container mx-auto bg-[#DEE2E2] md:bg-transparent py-1">
          <div className="hidden lg:flex items-center justify-between gap-3 ">
            
            <h1>
              <Link aria-label="home" href={"/"}>
               <Image
  src={screenLeft || carearmenu ? logo.src : logoWhite.src}
  alt="Best 2D Photo Editing and 3D Modeling and Rendering Service Provider"
  width={80}
  height={45}
  className=""
/>
            </Link>
            </h1>
           
            {/* --------------------------------------For Large Screen------------------------------------------ */}
            <Link
              aria-label="2D"
              href="/2d-photo-editing"
              className={` text-xs lg:text-sm font-semibold ${
                screenLeft || carearmenu
                  ? "text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
                  : "text-white hover:text-[#7C9C30]"
              } `}
            >
              IMAGES
            </Link>
            <Link
              aria-label="3D"
              href="/3d-modeling-and-rendering"
              className={` text-xs lg:text-sm font-semibold ${
                screenLeft || carearmenu
                  ? "text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
                  : "text-white hover:text-[#7C9C30]"
              } `}
            >
              3D
            </Link>
            <Link
              aria-label="AI"
              href="/#ai"
              className={` text-xs lg:text-sm font-semibold ${
                screenLeft || carearmenu
                  ? "text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
                  : "text-white hover:text-[#7C9C30]"
              } `}
            >
              AI
            </Link>
            <Link
              aria-label="integration"
              href="/#integration"
              className={` text-xs lg:text-sm font-semibold ${
                screenLeft || carearmenu
                  ? "text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
                  : "text-white hover:text-[#7C9C30]"
              } `}
            >
              INTEGRATIONS
            </Link>
            <Link
              aria-label="trends"
              href="/#trends"
              className={` text-xs lg:text-sm font-semibold ${
                screenLeft || carearmenu
                  ? "text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
                  : "text-white hover:text-[#7C9C30]"
              } `}
            >
              INDUSTRY TRENDS
            </Link>
            <Link
              aria-label="trends"
              href="/career"
              // target="_blank"
              className={` text-xs lg:text-sm font-semibold ${
                screenLeft || carearmenu
                  ? "text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
                  : "text-white hover:text-[#7C9C30]"
              } `}
            >
              CAREER
            </Link>
            <Link
              aria-label="trends"
              href="/onboarding"
              target="_blank"
              className={` text-xs lg:text-sm font-semibold ${
                screenLeft || carearmenu
                  ? "text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
                  : "text-white hover:text-[#7C9C30]"
              } `}
            >
              ONBOARDING
            </Link>
            <Link
              aria-label="blog"
              href="/blog"
              // target="_blank"
              className={` text-xs lg:text-sm font-semibold ${
                screenLeft || carearmenu
                  ? "text-gray-800 border-[#DEE2E2] border-b-2  hover:border-b-2 hover:border-[#7C9C30] "
                  : "text-white hover:text-[#7C9C30]"
              } `}
            >
              BLOG
            </Link>
            <a
              aria-label="sign up"
              href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F"
              target="_blank"
              className={`text-xs lg:text-sm border-2 rounded-3xl px-4 py-1 border-[#7C9C30] font-semibold ${
                screenLeft || carearmenu ? "text-gray-800 " : " text-white"
              }`}
              rel="noreferrer"
            >
              SIGN UP
            </a>
            <Link
              aria-label="book a call"
              href="/book-a-call"
              className={`text-xs lg:text-sm border-2 rounded-3xl px-4 py-1 border-[#7C9C30] font-semibold ${
                screenLeft || carearmenu ?  "text-gray-800 " : " text-white"
              }`}
              rel="noreferrer"
            >
              Book A Call
            </Link>
             <Language carearmenu={carearmenu} screenLeft={screenLeft}/>
          
          </div>
          <div className="flex items-center justify-between lg:hidden comonresponsiveNAvbar">
            <h1>
            <Link aria-label="Best 2D Photo Editing and 3D Modeling and Rendering Service Provider" href={"/"}>
            <Image
  src={logo.src}
  alt="Best 2D Photo Editing and 3D Modeling and Rendering Service Provider"
  width={80}
  height={45}
  className=""
/>
              
            </Link>
            </h1>

            
          <CgMenu
            onClick={() => setMenuBool(true)}
            className="text-[27px] cursor-pointer"
          style={{opacity:'0.5'}}/>
      
          </div>
        </div>
        {/* -----------------------------------For Mobile--------------------------------------- */}
        {getMenuBool && (
          <div
          className={`block lg:hidden pt-2 mobileSidebarFool ${getMenuBool ? "open" : ""}`}
        >
              <button  className="mobileSidebarFoolCrox  cursor-pointer" onClick={() => setMenuBool(false)}><CgClose className="text-[25px]" style={{opacity:'0.5'}}/></button>
            <div className="container mx-auto mt-10">
              <div className="flex flex-col text-center gap-1">
                <Link
                  aria-label="2D"
                  onClick={() => setMenuBool(false)}
                  href="/2d-photo-editing"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  IMAGES
                </Link>
                <Link
                  aria-label="3d-modeling-and-rendering"
                  onClick={() => setMenuBool(false)}
                  href="/3d-modeling-and-rendering"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  3D
                </Link>
                <Link
                  aria-label="AI"
                  onClick={() => setMenuBool(false)}
                  href="/#ai"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  AI
                </Link>
                <Link
                  aria-label="integration"
                  onClick={() => setMenuBool(false)}
                  href="/#integration"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  INTEGRATIONS
                </Link>
                <Link
                  aria-label="trends"
                  onClick={() => setMenuBool(false)}
                  href="/#trends"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  INDUSTRY TRENDS
                </Link>
                <a
                  aria-label="subscribe"
                  onClick={() => setMenuBool(false)}
                  href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F"
                  target="_blank"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                  rel="noreferrer"
                >
                  SUBSCRIBE
                </a>
                <Link
                  onClick={() => setMenuBool(false)}
                  href="/book-a-call"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  Book A Call
                </Link>
                <Link
                  onClick={() => setMenuBool(false)}
                  href="/career"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  CAREER
                </Link>
                <Link
                  onClick={() => setMenuBool(false)}
                  href="/onboarding"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  ONBOARDING
                </Link>
               
                 <Link
                   onClick={() => setMenuBool(false)}
              aria-label="blog"
              href="/blog"
              
              className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
            >
              BLOG
            </Link>
                <Language />
              </div>
            </div>
          </div>
        )}
      </div>
    {/* -----------------------------------For Headline Input----------------------------------- */}
    {/* -----------------------------------For Headline----------------------------------- */}
    <HeadlineModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleHeadlineSubmit}
        headlineText={headlineText}
        setHeadlineText={setHeadlineText}
      />
      {headline && (
        <div className="bg-gray-800 text-white text-center pt-10 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            <h1 className="text-2xl font-bold inline-block">{headline}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarHome;
