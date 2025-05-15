
'use client'
import  Link  from 'next/link';
import './style.css'
const FourthSection = () => {
    return (
        <div className='container pb-1'>
            <div>
                <div className='fourth-section-container'>
                    <div className='fourth-section-button'>
                        <h3 className='block'>
                             <Link aria-label="Explore 3D" href="/3d-modeling-and-rendering">Explore 3D</Link>
                        </h3>
                       
                    </div>
                    <div className='fourth-section-button'>
                        <h3 className='block'>
                          <Link aria-label="Request a Quote" href='/contact-us'>Request a Quote</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;