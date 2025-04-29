
'use client'
import Image from 'next/image';
import photo3 from './image/nirob-2.webp'
import './style.css'
const ThirdSection = () => {
    return (

        <div className='container'>
            <div className='row '>
                <div className='third-section-container'>
                    <div className='third-section-text px-2 md:px-2'>
                        <p>
                        <a aria-label='Tommy' className='text-blue-700' href='https://www.linkedin.com/in/tommy-lenssen-241551a/' target='_blank' rel="noreferrer"><b>Tommy Lenssen </b></a> has been a guiding light and a true friend throughout our journey. Leading <a className='text-blue-700' href='https://www.nureg.de/' target='_blank' rel="noreferrer"><b>Nureg GmbH</b></a>, one of Germany’s top content service providers, he’s been pivotal in our collaborative success. The KOW Company and Nureg GmbH bring together the best of print and digital media services with innovative content solutions. This union is set to revolutionize the 3D content production field. Nureg GmbH’s team provides a full spectrum of services, from 3D product scanning to detailed post-processing. With The KOW Company’s contribution, these scans become perfect, effortless 3D outputs. Our clients will benefit from a streamlined approach to 3D content, enjoying unparalleled quality and innovative solutions. Together, we’re charting a new path, ready to transform the 3D content landscape. We’re excited for a future that looks nothing short of spectacular!
                        </p>
                        {/* <p>Where to start with <a aria-label='Tommy' className='text-blue-700' href='https://www.linkedin.com/in/tommy-lenssen-241551a/' target='_blank' rel="noreferrer"><b>Tommy</b></a>? He has always been by our side and guided us throughout. Here is to an excellent friend than just a partner!  </p>
                        <p>He is leading one of {`Germany's`} top content services with <a className='text-blue-700' href='https://www.nureg.de/' target='_blank' rel="noreferrer"><b>Nureg GMBH</b></a>. When The KOW Company and Nureg GMBH comes together under one cohesive umbrella, {`we're`} merging top-tier services for print and digital media, cutting-edge content solution. This union promises not just to enhance our business offerings but also to revolutionize the 3D content production arena.  </p>
                        <p>Nureg GMBH’s adept team crafts impeccable 3D scans of products, and with KOW Company’s touch, these are post-processed to sheer perfection. The result? Flawless, hassle-free 3D outputs!  </p>
                        <p>For our valued clients, this means benefiting from a streamlined, holistic approach to 3D content, all while enjoying the impeccable quality and innovative solutions that only a partnership of this caliber can offer. </p>
                        <p>{`Together, we're set on charting a new course, poised to reshape the 3D content landscape for the better. Can’t wait for the future which is nothing short of spectacular!`} </p> */}
                    </div>
                    <div className='third-section-photo-3 px-2 md:px-0'>
                        <Image loading="lazy" src={photo3} alt='' className='max-w-[570px]' />
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ThirdSection;