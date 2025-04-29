'use client'
import React from 'react';
import Heading from '../Heading/Heading';
import ServiceList from './serviceList';


const Services3D = () => {

    const serviceData = [
        {
            icon: '/img/3d/Color-Adjustments.webp',
            title: '3D Views',
            description: `Product images of any Perspective & Lighting`
        },
        {
            icon: '/img/3d/Textures.webp',
            title: 'Textures',
            description: `Easy change of Fabrics & Materials`
        },
        {
            icon: '/img/3d/3D-Views.webp',
            title: 'Color Adjustments',
            description: `Quick exchange of Colors & Patterns`
        }
    ]
    return (
        <div id='3d-services'>
            <Heading title={'SERVICES'} className="py-10"/>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-3'>
                    <div className='grid grid-cols-1 md:grid-cols-3 items-center pt-8 pb-4 gap-5' >
                        {serviceData.map((item, index) => (
                          index == 1 ? <ServiceList key={index} {...item} divider={true} /> : <ServiceList key={index} {...item} />
                        ))}
                    </div>        
                </div>
            </div>
            
        </div>
    );
};

export default Services3D;