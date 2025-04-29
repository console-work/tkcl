'use client'

import ScrolTop from '@/components/scrolTop/scrolTop';
import NavbarContact from '@/components/navbar/navbarContact';
import FirstSection from '@/components/partnership/firstSection';
import SecondSection from '@/components/partnership/secondSection';
import ThirdSection from '@/components/partnership/thirdSection';
import FifthSection from '@/components/partnership/fifthSection';
import FourthSection from '@/components/partnership/fourthSection';





const Partnership = () => {
    return (
        <>
           
            <ScrolTop />
            <NavbarContact />
            <div className='partnership-background pt-20'>

                <div className='container mx-auto'>
                    <FirstSection />
                    <SecondSection />
                    <ThirdSection />
                    <FifthSection />
                    <FourthSection />
                </div>

            </div>
        </>
    );
};

export default Partnership;