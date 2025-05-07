'use client'
import { GoHomeFill } from "react-icons/go";
import logo from "../../images/logo3.png"
import { CgClose, CgMenu, CgMenuGridO } from "react-icons/cg";
import  Link  from "next/link";
import  {useState}  from "react";

import MegaNavbar from "./megaNavbar";


const Navbar2D = () => {
  const [getMenuBool, setMenuBool] = useState(false); 
  return (
    <>
      {/* <div className="bg-[#DEE2E2] font-sans w-full min-h-screen m-0"> */}
      <div className="bg-[#DEE2E2] sticky w-full top-0 z-[999]  shadow-xl md:shadow-none">
        <MegaNavbar/> 
        <div className="container mx-auto py-1">
          <div className="hidden lg:flex items-center justify-between gap-3">
            <Link aria-label="home" href={"/"}>
              <img loading="lazy" src={logo.src}
                width={80}
                height={40}
                alt="logo" />
            </Link>
            {/* --------------------------------------For Large Screen------------------------------------------ */}
            {/* <div className="hidden md:flex sm:items-center md:gap-1 lg:gap-8 xl:gap-12"> */}
            <Link aria-label="services" href="/2d-photo-editing#services" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">SERVICES</Link>
            <Link aria-label="apps" href="/2d-photo-editing#apps" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">APPS</Link>
            <Link aria-label="price" href="/2d-photo-editing#price" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">PRICE</Link>
            <Link aria-label="order-guide" href="/2d-photo-editing#order-guide" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">ORDER GUIDE</Link>
            <Link aria-label="2d trends" href="/2d-photo-editing#2d-trends" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">2D TRENDS</Link>
            <Link aria-label="contact-us" href="/contact-us" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">CONTACT US</Link>

            <a aria-label="sign-up" href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F" target="_blank" className="text-gray-800 text-xs lg:text-sm border-2 rounded-3xl px-8 py-1 border-[#7C9C30] font-semibold" rel="noreferrer">SIGN UP</a>
            <Link aria-label="book-a-call" href="/book-a-call" className="text-gray-800 text-xs lg:text-sm border-2 rounded-3xl px-6 py-1 border-[#7C9C30] font-semibold" rel="noreferrer">Book A Call</Link>

            {/* <Link href="/" className="text-gray-800 text-[26px] lg:text-[32px] border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"><GoHomeFill />
            </Link> */}
          </div>
          <div className="flex items-center justify-between lg:hidden">
            <Link aria-label="home" href={"/"}>
              <img loading="lazy" src={logo.src}
                width={80}
                height={40}
                alt="logo" />
            </Link>
                 <CgMenu
                        onClick={() => setMenuBool(true)}
                        className="text-[27px] cursor-pointer"
                      style={{opacity:'0.5'}}/>
          </div>
        </div>
        {/* -----------------------------------For Mobile--------------------------------------- */}
        {
          getMenuBool && 
          
          <div className={`block lg:hidden bg-[#DEE2E2] pt-2 mobileSidebarFool ${getMenuBool ? "open" : ""}`}
        >
          <button  className="mobileSidebarFoolCrox  cursor-pointer" onClick={() => setMenuBool(false)}><CgClose className="text-[25px]" style={{opacity:'0.5'}}/></button>
          <div className="container mx-auto mt-10">
            <div className="flex flex-col text-center gap-0">
              <Link aria-label="services" onClick={() => setMenuBool(false)} href="/2d-photo-editing#services" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">SERVICES</Link>
              <Link aria-label="apps" onClick={() => setMenuBool(false)} href="/2d-photo-editing#apps" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">APPS</Link>
              <Link aria-label="price" onClick={() => setMenuBool(false)} href="/2d-photo-editing#price" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">PRICE</Link>
              <Link aria-label="order-guide" onClick={() => setMenuBool(false)} href="/2d-photo-editing#order-guide" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">ORDER GUIDE</Link>
              <Link aria-label="2d-trends" onClick={() => setMenuBool(false)} href="/2d-photo-editing#2d-trends" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">2D TRENDS</Link>
              <Link aria-label="contact-us" onClick={() => setMenuBool(false)} href="/contact-us" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">CONTACT US</Link>
              <a aria-label="sign-up" onClick={() => setMenuBool(false)} href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F" target="_blank" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]" rel="noreferrer">SIGN UP</a>
              <Link aria-label="book-a-call" href="/book-a-call" onClick={() => setMenuBool(false)}  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">Book A Call</Link>
              <Link aria-label="career" href="/career" onClick={() => setMenuBool(false)}  className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">CAREER</Link>

              {/* <Link onClick={() => setMenuBool(false)} href="/" className="transition-all duration-300 flex flex-col items-center text-gray-800 text-[32px] border-b-2 py-3 hover:bg-[#cfd6d6] border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"><GoHomeFill /></Link> */}
            </div>
          </div>
        </div>
        }
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Navbar2D;