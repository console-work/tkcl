'use client'
import Contact3D from "@/component3d/contact3D/contact3D";
import CPage1 from "@/component3d/cosmetics/cPage1/cPage1";
import StartPage from "@/component3d/cosmetics/startPage/startPage";
import Footer3D from "@/component3d/footer3D/footer3D";
import Navbar3D from "@/components/navbar/navbar3D";
import ScrolTop from "@/components/scrolTop/scrolTop";



const Cosmetics = () => {
    return (
        <div>
            <ScrolTop/>
            <Navbar3D/>
            <StartPage/>
            <CPage1/>
            <Contact3D/>
            <Footer3D/>
        </div>
    );
};

export default Cosmetics;