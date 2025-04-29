// 'use client';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchHomeDataSuccess } from '@/redux/slices/homeSlice';

// export default function HomeClient({ initialData, fallback }) {
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(true);
//   const { data } = useSelector(state => state.home);

//   useEffect(() => {
//     if (!data) {
//       dispatch(fetchHomeDataSuccess(initialData));
//     }
//     setIsLoading(false);
//   }, [initialData, dispatch, data]);

//   if (isLoading) {
//     return fallback;
//   }

//   return null; // Server content remains visible
// }
'use client'


import BluePrint from '@/components/bluePrint/bluePrint'
import GetUpdate from '@/components/getUpdate/getUpdate'
import IndustryTrends from '@/components/industryTrends/industryTrends'
import Integration from '@/components/integration/integration'
import ProductVideoLatestMother from '@/components/productVideo/productVideoLatestMother'
import Retouched from '@/components/retouched/retouched'
import Footer from '@/components/footer/footer'
import NavbarHome from '@/components/navbar/navbar'
import Record from '@/components/record/record'
import ScrolTop from '@/components/scrolTop/scrolTop'
import { ScrollEffect } from '@/components/scrollEffect/scrollEffect'
import DivSliderParrent from '@/components/slider/divSliderParrent'
import Slider3D from '@/components/slider/slider3D'
import WelcomePage from '@/components/welcomePage/welcomePage'
import ThreeDModelContainer from '@/components/threeDModelContainer/threeDModelContainer'


function HomeClient() {

    const tagList = ["Retouching", "Recoloring", "Editing", "3D Modeling", "Texture Creation"];


    return (
        <>
       
            <ScrolTop />
            <NavbarHome />
            {/* <NavbarHome /> */}
            <div className="bg-[#DEE2E2] bgImage pb-3 flex flex-col relative">
                <ProductVideoLatestMother
                    videoUrl="../video/main_video.webm"
                    loadingImg="/video/loading-image.webp"
                    tagList={tagList} 
                    videoType="video/webm"  />


              <ScrollEffect id="scrolAnim_2d" offset={100}>
                    <WelcomePage />
                </ScrollEffect>
                <ScrollEffect id="scrolAnim_2d" offset={100}>
                    <ThreeDModelContainer />
                </ScrollEffect>
                <DivSliderParrent />
                <Slider3D />
                <Record />
                <Retouched />
                <Integration />
                <BluePrint />
                <IndustryTrends />
                <GetUpdate />
            </div>
            <Footer />
        </>
    )
}

export default HomeClient
