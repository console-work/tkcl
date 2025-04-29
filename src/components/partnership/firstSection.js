

'use client'
import './style.css'

const FirstSection = () => {
    return (
        <div className='container'>
            <div className=''>
                <div className='p-i-container'>
                    <div className='p-i-h-a light-divider'>
                        <img alt='partnership' loading="lazy" src={"/img/partnership/1.webp"} />
                    </div>
                    <div className='p-i-h-b light-divider'>
                        <img  alt='partnership' loading="lazy" src={"/img/partnership/2.webp"} />
                    </div>
                    <div className='p-i-h-c'>
                        <img alt='partnership' loading="lazy" src={"/img/partnership/3.webp"} />
                    </div>
                </div>

                <div className='partnership-heading'>
                    <h1><span>3D VISIONARIES UNITE FOR EVOLUTION!</span></h1>
                    <div className='flex justify-center'>
                        <p className='text-justify w-[700px]'>Step into the future with us! Covision Media’s AI-driven scanners and Nureg GmbH’s unmatched 3D scanning and content creation expertise have joined forces with our post-production magic. Together, we’re crafting a powerhouse of visual perfection. Every polygon is a step towards innovation, as we break through boundaries to redefine what’s possible. Be part of this thrilling journey with Covision Media & Nureg GmbH.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FirstSection;