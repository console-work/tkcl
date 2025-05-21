'use client'
import React from 'react';
import Heading from '../heading/heaDing';
import ServiceList from './serviceList';


const Services3D = () => {

    const serviceData = [
        {
            icon: '/img/3d/Color-Adjustments.webp',
            title: '3D Product Visualization',
            description: `Showcase products in high-quality 3D renderings from any angle or lighting setup. `
        },
        {
            icon: '/img/3d/Textures.webp',
            title: 'Texture & Material Customization ',
            description: `Easily change and customize your product's textures, fabrics, and materials. `
        },
        {
            icon: '/img/3d/3D-Views.webp',
            title: 'Color & Pattern Optimization ',
            description: `Quickly experiment with different color schemes and patterns to find the perfect look. `
        }
    ]
    return (
        <div id='3d-services'>
            <Heading title={'SERVICES'} className="py-10"/>
            <div className='container mx-auto pb-5'>
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