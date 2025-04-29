
'use client'
import Image from 'next/image'
import a from './image/Covision-Media-Logo.webp'
import b from './image/Nureg-Logo.webp'
import c from './image/The-KOW-Company-Logo.webp'
import './style.css'

const ForMenuSections = () => {

    return (
        <div className='partnership-nav'>

            {/* <div className='banner-div-flex'> */}
            <div className='banner-logo-container'>
                <div className='banner-logo-container-image1'>
                    <Image alt='Covision' loading="lazy" src={a} />
                </div>
                <div className='banner-logo-container-image2'>
                    <Image alt='Nureg' loading="lazy" src={b} />
                </div>
                <div className='banner-logo-container-image3'>
                    <Image alt='The-KOW-Company' loading="lazy" src={c} />
                </div>
            </div>
            {/* <div className="partnership-nav-content"> */}
            <div className="partnership-nav-content">
                United for Innovation: Our 3D Partnership
            </div>

            <div className='partnership-button'>
                <a href='/partnership' target="_blank">Explore Partnership</a>
            </div>



            {/* </div> */}
        </div>


        // </div>
    );
};


export default ForMenuSections;