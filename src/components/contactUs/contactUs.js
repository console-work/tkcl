'use client'
import React, { useEffect,useState  } from "react";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com";
import ScrolTop from "../scrolTop/scrolTop";
import NavbarContact from "../navbar/navbarContact";
import Footer from "../footer/footer";
import Image from "next/image";


// import { Helmet } from "react-helmet";
function ContactUs() {
    const [getOption, setOption] = useState(null);
    const router = useRouter(); 

    function randomDate(end) {
        return new Number(end + Math.random());
    }
    var p = randomDate(new Number()) * 10000000000000000;
    function sendEmail(e) {
        e.preventDefault();

        getOption && emailjs.sendForm(
            "service_1zfatsb",
            "template_0ciuxfr",
            e.target,
            "user_3TcS4pRKMgpo7fArsKmSf"
        )
            .then(
                (result) => {
                    console.log(result.text);
                    // window.location.href = "./thank-you/" + p;
                    router.push(`/thank-you/${p}`);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }

    useEffect(() => {
        const helloElement = document.getElementById("hello");
        if (helloElement) {
          helloElement.innerHTML = p;
        }
      }, []);


 

    return (
        <>
            <ScrolTop />
            <NavbarContact />
            <div className=" bg-[#DEE2E3] pt-4 pb-20">
                {/* <Helmet>
        <style>{"body { background-color: #c5da9c; }"}</style>
      </Helmet> */}
                <div className="container mx-auto commonContainerContact">
                    <div className="flex flex-col-reverse md:flex-row  justify-center gap-10 md:gap-20 items-center">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="flex w-full flex-col border-b-2 border-[#98AE61]  justify-end items-end text-end">
                                <p className="text-4xl font-bold text-[#333333]">GET IN TOUCH</p>
                                <p className="text-4xl font-bold text-[#333333]">WITH US</p>
                                {/* <p className="text-xl  text-white">Contact us</p> */}
                            </div>
                            <form onSubmit={sendEmail} className="w-[350px] sm:w-[400px] md:w-[400px] flex flex-col">
                                <div className="flex flex-col gap-3">
                                    <div id="nameid" className="flex flex-col ">
                                        <input
                                            type="text"
                                            className="py-2 px-2 bg-[#DEE2E3] outline-none border-b-2 border-[#D2D2D2]  "
                                            placeholder="Name"
                                            name="name"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                    <select
                                            id="inputState"
                                            onChange={(e) => setOption(e.target.value)}
                                            value={getOption || ""}    // <-- bind value
                                            className="py-2 pl-1 bg-[#DEE2E3] font-semibold cursor-pointer outline-none border-b-2 border-[#D2D2D2]"
                                            name="option"
                                            required
                                        >
                                            <option value="">Select Option</option> 
                                            <option value="Image Editing Services">Image Editing Services</option>
                                            <option value="Video Editing Services">Video Editing Services</option>
                                            <option value="3D/CGI Services">3D/CGI Services</option>
                                        </select>

                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            type="email"
                                            className="py-2 px-2 bg-[#DEE2E3] outline-none border-b-2 border-[#D2D2D2]"
                                            placeholder="Email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            type="text"
                                            className="py-2 px-2 bg-[#DEE2E3] outline-none border-b-2 border-[#D2D2D2]"
                                            placeholder="Subject"
                                            name="subject"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <textarea
                                            className="py-2 px-2 bg-[#DEE2E3] outline-none border-b-2 border-[#D2D2D2]"
                                            id=""
                                            cols="20"
                                            rows="3"
                                            placeholder="Your message"
                                            name="message"
                                            required
                                        ></textarea>
                                    </div>

                                    <div hidden>
                                        <textarea
                                            cols="30"
                                            rows="3"
                                            type="number"
                                            className=""
                                            name="uniqueid"
                                            id="hello"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <div className="text-center">
                                            <input
                                                type="submit"
                                                id="button-19"
                                                className="bg-[#7c9c30] py-2 px-16 text-white cursor-pointer font-bold rounded-3xl"
                                                value="SUBMIT"
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            {/* <img alt="contact-us" className="w-[350px] sm:w-[400px] md:w-[450px]" src="/img/Illustration.webp" /> */}
                            <Image
  src="/img/Illustration.webp"
  alt="contact-us"
  width={450} // Max width used for optimization
  height={300} // Adjust to match aspect ratio (optional)
  className="w-[350px] sm:w-[400px] md:w-[450px] h-auto"
/>
                        </div>
                    </div>
                </div>

                <br />
            </div>
            <Footer />

        </>

    );
}

export default ContactUs;