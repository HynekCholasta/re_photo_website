import React, { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import { MdRealEstateAgent } from 'react-icons/md';
import { PiDrone } from 'react-icons/pi';
import VideoBG from '../images/0709(2).mp4';
import Navbar2 from '../components/Navbar2';
import { MdDesignServices } from "react-icons/md";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.js';

const Services_page = () => {
    const services = [
        {
            id: 1,
            title: "Residential Photography",
            description: (
                <>
                    Capture the warmth and charm of homes with high-resolution images and immersive videos.
                    <span className="font-bold"> Starting at $100 for Photos | $150 for Photos + Video.</span>
                </>
            ),
            image: <FaHome size={30} />,
        },
        {
            id: 2,
            title: "Commercial Photography",
            description: (
                <>
                    Showcase commercial spaces with professional photos and videos that emphasize their potential.
                    <span className="font-bold"> Starting at $120 for Photos | $160 for Photos + Video.</span>
                </>
            ),
            image: <MdRealEstateAgent size={30} />,
        },
        {
            id: 3,
            title: "Drone Photography",
            description: (
                <>
                    Provide a unique perspective with aerial shots and videos that highlight large properties.
                    <span className="font-bold"> Starting at $150 for Photos | $200 for Photos + Video.</span>
                </>
            ),
            image: <PiDrone size={30} />,
        },
        {
            id: 4,
            title: "Custom Packages",
            description: (
                <>
                    Do you have specific needs or a large-scale project?
                    <span className="font-bold"> Contact us for a personalized quote.</span>
                </>
            ),
            image: <MdDesignServices size={30} />,
        },
    ];

    useEffect(() => {
        const cards = document.querySelectorAll('.service-card');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => observer.observe(card));

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, []);

    const handleClick = () => {
        window.open("https://calendly.com/hynek_cholasta/propertyshooting", "_blank", "noopener,noreferrer");
    };

    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-20 shadow-md">
                <Navbar2 />
            </div>

            {/* Main content with video background */}
            <div className="relative flex-grow">
                {/* Background Video */}
                <div className="relative h-screen max-h-[80vh] hidden md:block">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    >
                        <source src={VideoBG} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    {/* Dark Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 h-full flex items-center pt-32 md:pt-0">
                    <div className="px-8 lg:px-20 max-w-screen-2xl mx-auto py-16 text-center">
                        <h1 className="text-5xl font-semibold mb-10 text-center leading-snug text-neutralDGrey relative z-20 inline-block rounded-xl bg-slate-200 px-4 py-2">
                            Our Services & Pricing
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 justify-center items-stretch mt-8 relative z-20">
                            {services.map(service => (
                                <div 
                                    key={service.id} 
                                    className="px-4 py-8 text-center max-w-[350px] md:w-[300px] mx-auto md:h-80 rounded-md 
                hover:-translate-y-2 hover:border-b-4 hover:border-indigo-700 
                transition-all duration-300 flex flex-col items-center p-4">
                                    
                                    <div className="flex flex-col items-center justify-between h-full">
                                        <div className="bg-slate-200 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl 
                                        flex items-center justify-center mb-4">
                                            {service.image}
                                        </div>
                                        <h4 className="text-2xl font-bold text-neutralDGrey mb-4 px-2">
                                            {service.title}
                                        </h4>
                                        <p className="text-sm text-neutralGrey flex-grow">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
                <div className="text-center mt-3 space-x-4 relative z-20">
                    <button className="btn-primary bg-indigo-700 text-white px-6 py-3 rounded-full hover:bg-indigo-900 transition-transform transform hover:scale-105" onClick={handleClick}>
                        Book Now
                    </button>
                    <button className="btn-secondary bg-white text-indigo-700 px-6 py-3 rounded-full hover:bg-indigo-100 transition-transform transform hover:scale-105">
                        <Link to="/contact" className="">Contact Us</Link>
                    </button>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Services_page;
