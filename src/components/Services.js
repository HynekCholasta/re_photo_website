import React from "react";
import { MdRealEstateAgent } from "react-icons/md";
import { PiDrone } from "react-icons/pi";
import { FaHome } from 'react-icons/fa';



const Services = () => {
    const services = [ 
        {
            id: 1, 
            title: "Residential Photography", 
            description: "Capture the warmth and charm of homes with crisp, high-resolution images that speak to potential buyers.",
            image: <FaHome size={30} />,
        },
        {
            id: 2, 
            title: "Commercial Photography", 
            description: "Showcase commercial spaces with professional photos that emphasize their potential and versatility.",
            image: <MdRealEstateAgent size={30} />,
        },
        {
            id: 3, 
            title: "Drone Photography", 
            description: "Provide a unique perspective with aerial shots that highlight the scale and beauty of large properties.",
            image: <PiDrone size={30} />,
        },
    ];
    
    return (
        <div className="md:px-14 px-4 max-w-screen-2xl mx-auto mt-10 bg-slate-100">
    <div className="mt-28 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our Services</h2>
        <p className="text-neutralGrey">High-Quality Photography That Drives Results</p>
    </div>

    <div className="flex flex-wrap justify-center">
        {services.map(service => (
            <div 
                key={service.id} 
                className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md 
                hover:-translate-y-2 hover:border-b-4 hover:border-indigo-700 
                transition-all duration-300 flex items-stretch">
                
                <div className="flex flex-col items-center justify-between h-full">
                    <div className="flex flex-col items-center">
                        <div className="bg-slate-200 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl 
                        flex items-center justify-center mb-4">
                            {service.image}
                        </div>
                        <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                            {service.title}
                        </h4>
                    </div>
                    <div className="flex-grow">
                        <p className="text-sm text-neutralGrey">
                            {service.description}
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>

    {/* Spacer Box */}
    <div className="h-16"></div>
</div>
    );
    
};

export default Services;
