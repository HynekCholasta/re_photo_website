import React, { useEffect } from 'react';
import Navbar2 from '../components/Navbar2.js';
import bgImage from '../images/4.jpg';
import img7 from '../images/7.jpg';
import Footer from '../components/Footer';

const About = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const parallaxHero = document.querySelector('.parallax-hero');
            const parallaxWhyChooseUs = document.querySelector('.parallax-why-choose-us');

            if (parallaxHero) {
                parallaxHero.style.backgroundPositionY = `${scrollTop * 0.5}px`;
            }
            if (parallaxWhyChooseUs) {
                parallaxWhyChooseUs.style.backgroundPositionY = `-${scrollTop * 0.1}px`;
            }

            // Triggering animations based on scroll position
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el) => {
                if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                    el.classList.add('animate-fade-in');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check to trigger animations
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative font-sans text-neutralDGrey">
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-20 shadow-lg bg-white transition-transform duration-500 ease-in-out">
                <Navbar2 />
            </div>

            <div className="relative z-10 pt-20">
                {/* Hero Section */}
                <div className="parallax-hero min-h-[600px] bg-cover bg-center flex items-center justify-center text-white transition-transform duration-1000"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundAttachment: 'scroll',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <h1 className="text-7xl drop-shadow-2xl font-bold opacity-0 animate-on-scroll">About Us</h1>
                </div>

                <div className="bg-gray-50">
                    <div className="px-4 lg:px-16 max-w-screen-2xl mx-auto py-20">
                        {/* Our Expertise Section */}
                        <section className="mb-24 text-center opacity-0 animate-on-scroll">
                            <h2 className="text-5xl font-semibold text-neutralDGrey mb-8 animate-fade-in">Our Expertise</h2>
                            <p className="text-lg text-neutralGrey max-w-screen-md mx-auto animate-fade-in">
                                At <span className="font-semibold text-neutralDGrey">[Your Agency Name]</span>, we combine years of experience with a deep passion for visual storytelling. Our team is skilled in both photography and videography, offering a full range of services to meet the unique needs of real estate professionals, property developers, and homeowners.
                            </p>
                        </section>

                        {/* Why Choose Us Section */}
                        <section className="mb-24 opacity-0 animate-on-scroll">
                            <h2 className="text-5xl text-center font-semibold text-neutralDGrey mb-12 animate-fade-in">Why Choose Us?</h2>
                            <div className="parallax-why-choose-us min-h-[600px] relative w-full py-24 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden transition-transform duration-1000"
                                style={{
                                    backgroundImage: `url(${img7})`,
                                    backgroundAttachment: 'fixed',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                <div className="absolute inset-0 bg-black opacity-60"></div>
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-white px-6 lg:px-20">
                                    <div className="animate-fade-in">
                                        <h3 className="text-3xl mb-4 font-semibold">Local Knowledge</h3>
                                        <p className="text-lg">
                                            Being based in Luxembourg, we have a strong understanding of the local real estate market. We know how to highlight the unique features of properties that appeal to buyers in this region.
                                        </p>
                                    </div>
                                    <div className="animate-fade-in">
                                        <h3 className="text-3xl font-semibold mb-4">Drone Photography</h3>
                                        <p className="text-lg">
                                            We are fully licensed and registered to provide drone photography and videography services, offering breathtaking aerial views that set your listings apart.
                                        </p>
                                    </div>
                                    <div className="animate-fade-in">
                                        <h3 className="text-3xl font-semibold mb-4">Comprehensive Services</h3>
                                        <p className="text-lg">
                                            Whether you need high-resolution photos, immersive video tours, or dynamic drone footage, we offer tailored solutions that elevate your property listings.
                                        </p>
                                    </div>
                                    <div className="animate-fade-in">
                                        <h3 className="text-3xl font-semibold mb-4">Personalized Approach</h3>
                                        <p className="text-lg">
                                            As a small team, we pride ourselves on providing personalized service to each client. We work closely with you to understand your vision and deliver results that align with your marketing goals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Additional Content Section */}
                        <section className="mb-24 text-center opacity-0 animate-on-scroll">
                            <h2 className="text-4xl font-semibold text-neutralDGrey mb-8 animate-fade-in">Our Commitment</h2>
                            <p className="text-lg text-neutralGrey max-w-screen-lg mx-auto animate-fade-in">
                                We are dedicated to helping you showcase your properties in the best possible light. Our goal is to create visual content that not only captures attention but also drives action, making your properties stand out in a competitive market.
                            </p>
                        </section>

                        {/* Meet the Team Section */}
                        <section className="mb-24 opacity-0 animate-on-scroll">
                            <h2 className="text-5xl text-neutralDGrey font-semibold text-center mb-12 animate-fade-in">Meet the Team</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="flex flex-col items-center text-center animate-fade-in">
                                    <div className="w-48 h-48 bg-gray-300 rounded-full mb-6 overflow-hidden transition-transform duration-500 hover:scale-110">
                                        <img src="[path_to_hynek_image]" alt="Hynek Cholasta" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-3xl font-semibold text-neutralDGrey">Hynek Cholasta</h3>
                                    <p className="text-neutralGrey mt-4">Co-Founder, Lead Photographer & Drone Specialist</p>
                                    <p className="text-neutralGrey mt-6">
                                        With a deep passion for architecture and a keen eye for detail, I have dedicated my career to capturing the unique essence of every property. As a licensed and registered drone photographer, I specialize in providing stunning aerial imagery that offers a fresh and impactful perspective on real estate.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center text-center animate-fade-in">
                                    <div className="w-48 h-48 bg-gray-300 rounded-full mb-6 overflow-hidden transition-transform duration-500 hover:scale-110">
                                        <img src="[path_to_josef_image]" alt="Josef Jilek" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-3xl font-semibold text-neutralDGrey">Josef Jilek</h3>
                                    <p className="text-neutralGrey mt-4">Co-Founder & Creative Director</p>
                                    <p className="text-neutralGrey mt-6">
                                        With a background in creative arts and a passion for visual storytelling, I focus on ensuring that every project we undertake is executed with the highest level of creativity and precision. My role involves overseeing the visual and creative aspects of our work.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Get in Touch Section */}
                        <section className="text-center mb-24 opacity-0 animate-on-scroll">
                            <h2 className="text-5xl font-semibold text-neutralDGrey mb-8 animate-fade-in">Get in Touch</h2>
                            <p className="text-lg text-neutralGrey max-w-screen-md mx-auto mb-12 animate-fade-in">
                                Ready to enhance your property listings with professional photography and videography? Contact us today to schedule a session or discuss your project. We’re here to help you make a lasting impression.
                            </p>
                            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300 animate-fade-in"><a href='/contact' key='/contact'>Contact Us</a></button>
                        </section>
                    </div>
                </div>
            </div>
            {/* Adding a footer */}
            <div className="">
                <Footer />
            </div>
        </div>
    );
};

export default About;
