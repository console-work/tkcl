'use client'
import Contact3D from "@/component3d/contact3D/contact3D";
import FAPage1 from "@/component3d/fashionAccessories/fAPage1/fAPage1";
import StartPage from "@/component3d/fashionAccessories/startPage/startPage";
import Footer3D from "@/component3d/footer3D/footer3D";
import Navbar3D from "@/components/navbar/navbar3D";
import ScrolTop from "@/components/scrolTop/scrolTop";


const FashionAccessories = () => {
    return (
        <div>
            <ScrolTop/>
            <Navbar3D/>
            <StartPage/>
            <FAPage1/>
            <Contact3D/>
            <Footer3D/>
        </div>
    );
};

export default FashionAccessories;