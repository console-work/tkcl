'use client'
import { GoHomeFill } from "react-icons/go";
import logo from "../../images/logo3.png";
import { CgClose, CgMenu, CgMenuGridO } from "react-icons/cg";
import  Link  from "next/link";
import { useState } from "react";
import MegaNavbar from "./megaNavbar";



const NavbarContact = () => {
  const [getMenuBool, setMenuBool] = useState(false);
  return (
    <>
      {/* <div className="bg-[#DEE2E2] font-sans w-full min-h-screen m-0"> */}
      <div className="bg-[#DEE2E2] sticky w-full top-0 z-[999]  shadow-xl md:shadow-none">
        <MegaNavbar />
        <div className="container mx-auto py-1">
          <div className="hidden md:flex items-center justify-between gap-3">
            <Link href={"/"} aria-label="logo">
              <img
                loading="lazy"
                src={logo.src}
                width={80}
                height={40}
                alt="logo"
              />
            </Link>
            {/* --------------------------------------For Large Screen------------------------------------------ */}
            {/* <div className="hidden md:flex sm:items-center md:gap-1 lg:gap-8 xl:gap-12"> */}
            <Link
              aria-label="2D"
              href="/2d-photo-editing"
              className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"
            >
              IMAGES
            </Link>
            <Link
              aria-label="3d-modeling-and-rendering"
              href="/3d-modeling-and-rendering"
              className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"
            >
              3D
            </Link>
            <Link
              aria-label="AI"
              href="/#ai"
              className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"
            >
              AI
            </Link>
            <Link
              aria-label="Integration"
              href="/#integration"
              className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"
            >
              INTEGRATIONS
            </Link>
            {/* <Link href="/#squad" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">THE SQUAD</Link> */}
            <Link
              aria-label="Trends"
              href="/#trends"
              className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"
            >
              INDUSTRY TRENDS
            </Link>
            {/* <Link href="/#virtual" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">VIRTUAL TOUR</Link> */}
            <a
              aria-label="sign-up"
              href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F"
              target="_blank"
              className="text-gray-800 text-xs lg:text-sm border-2 rounded-3xl px-4 py-1 border-[#7C9C30] font-semibold"
              rel="noreferrer"
            >
              SIGN UP
            </a>
            <Link
              aria-label="home"
              href="/"
              className="text-gray-800 text-[26px] lg:text-[32px] border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"
            >
              <GoHomeFill />
            </Link>
          </div>
          <div className="flex items-center justify-between md:hidden">
            <Link aria-label="logo" href={"/"}>
              <img
                loading="lazy"
                src={logo.src}
                width={80}
                height={40}
                alt="logo"
              />
            </Link>
             <CgMenu
                        onClick={() => setMenuBool(true)}
                        className="text-[27px] cursor-pointer"
                      style={{opacity:'0.5'}}/>
          </div>
        </div>
        {/* -----------------------------------For Mobile--------------------------------------- */}
        {getMenuBool && (
          <div className={`block md:hidden bg-[#DEE2E2] pt-2 mobileSidebarFool ${getMenuBool ? "open" : ""}`}
        >
           <button  className="mobileSidebarFoolCrox  cursor-pointer" onClick={() => setMenuBool(false)}><CgClose className="text-[25px]" style={{opacity:'0.5'}}/></button>
            <div className="container mx-auto mt-10">
              <div className="flex flex-col text-center gap-0">
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
                  aria-label="Integration"
                  onClick={() => setMenuBool(false)}
                  href="/#integration"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  INTEGRATIONS
                </Link>
                {/* <Link onClick={() => setMenuBool(false)} href="/#squad" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">THE SQUAD</Link> */}
                <Link
                  aria-label="Trends"
                  onClick={() => setMenuBool(false)}
                  href="/#trends"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                >
                  INDUSTRY TRENDS
                </Link>
                {/* <Link onClick={() => setMenuBool(false)} href="/#virtual" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">VIRTUAL TOUR</Link> */}
                <a
                  aria-label="sign up"
                  onClick={() => setMenuBool(false)}
                  href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F"
                  target="_blank"
                  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]"
                  rel="noreferrer"
                >
                  SIGN UP
                </a>
                <Link
                  aria-label="home"
                  onClick={() => setMenuBool(false)}
                  href="/"
                  className="transition-all duration-300 flex flex-col items-center text-gray-800 text-[32px] border-b-2 py-3 hover:bg-[#cfd6d6] border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"
                >
                  <GoHomeFill />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default NavbarContact;
