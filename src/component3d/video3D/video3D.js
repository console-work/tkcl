'use client'
import VideoFullScreenLatest from '@/components/videoFullScreen/videoFullScreenLatest';
import React from 'react';




const Video3D = () => {
    return (
        <div>
            <div>
                {/* <VideoFullScreen video={'/video/production.webm'} /> */}
                {/* <source src={"/video/production.webm"} /> */}
                <VideoFullScreenLatest video={'/video/production.webm'} videoName="3d-video" />
            </div>
        </div>
    );
};

export default Video3D;