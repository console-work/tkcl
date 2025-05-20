'use client';

import Link from 'next/link'
import { useEffect, useState } from "react";


import { IoLanguage } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";


import "@/styles/navbar.css";
import GoogleTranslate from "../googleTranslate/googleTranslate";

import Image from "next/image";

const Language = ({screenLeft,carearmenu,navbar2d3dColor}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { handleTranslate } = GoogleTranslate();
 

  const selectLanguage = (lang) => {
    handleTranslate(lang);
    setDropdownOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000); // Adjust the delay to ensure the language change is fully applied
  };
 



  return (
    <>
      
            <div
              id="google_translate_element"
              style={{ display: "none" }}
            ></div>
            <div className="relative inline-block text-center notranslate mobileresponsiveLanguage">
              <div>
                <button
                  type="button"
                  className={`flex justify-center text-base ${
                    screenLeft || carearmenu || navbar2d3dColor
                      ? "text-gray-800 border-b-2 border-[#7C9C30]"
                      : "text-white border-b-2 border-[#7C9C30]"
                  } items-center gap-2 w-40 rounded-3xl border shadow-sm px-2 py-1 font-medium focus:outline-none`}
                  id="options-menu"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <IoLanguage className="text-xl" />
                  Language
                  <IoMdArrowDropdown className="text-xl" />
                </button>
              </div>

              {dropdownOpen && (
                <div
                  className="origin-top-right absolute bg-white right-0 mt-2 w-40 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <button
                      onClick={() => selectLanguage("en")}
                      className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text-center"
                      role="menuitem"
                    >
                      {/* <img
                        className="h-7 w-7"
                        src="/img/flags/united-kingdom.png"
                        alt="English"
                      /> */}
                      <Image
  src="/img/flags/united-kingdom.png"
  alt="english"
  width={28} // Equivalent to Tailwind h-7/w-7
  height={28}
  className="h-7 w-7"
/>
                      English
                    </button>
                    <button
                      onClick={() => selectLanguage("es")}
                      className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text-center"
                      role="menuitem"
                    >
                       <Image
  src="/img/flags/spain.png"
  alt="spain"
  width={28} // Equivalent to Tailwind h-7/w-7
  height={28}
  className="h-7 w-7"
/>
                      {/* <img
                        className="h-7 w-7"
                        src="/img/flags/spain.png"
                        alt="Spanish"
                      /> */}
                      Spanish
                    </button>
                    <button
                      onClick={() => selectLanguage("fr")}
                      className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text-center"
                      role="menuitem"
                    >
                                             <Image
  src="/img/flags/france.png"
  alt="france"
  width={28} // Equivalent to Tailwind h-7/w-7
  height={28}
  className="h-7 w-7"
/>
                      
                      French
                    </button>
                    <button
                      onClick={() => selectLanguage("de")}
                      className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text-center"
                      role="menuitem"
                    >
                       <Image
  src="/img/flags/germany.png"
  alt="germany"
  width={28} // Equivalent to Tailwind h-7/w-7
  height={28}
  className="h-7 w-7"
/>
                    
                      German
                    </button>
                    <button
                      onClick={() => selectLanguage("nl")}
                      className="flex justify-start items-center gap-3 px-4 py-1 text-base text-gray-700 hover:bg-gray-100 w-full text-center"
                      role="menuitem"
                    >
                      <Image
  src="/img/flags/netherlands.png"
  alt="netherlands"
  width={28} // Equivalent to Tailwind h-7/w-7
  height={28}
  className="h-7 w-7"
/>
                     
                      Dutch
                    </button>
                  </div>
                </div>
              )}
            
          
       
        </div>
    
    </>
  );
};

export default Language;
