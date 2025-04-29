'use client'
import Contact3D from "@/component3d/contact3D/contact3D";
import Footer3D from "@/component3d/footer3D/footer3D";
import IVPage2 from "@/component3d/interiorVisualization/iVPage2/iVPage2";
import IVPage3 from "@/component3d/interiorVisualization/iVPage3/iVPage3";
import IVPage4 from "@/component3d/interiorVisualization/iVPage4/iVPage4";

import StartPage from "@/component3d/interiorVisualization/startPage/startPage";
import Navbar3D from "@/components/navbar/navbar3D";


import ScrolTop from "@/components/scrolTop/scrolTop";



const InteriorVisualization = () => {
    return (
        <div>
            <ScrolTop />
            <Navbar3D />
            <StartPage/>
            <IVPage2/>
            <IVPage3/>
            <IVPage4/>
            <Contact3D />
            <Footer3D />
        </div>
    );
};

export default InteriorVisualization;