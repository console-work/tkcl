import  Link  from "next/link";
import Heading from "../heading/heaDing";

const Contact3D = () => {
  return (
    <div id="3d-contact">
      <div className="py-10">
        <Heading
          className="pt-12 pb-7"
          titleClassName="w-[2000px]"
          title="DISCUSS YOUR INNOVATIVE IDEAS WITH US "
        />
       <div className="container mx-auto">
       <p className=" text-center text-sm">
         Use our knowledge and expertise to get your organization ready for the future. 
        </p>
        <p className=" text-center text-sm mb-6">
        Contact our experts now for an initial meeting. 
        </p>
        <div className="flex justify-center ">
         <Link aria-label="Contact" href="/contact-us">
         <button className='bg-[url("/img/3d/button.webp")] text-[14px] md:text-[25px] font-medium text-black justify-self-center md:py-6  px-10 py-4 md:px-[60px]   bg-[length:100%_100%] bg-no-repeat'>
          CONTACT US
          </button>
         </Link>        </div>
       </div>
      </div>
    </div>
  );
};

export default Contact3D;
