import React, { useEffect } from 'react';
import Navbar2 from '../components/Navbar2.js';
import jirsovi from '../images/01.jpg';
import jilkovi from '../images/02.jpg';
 // Importing the new image
import vcely from '../images/vcely.mp4';
import VideoBG from '../images/0709(2).mp4';
import cholastovi from '../images/olomouc dum.jpg';
import jilkovyVideo from '../images/jilkovy video.mp4';
import Footer from '../components/Footer.js';

const Portfolio = () => {
    useEffect(() => {
        const handleScroll = () => {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el) => {
                if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                    el.classList.add('animate-fade-in');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check to trigger animations

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative font-sans text-neutralDGrey bg-slate-100">
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-20 shadow-lg bg-white">
                <Navbar2 />
            </div>

            <div className="relative z-10 pt-20">

                <div className="bg-white">
                    <div className="px-4 lg:px-16 max-w-screen-2xl mx-auto py-20 ">
    

                        {/* New Section with Image and Text */}
                        <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 mb-20 opacity-0 animate-on-scroll">
    <div className="text-center md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-neutralDGrey leading-snug">
            Our Portfolio
        </h2>
        <p className='text-neutralGrey mb-8 text-center mx-auto'>
            Explore our collection of projects showcasing our expertise in real estate photography and videography. Here you'll find a selection of our best work, capturing the essence of properties through stunning visuals.
        </p>
    </div>
</section>
                        <div className='h-16'></div>

                        {/* Portfolio Grid Section */}
                        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 opacity-0 animate-on-scroll">
                            {/* Image 1 */}
                            <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img src={jirsovi} alt="Jirsovi Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-lg font-semibold"></p>
                                </div>
                            </div>

                            {/* Video 1 - No Hover Effects */}
                            <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <video className="w-full h-full object-cover" controls>
                                    <source src={VideoBG} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Image 2 */}
                            <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img src={jilkovi} alt="Jilkovi Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-lg font-semibold"></p>
                                </div>
                            </div>

                            {/* Video 2 - No Hover Effects */}
                            <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <video className="w-full h-full object-cover" controls>
                                    <source src={vcely} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Additional Items */}
                            <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img src={cholastovi} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-lg font-semibold"></p>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <video className="w-full h-full object-cover" controls>
                                    <source src={jilkovyVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer className='animate-on-scroll'/>
        </div>
    );
};

export default Portfolio;
