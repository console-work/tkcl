'use client'
import { useEffect, useState, useRef } from 'react'
import ReactCompareImage from 'react-compare-image'
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'

import VideoWithThumb from './videoWithThumb'
import Heading2D from '../../component3d/heading/heading2D'

const VideoSlider = () => {


    const sliderList = [
        {
            "thumb": "/img/video_slider/video-slider-1.jpg",
            "video": "/video/video_2d/audio level.mp4",
            "label": "AUDIO ADDITION"
        },
        {
            "thumb": "/img/video_slider/video-slider-2.jpg",
            "video": "/video/video_2d/subtitle.mp4",
            "label": "SUBTITLE ADDITION"
        },
        {
            "thumb": "/img/video_slider/video-slider-3.jpg",
            "video": "/video/video_2d/title.mp4",
            "label": "TITLE EDITING"
        },
        {
            "thumb": "/img/video_slider/video-slider-1.jpg",
            "video": "/video/video_2d/crop.mp4",
            "label": "VIDEO CROPPING"
        }
      
    ]


    return (
        <div className='pt-4 '>
             <div className="pt-6 pb-6">
             <Heading2D
        className="pt-6 pb-7"
        titleClassName="w-[500px]"
        title="VIDEOS"
      />
            </div>
            <div className='2xl:container 2xl:mx-auto '>
                <div className='relative w-full h-[400px]'>
                    <Carousel uniqueId="id_10115"
                        delay={5000}
                        indicators={false}
                        item={3}
                        responsive={[
                            {
                                breakPoint: 641,
                                item: 1
                            },
                            {
                                breakPoint: 1025,
                                item: 2,
                            }
                        ]}
                    >
                        {sliderList.map((item, index) => (
                            <VideoWithThumb key={index} video={item.video}  label={item.label} />
                        ))}
                    </Carousel>
                </div>
            </div>
           
        </div>
    )
}

export default VideoSlider;