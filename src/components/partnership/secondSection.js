
'use client'
import Image from 'next/image';
import photo1 from './image/nirob-1.webp'
import './style.css'


const SecondSection = () => {
    return (


        <div className='container'>
            <div className=''>
                <div className='second-section-container'>
                    <div className='second-section-photo'>
                        <Image alt="nirob" loading="lazy"  className='max-w-[360px]' src={photo1} />
                    </div>
                    <div className='second-section-text px-2 '>
                        <p>
                        The KOW Company is proud to reveal a visionary partnership with <a aria-label="Covision Media" className='text-blue-700' href='https://www.covisionmedialab.com/en' target='_blank' rel="noreferrer"><b>Covision Media</b></a>, under the leadership of <a aria-label="Kowser Ahmed" className='text-blue-700' href='https://www.linkedin.com/in/kowser-ahmed-nirob/' target='_blank' rel="noreferrer"><b> Kowser Ahmed</b></a> and tech genius <a aria-label="Franz Tschimben" className='text-blue-700' href='https://www.linkedin.com/in/franz-tschimben/' target='_blank' rel="noreferrer"><b>Franz Tschimben</b></a>. This collaboration is set to transform the 3D content production world. By blending KOW Company’s post-production skills with Covision Media’s advanced 3D scanners, and Nureg GmbH's scanning expertise and support, we’re aiming for flawless 3D outputs and an efficient workflow. This partnership will benefit not just our companies but also our valued customers, offering them quality and precision that will lead to immersive experiences and deeper engagement. Together, we’re confident we’ll set a new standard in 3D content production.
                        </p>
                       
                    </div>

                </div>


            </div>

        </div>


    );
};

export default SecondSection;