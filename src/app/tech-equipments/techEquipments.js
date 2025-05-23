

import Contact3D from "@/component3d/contact3D/contact3D";
import Footer3D from "@/component3d/footer3D/footer3D";
import StartPage from "@/component3d/techEquipments/startPage/startPage";
import TEPage1 from "@/component3d/techEquipments/tEPage1/tEPage1";
import Navbar3D from "@/components/navbar/navbar3D";
import ScrolTop from "@/components/scrolTop/scrolTop";



const TechEquipments = () => {
    return (
        <>
           
            <div>
                <ScrolTop />
                <Navbar3D />
                <StartPage />
                <TEPage1 />
                <Contact3D />
                <Footer3D />
            </div>
        </>
    );
};

export default TechEquipments;