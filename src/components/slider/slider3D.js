"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import Image from "next/image";

const Slider3D = () => {
  const sliderList = [
    {
      image: "/img/Fashion Accessories.webp",
      label: "Fashion Accessories",
      link: "/fashion-accessories",
    },
    {
      image: "/img/Tech Accessories.webp",
      label: "Tech Accessories",
      link: "/tech-accessories",
    },
    {
      image: "/img/Packaging.webp",
      label: "Packaging",
      link: "/packaging",
    },
    {
      image: "/img/Cosmetics-update.webp",
      label: "Cosmetics",
      link: "/cosmetics",
    },
    {
      image: "/img/Furniture.webp",
      label: "Furniture",
      link: "/furniture",
    },
    {
      image: "/img/Tech Equipment.webp",
      label: "Tech Equipment",
      link: "/tech-equipments",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="3d" className="pb-10 pt-0">
      <div className="flex justify-center gap-7 my-10">
        <div className="w-[400px] border-b border-[#7C9C30]"></div>
        <h2 className="text-[28px] md:text-[40px] -mb-2 md:-mb-4 font-bold">3D</h2>
        <div className="w-[400px] border-b border-[#7C9C30]"></div>
      </div>

      <div className="2xl:container 2xl:mx-auto">
        <div className="relative w-full">
          <Carousel
            autoPlay
            autoPlaySpeed={5000}
            infinite
            arrows={false}
            showDots={false}
            responsive={responsive}
          >
            {sliderList.map((item, index) => (
              <div key={index}>
                <Link href={item.link} className="relative flex flex-col md:block mx-2 cursor-pointer">
                  <div>
                  <Image
  src={item.image}
  alt={item.label}
  width={800} // 🔁 Replace with actual image width
  height={500} // 🔁 Replace with actual image height
  className="w-full object-cover"
/>
 
                  </div>
                  <div className="w-full flex gap-3 py-4 justify-center">
                    <h3 className="text-black font-medium">{item.label}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <p className="text-xs text-center md:text-sm px-[54px]">
          {`Visualize your brand in a captivating three-dimensional spectacle brought to life by a skilled team of 3D artists. We can take your products visually to the next level.`}
        </p>
        <p className="text-xs md:text-sm text-center mt-5 mb-10 px-[52px]">
          {`Our 3D models allow customers to examine the design and the intricate details that make them functional. We're not just rendering fancy, pretty pictures of buildings; we're creating a virtual reality where stakeholders can understand the architect's intentions and the spaces they'll occupy. This allows for accurate visualization, facilitating informed design awareness in a way that's never been done before. `}
        </p>

        <div className="flex justify-center">
          <h3 className="block">
            <Link
              aria-label="contact-us"
              href="/contact-us"
              className="text-xs md:text-sm font-semibold text-white px-6 py-2 bg-[#7C9C30] rounded-3xl"
            >
              Generate Realistic 3D Models
            </Link>
          </h3>
         
        </div>
      </div>
    </div>
  );
};

export default Slider3D;
