'use client'
import Image from 'next/image';
import contact from "../../assets/contact-us.png";
import Heading2D from "../../component3d/heading/heading2D";

const LetsTalk = () => {
  return (
    <div className="pb-24" id="2d-contact">
      <div className="container mx-auto ">
        <div className="flex justify-center py-12">
          <div>
            <Image 
              alt="illustration" 
              className="w-[430px]" 
              src="/img/illustration2.webp" 
              width={430} 
              height={300} // Specify appropriate height
              loading="lazy"
            />
          </div>
          <div className="animate-pulse">
            <Image 
              alt="contact" 
              className="w-[120px]" 
              src={contact} // Importing the image like a static asset
              width={120} 
              height={120} // Specify appropriate height
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div>
        <Heading2D
          className="pt-4 pb-4"
          titleClassName="w-[800px]"
          title="LET'S TALK"
        />
      </div>
    </div>
  );
};

export default LetsTalk;
