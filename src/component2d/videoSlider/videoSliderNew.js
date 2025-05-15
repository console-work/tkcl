'use client'
import { Carousel } from "react-div-carousel";
import Heading2D from "../../component3d/heading/heading2D";
import  {useEffect } from "react";

const VideoSliderNew = () => {
  const sliderList = [
    {
      video: "./video/video_2d/audio-level.webm",
      label: "Audio Editing Service",
    },
    {
      video: "./video/video_2d/subtitle.webm",
      label: "Subtitle Addition Service",
    },
    {
      video: "./video/video_2d/title.webm",
      label: "Title Addition Service",
    },
    {
      video: "./video/video_2d/crop.webm",
      label: "Video Cropping Service",
    },
  ];

  useEffect(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.play().catch(error => {
        console.error("Video playback failed:", error);
      });
    });
  }, []);

  return (
    <div className="pb-4 pt-10">
      <Heading2D className="pt-6 pb-12" titleClassName="w-[500px]" title="VIDEOS" />
      <div className="2xl:container 2xl:mx-auto commonContainer">
        <div className="relative w-full">
          <Carousel
            uniqueId="id_125"
            delay={5000}
            item={3}
            indicators={false}
            responsive={[
              {
                breakPoint: 641,
                item: 1,
              },
              {
                breakPoint: 1025,
                item: 2,
              },
            ]}
          >
            {sliderList.map((item, index) => (
              <div className="flex flex-col md:block mx-2" key={index}>
                <div>
                  <video
                    id={`video_${index}`}
                    playsInline
                    autoPlay
                    muted
                    loop
                    preload="auto"
                  >
                    <source src={item.video} type="video/webm" />
                  </video>
                </div>
                <div className="w-full flex gap-3 py-4 justify-center">
                  <h3 className="text-black text-lg uppercase font-medium">{item.label}</h3>
                </div>
              </div>
            ))}
          </Carousel> 
        </div>
      </div>
    </div>
  );
};

export default VideoSliderNew;