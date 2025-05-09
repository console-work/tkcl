
'use client';
import {
    FaFacebook,

    FaLinkedinIn,

    FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import  Link  from 'next/link';
import { useEffect, useState } from "react";
import Image from "next/image";

const Footer3D = () => {
    const [boolMap, setBoolMap] = useState(false);

    useEffect(() => {
        setBoolMap(true);
    }, [])
    return (
        <div>
            <div id="footer" className="bg-gradient-to-b to-[#8ebd8f] via-[#b3cda7] from-[#c7e0c0]">
                <footer className="footer container pt-10 pb-10 mx-auto lg:justify-items-center justify-items-center  text-[#003333] gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center md:text-left flex flex-col justify-center">
                        <figure className='flex justify-center md:justify-start'>
                        <Image
  src="/img/logoBlack.webp"
  alt="logoBlack"
  width={120}
  height={0} // You can adjust or remove this if using responsive layout
  className="h-auto w-[120px]"
  loading="lazy"
/>
                        </figure>
                        <p className="w-40 text-[#333333] text-[11px] p-1 border-b-2  border-[#333333]  mb-4">
                            <b>The KOW Company</b> is one of the leading image, video, 3D & CGI content production companies for businesses all over the world.
                        </p>
                        <div className="flex text-[#003333] justify-center md:justify-start gap-1 mb-2">
                        <a aria-label='facebook' href="https://www.facebook.com/KOWCompany" target="_blank" rel="noreferrer">
                                <FaFacebook className="h-4 w-4 mr-2 text-[#333333] cursor-pointer"></FaFacebook>
                            </a>
                            <a aria-label='youtube'
                                href="https://www.youtube.com/channel/UCCXAA-Q_f0uuvG8RqW0HRYQ"
                                target="_blank" rel="noreferrer"
                            >
                                <FaYoutube className="h-4 w-4 mr-2 text-[#333333] cursor-pointer"></FaYoutube>
                            </a>
                            <a aria-label='linkedin'
                                href="https://www.linkedin.com/company/the-kow-company/"
                                target="_blank" rel="noreferrer"
                            >
                                <FaLinkedinIn className="h-4 w-4 mr-2 text-[#333333] cursor-pointer"></FaLinkedinIn>
                            </a>
                            <a
                               aria-label='twitter'
                               href="https://twitter.com/the_kow_company" target="_blank" rel="noreferrer">
                                <BsTwitterX className="h-4 w-4 mr-2 text-[#333333] cursor-pointer"></BsTwitterX>
                            </a>
                            {/* <a
                                href="https://www.instagram.com/accounts/login/"
                                target="_blank" rel="noreferrer"
                            >
                                <FaInstagram className="h-4 w-4 mr-2 text-[#333333] cursor-pointer"></FaInstagram>
                            </a> */}
                        </div>

                        {/* <div className='flex justify-center items-center bg-white  px-6 py-2 mt-2 gap-2 font-semibold rounded-3xl text-xs'>
                       <button className=" ">Language </button>
                       <BiSolidDownArrow />
                       </div> */}
                    </div>

                    <div className="flex flex-col text-[#333333] lg:items-start md:-ml-16 md:items-start text-center md:text-start gap-1">
                        <span className="text-xl font-semibold mb-2 ">HOME</span>
                        <Link aria-label="3d services" href="/3D#3d-services" className="link link-hover text-sm">Services</Link>
                        <Link aria-label="3d trends" href="/3d#3d-trends" className="link link-hover text-sm">3D Trends</Link>
                        {/* <Link  href="/3d#3d-contact" className="link link-hover text-sm">Contact us</Link> */}


                    </div>

                    <div className="flex text-[#333333] lg:items-start md:items-start md:-ml-16 flex-col text-center md:text-left gap-1  lg:-ml-0">
                        <span className="text-xl font-semibold mb-2">Support</span>

                        <Link aria-label="Privacy Policy" href="/privacy-policy" className=" text-sm">Privacy Policy</Link>
                        <Link aria-label="Terms & Conditions" href="/terms-condition" className=" text-sm">Terms & Conditions</Link>
                        <Link aria-label="Contact us" href="/contact-us" className=" text-sm">Contact us</Link>
                        {/* <a href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F" target="_blank" className="text-sm cursor-pointer" rel="noreferrer">SIGN UP</a> */}
                    </div>
                    <div className="text-center flex flex-col items-center  md:ml-0 lg:ml-0">
                        <span className="font-bold text-[#333333] text-xl w-full text-center  md:mb-4 md:ml-8 lg:-ml-16">
                            Our Address
                        </span>
                        {
                            boolMap &&

                            <iframe
                                title="map"
                                className='rounded-md'
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd&language=en"
                                width="90%"
                                height="80%"
                                style={{ border: "0" }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        }
                    </div>

                </footer>


            </div>
        </div>
    )
}

export default Footer3D;