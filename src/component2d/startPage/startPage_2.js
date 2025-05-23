'use client'
import { useState } from "react";
import Image from "next/image";
import headphone from "../../assets/headphone.png"; // Import static image using next/image
import video from "../../video/production.mp4"; // Ensure video is in the correct path
import BottomPart from "./bottomPart";

const StartPage_2 = () => {
  const [playBool, setPlayBool] = useState(false);

  const playVideo = () => {
    setPlayBool(true);
    const videoElement = document.getElementById("productVideo");
    videoElement.play();
  };

  return (
    <div className="bg-[#DEE2E2] pt-2 pb-6 ">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-20">
          <div className=" w-[400px] h-80"> 
            <p className="text-[40px] text-center md:text-left">WE DO</p>
            <h1 className="border-b border-[#B1CC40] text-[40px] text-center md:text-left font-semibold -mt-4">IMAGE & VIDEO EDITING</h1>
            <h2 className="pt-5 text-[#959595] font-semibold">YOUR ONE-STOP CONTENT POST PRODUCTION SOLUTION</h2>
            <div className="pt-5 flex justify-center md:justify-start">
              <div className="rounded-3xl bg-white w-[260px] flex justify-between px-1 ">
                <button className="bg-[#B1CC40] my-1 px-8 py-1 font-semibold rounded-3xl text-[13px]">Free Trial</button>
                <button className=" my-2 px-10 rounded-3xl font-semibold text-[13px]">Free Quote</button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col">
            <div className="relative h-full md:h-auto w-full flex justify-center">
              <div
                className="flex justify-center w-full h-full absolute top-0 opacity-0 transition-all duration-300"
                style={{ opacity: playBool ? 1 : 0 }}
              >
                <video
                  id="productVideo"
                  width="100%"
                  height="auto"
                  controls
                  muted
                  loop
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
              <div
                onClick={playVideo}
                style={{ opacity: playBool ? 0 : 1 }}
                className="transition-all duration-300 cursor-pointer flex flex-col items-center justify-center relative w-[250px] md:w-[350px] lg:w-[570px]"
              >
                <Image
                  src={headphone}
                  alt="play"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:hidden flex-col justify-center items-center">
          {playBool ? (
            <div className="flex justify-center w-full">
              <video width="100%" height="auto" controls autoPlay muted loop>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div
              onClick={() => setPlayBool(true)}
              className="cursor-pointer flex flex-col items-center justify-center relative max-w-full md:w-[450px]"
            >
              <Image
                src={headphone}
                alt="play"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
      <BottomPart />
    </div>
  );
};

export default StartPage_2;
