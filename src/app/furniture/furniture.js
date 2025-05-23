
import Contact3D from "@/component3d/contact3D/contact3D";
import Footer3D from "@/component3d/footer3D/footer3D";
import FPage1 from "@/component3d/ProductVisualization3d/furniture/fPage1/fPage1";
import StartPage from "@/component3d/ProductVisualization3d/furniture/startPage/startPage";
import Navbar3D from "@/components/navbar/navbar3D";
import ScrolTop from "@/components/scrolTop/scrolTop";



const Furniture = () => {
    return (
        <>
            <ScrolTop/>
            <Navbar3D/>
            <StartPage/>
            {/* <Suspense fallback={<p>...Loading</p>}>
                <ChairModel/>
             
            </Suspense> */}
            <FPage1/>
            <Contact3D/>
            <Footer3D/>
        </>
    );
};

export default Furniture;