import Contact3D from "@/component3d/contact3D/contact3D";
import Footer3D from "@/component3d/footer3D/footer3D";
import StartPage from "@/component3d/techAccessories/startPage/startPage";
import TAPage1 from "@/component3d/techAccessories/tAPage1/tAPage1";
import Navbar3D from "@/components/navbar/navbar3D";
import ScrolTop from "@/components/scrolTop/scrolTop";



const TechAccessories = () => {
    return (
        <div>
            <ScrolTop/>
            <Navbar3D/>
            <StartPage/>
            <TAPage1/>
            <Contact3D/>
            <Footer3D/>
        </div>
    );
};

export default TechAccessories;