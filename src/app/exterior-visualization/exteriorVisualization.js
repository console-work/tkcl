'use client'
import React from 'react';

import ScrolTop from '@/components/scrolTop/scrolTop';
import Navbar3D from '@/components/navbar/navbar3D';
import StartPage from '@/component3d/exteriorVisualization/startPage/startPage';
import Contact3D from '@/component3d/contact3D/contact3D';
import Footer3D from '@/component3d/footer3D/footer3D';
import EVPage2 from '@/component3d/exteriorVisualization/eVPage2/eVPage2';
import EVPage3 from '@/component3d/exteriorVisualization/eVPage3/eVPage3';
import EVPage4 from '@/component3d/exteriorVisualization/eVPage4/eVPage4';


const ExteriorVisualization = () => {
    return (
        <div>
            <ScrolTop />
            <Navbar3D />
            <StartPage/>
            <EVPage2/>
            <EVPage3/>
            <EVPage4/>
            <Contact3D />
            <Footer3D />
        </div>
    );
};

export default ExteriorVisualization;