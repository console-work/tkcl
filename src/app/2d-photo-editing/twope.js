
import Integrations from "@/component2d/apps&Integration/apps&Integrations";
import ChoosePlan from "@/component2d/choosePlan/choosePlan";
import Footer2D from "@/component2d/footer2D/footer2D";
import ImageSlider from "@/component2d/imageSlider/imageSlider";
import OrderGuide from "@/component2d/orderGuide/orderGuide";
import Record2d from "@/component2d/record/record2d";
import StartPage from "@/component2d/startPage/startPage";
import Trends2D from "@/component2d/trends2D/trends2D";
import VideoSliderNew from "@/component2d/videoSlider/videoSliderNew";
import Navbar2D from "@/components/navbar/navbar2D";
import ScrolTop from "@/components/scrolTop/scrolTop";



const Twope = () => {
    return (
        <>
        
            <ScrolTop />
            <Navbar2D />
            <div className="bg-[#DEE2E2] bgImage">
                <StartPage />
                {/* <ScrollEffect offset={100}> */}
                    <Record2d />
                {/* </ScrollEffect> */}
                {/* <ScrollEffect id="services" offset={100}> */}
                    <ImageSlider />
                {/* </ScrollEffect> */}
                {/* <VideoSlider /> */}
                {/* <ScrollEffect offset={100}> */}
                    <VideoSliderNew />
                {/* </ScrollEffect> */}
                {/* <ScrollEffect id="apps" offset={100}> */}
                    <Integrations />
                {/* </ScrollEffect> */}
                {/* <ScrollEffect id="price" offset={100}> */}
                    <ChoosePlan />
                {/* </ScrollEffect> */}
                {/* <LetsTalk /> */}
                {/* <ScrollEffect id="order-guide" offset={100}> */}
                    <OrderGuide />
                {/* </ScrollEffect> */}
                {/* <ScrollEffect id="2d-trends" offset={100}> */}
                    <Trends2D />
                {/* </ScrollEffect> */}
                <Footer2D />
            </div>
        </>
    );
};

export default Twope;