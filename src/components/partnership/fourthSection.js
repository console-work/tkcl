
'use client'
import  Link  from 'next/link';
import './style.css'
const FourthSection = () => {
    return (
        <div className='container pb-1'>
            <div>
                <div className='fourth-section-container'>
                    <div className='fourth-section-button'>
                        <Link aria-label="Explore 3D" href="/3d">Explore 3D</Link>
                    </div>
                    <div className='fourth-section-button'>
                        <Link aria-label="Request a Quote" href='/contact-us'>Request a Quote</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;