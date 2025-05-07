'use client'
import Heading2D from "../../component3d/heading/heading2D";
import CircleStyle2d from "./circleStyle2d";

const Record2d = () => {
  return (
    <div className="bg-white pb-6 ">
      <div className="bg-[#dee2e2] h-[200px]">
      <Heading2D
        className="pt-12 pb-20"
        titleClassName="w-[1400px]"
        title="SUCCESS RECORD"
      />
      </div>
      <div>
        <div className="container mx-auto commonContainer">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-4 justify-items-center -mt-24">
              <CircleStyle2d
                count="30M"
                title="IMAGE PRODUCTION"
                recordTime="2022-23"
              />
              <CircleStyle2d
                count="50K"
                title="IMAGE PRODUCTION"
                recordTime="PER DAY"
              />
              <CircleStyle2d
                count="60K"
                title="VIDEO PRODUCTION"
                recordTime="2022-23"
              />
              <CircleStyle2d
                count="2M"
                title="VIDEO PRODUCTION"
                recordTime="FIVE YEARS"
              />
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Record2d;
