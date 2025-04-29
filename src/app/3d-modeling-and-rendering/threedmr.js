
'use client'

import Navbar3D from "@/components/navbar/navbar3D"
import ProductVideoLatest from "@/components/productVideo/productVideoLatest"
import ScrolTop from "@/components/scrolTop/scrolTop"
import About3D from "../../component3d/about3D/about3D"
import VisualizationSliderStatic from "../../component3d/visualization/visualizationSliderStatic"
import { ScrollEffect } from "@/components/scrollEffect/scrollEffect"
import ProductVisualization from "../../component3d/product/productVisualization"
import ProductVisualSlider from "../../component3d/product/productVisualSlider"
import Trends3D from "../../component3d/trends3D/trends3D"
import Video3D from "../../component3d/video3D/video3D"
import GetUpdate3D from "../../component3d/getUpdate3D/getUpdate3D"
import Footer3D from "../../component3d/footer3D/footer3D"
import Services3D from "../../component3d/services3D/services3D"


function Threedmr() {

  

    return (
        <>
       
       <div>  
            <ScrolTop />
            <Navbar3D />
            <ProductVideoLatest
                videoUrl="../../video/3d_Website.webm"
                loadingImg="../../video/3dvideo_loading.webp" />

           
                <About3D />
           
                <Services3D />
           
                <VisualizationSliderStatic />
            {/* </ScrollEffect> */}
            <ScrollEffect offset={100}>
                <ProductVisualization />
            </ScrollEffect>
            <div className="flex flex-col bg-[#f1f4ed] bgImage-2 ">
                {/* <ScrollEffect offset={100}> */}
                    <ProductVisualSlider />
                {/* </ScrollEffect> */}
                {/* <ScrollEffect offset={100}> */}
                    {/* <Model3D /> */}
                {/* </ScrollEffect> */}
                {/* <ScrollEffect id="3d-trends" offset={100}> */}
                    {/* <Trends3D /> */}
                {/* </ScrollEffect> */}
                <ScrollEffect offset={100}>
                    <Video3D />
                </ScrollEffect>
                {/* <ScrollEffect offset={100}> */}
                    <GetUpdate3D />
                {/* </ScrollEffect> */}
                {/* <Contact3D /> */}
            </div>

            <Footer3D />
            </div>
        </>
    )
}

export default Threedmr