
import Contact3D from "@/component3d/contact3D/contact3D";
import Footer3D from "@/component3d/footer3D/footer3D";
import PackPage1 from "@/component3d/packaging/packPage1/packPage1";
import StartPage from "@/component3d/packaging/startPage/startPage";
import Navbar3D from "@/components/navbar/navbar3D";
import ScrolTop from "@/components/scrolTop/scrolTop";

const Packaging = () => {
    return (
        <div>
            <ScrolTop/>
            <Navbar3D/>
            <StartPage/>
            <PackPage1/>
            <Contact3D/>
            <Footer3D/>

        </div>
    );
};

export default Packaging;