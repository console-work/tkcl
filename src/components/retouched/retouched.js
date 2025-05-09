
"use client";
import ReactCompareImage from "react-compare-image";
const Retouched = () => {
    return (
        <div id="ai">
            <div className="container mx-auto py-4 md:pt-20 ">
                <div className=" justify-center items-center grid grid-cols-1 lg:grid-cols-[500px_auto] gap-6 md:gap-28">
                    <div className=" h-[670px] relative z-50 mt-5 lg:mt-0 bg-white sm:ml-20 md:ml-28  ">
                        <div className="h-full overflow-hidden ">
                            <div className="imageCompareWrap">
                                    <ReactCompareImage
                                        leftImage={"/img/model.webp"}
                                        rightImage={"/img/model-BR.webp"}
                                    />
                            </div>
                        </div>
                    </div>

                    <div className="px-3 lg:px-0 text-center lg:text-left ">
                        <h1 className="text-[28px] md:text-[44px]  font-bold border-b-2 leading-[50px] border-[#7C9C30]">Retouched.ai</h1>
                        <div className="">
                            <p className="text-sm  text-center lg:text-justify pt-7">  Retouched.ai is the perfect tool for effortlessly and freely removing backgrounds from images using artificial intelligence. This tool is specifically designed for photographers, graphic designers, e-commerce businesses, and content creators. It delivers precise, high-quality results in seconds. You don&apos;t have to labor over unzipping files and moving them from one place to another to get a painfully neutral result. Retouched.ai gives you a comfortable workspace and makes it look like you&apos;re a Photoshop pro, even if you&apos;re not. </p>
                            <p className="text-sm  pt-5 text-center lg:text-justify">{`Retouched.ai does not stop at removing backgrounds. It offers the option to use Preset Backgrounds, which allows you to replace the background of your image with something way better and cooler than the original background. Need to make alterations to your images for specific platforms? The Smart Resizing tool ensures that your visuals are tailored for Facebook, Shopify, and Amazon, making them optimal for all platforms. To take your creativity to the next level, try AI Background Generation. With this feature, you can create realistic environments or design something completely abstracts using just your prompts. Professional Touch Up makes an expert finalization to achieve optimal results. `}</p>
                            <p className="text-sm  pt-5 text-center lg:text-justify">{`Flexibility and usability are guaranteed by Retouched.ai, which allows for output in several formats: JPG, PNG, and PSD. This format can easily fit into whatever you're doing because it supports the everyday output needs of most working creatives, regardless of their end goal. `}</p>
                            <p className="text-sm  pt-5 text-center lg:text-justify">{`Say goodbye to tedious manual editing and welcome a fast, more efficient method for achieving professional and visually compelling results. Retouched.ai makes it easy to creatively accomplish the otherwise daunting task of background removal. `}</p>
                        </div>


                        <div className='flex justify-center lg:justify-start pt-7 '>
                            <a className="cursor-pointer" href="http://retouched.ai/" target="_blank" rel="noreferrer">
                                <button className='text-xs  font-semibold text-white px-8 py-2 bg-[#7C9C30] rounded-3xl'> Remove Image Background with AI</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Retouched;